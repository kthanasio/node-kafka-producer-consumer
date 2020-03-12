export default {
    async run (req,res) {
        let kafka = require('kafka-node'),
            Producer = kafka.Producer,
            kafkaHost = process.env.KAFKA_HOST || 'localhost',
            kafkaPort = process.env.KAFKA_PORT || '9092',
            client = new kafka.KafkaClient({kafkaHost: `${kafkaHost}:${kafkaPort}`, connectTimeout: 200}),
            producer = new Producer(client),
            payloads = [
                { topic: req.body['topic-name'], key: req.body['key'], messages: [JSON.stringify(req.body.data)] }
            ];
            
        producer.on('ready', () => {
                producer.send(payloads, (err, data) => {
                    if (err) {
                        console.log("Error sending message: ", err);
                        producer.close(()=>{});
                        throw new Error('Error sending message' + err);
                    }
                    producer.close(()=>{
                        //console.log('Closing connection');
                    });
                    return res.json({ message: `Mensagem ${JSON.stringify(data)} publicada com sucesso!`});
            });
        });
        producer.on('error', function (err) {console.log('OnError: ', err);})
        
    }
}
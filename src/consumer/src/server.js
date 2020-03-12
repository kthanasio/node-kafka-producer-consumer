require('dotenv').config()
var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    kafkaHost = process.env.KAFKA_HOST || 'localhost',
    kafkaPort = process.env.KAFKA_PORT || '9092' ,
    client = new kafka.KafkaClient({kafkaHost: `${kafkaHost}:${kafkaPort}`, connectTimeout: 200}),
    consumer = new Consumer(
        client,
        [
            { topic: 'Produtos', partition: 0 }
        ],
        {
            autoCommit: true
        }
    );
    consumer.on('message', function (message) {console.log(message.offset,message.key, (message.value.toString()));})
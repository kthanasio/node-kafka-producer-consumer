# Kafka

## Start kafka Container
``docker-compose up -d --build``

## Stop Kafka Container
- docker container ls -aq
- docker container stop $(docker container ls -a -q -f "label=io.confluent.docker")
- docker container stop $(docker container ls -a -q -f "label=io.confluent.docker") && docker system prune -a -f --volumes

# Producer

* Copy .env.example to .env
* Configure parameters on .env file
* Run API Server
  
``npm run-script dev:server``

# Consumer

* Copy .env.example to .env
* Configure parameters on .env file
* Run Consumer
  
``npm run-script dev:server``

# Producer API 

* Example

`curl --location --request POST 'http://localhost:3333/messages' \
--header 'Content-Type: application/json' \
--data-raw '{
    "topic-name": "Produtos",
    "key": "1",
    "data": {
        "name": "Test",
        "age": 10,
        "dob": "1960-01-01",
        "documents": [
        	{"type": "RG", "number": "123"},
        	{"type": "CPF", "number": "234"}]
    }
}'`

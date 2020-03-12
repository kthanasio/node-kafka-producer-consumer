# Kafka

* Start kafka server
``docker-compose up -d --build``

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

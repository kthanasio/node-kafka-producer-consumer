# Kafka Docker Configuration

- git clone https://github.com/confluentinc/examples
- cd examples
- git checkout 5.4.1-post

- docker-compose up -d --build


- docker-compose ps

- http://localhost:9021/

## Stop Kafka Container

- docker container ls -aq
- docker container stop $(docker container ls -a -q -f "label=io.confluent.docker")
- docker container stop $(docker container ls -a -q -f "label=io.confluent.docker") && docker system prune -a -f --volumes


# Producer

- kafka-node
docker build -t chat-server-app .
docker run -p 3000:3000 chat-server-app

docker stop $(docker ps -q --filter ancestor=chat-server-app)

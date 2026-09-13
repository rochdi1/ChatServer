docker build -t chat-server-app .
docker run -p 3000:3000 chat-server-app

docker stop $(docker ps -q --filter ancestor=chat-server-app)

git remote add origin https://github.com/rochdi1/ChatServer.git
gh repo create ChatServer --public --source=. --remote=origin --push

git push -u origin main
git push --set-upstream origin master
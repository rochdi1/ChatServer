# Offizielles Node.js-Image als Basis
FROM node:20-alpine

# Arbeitsverzeichnis im Container erstellen
WORKDIR /usr/src/app

# Abhängigkeiten kopieren und installieren
COPY package*.json ./
RUN npm install

# Quellcode kopieren
COPY . .

# Port im Container freigeben
EXPOSE 3000

# Startbefehl
CMD [ "npm", "start" ]

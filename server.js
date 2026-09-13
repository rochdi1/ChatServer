const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path'); 

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" } // Erlaubt Verbindungen von allen Quellen
});

// Test-Route für den Browser
//app.get('/', (req, res) => {
//    res.send('<h1>Chat-Server läuft!</h1>');
//});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// WebSocket-Verbindung für den Chat
io.on('connection', (socket) => {
    console.log('Ein Benutzer hat sich verbunden:', socket.id);

    // Nachricht empfangen und an alle weiterleiten
    socket.on('chat message', (msg) => {
        console.log('Nachricht erhalten:', msg);
        io.emit('chat message', msg); 
    });

    socket.on('disconnect', () => {
        console.log('Benutzer getrennt:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});

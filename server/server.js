const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    return res.json({ test: 'test' });
})

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})
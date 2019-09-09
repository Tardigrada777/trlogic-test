const express = require('express');
const jsonServer = require('json-server');

const server = express();

server.use('/api', jsonServer.router('db.json'));

const port = process.env.PORT || 3000;

server.set('port', port);

server.use(express.static('dist'));

server.get('/', (req, res) => {
  res.render('index.html');
});

server.get('/*', (req, res) => {
  res.redirect('/');
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});

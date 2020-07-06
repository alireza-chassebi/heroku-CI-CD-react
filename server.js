const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

// middleware
app.use(express.static(path.join(__dirname, 'build'))); // static assets referenced have root path __dirname/build
app.use(compression());

app.get('/', (_, res) => {
  try {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  } catch (error) {
    res.send(error.message);
  }
});

app.get('*', (_, res) => {
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);

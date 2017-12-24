const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const ms = require('ms');

const app = express();
const staticOptions = {maxAge: '10d'};

app.use(helmet());
app.use(compression());

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist'), staticOptions));

app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(port, () => {
  console.log('Listening on port ' + port);
})

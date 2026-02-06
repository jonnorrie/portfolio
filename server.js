const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")))  // if the browser asks for a file, look in this directory

app.get('/', (req, res) => { // load index.html when path is /
  res.sendFile(path.join(__dirname, "public", 'index.html'));
});

app.get('/path',  (req, res) => { // load index.html when path is /path
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

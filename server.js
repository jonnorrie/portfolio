const express = require('express');

const path = require('path');
const db = require('./db')   //  import database helper

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")))  // if the browser asks for a file, look in this directory

app.get('/', (req, res) => { // load index.html when path is /
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// loads list of items from db
app.get('/items', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users')
    res.json(result.rows)
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ error: error.message })
  }
})


app.get('/path',  (req, res) => { // load index.html when path is /path
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

require('dotenv').config() // loads .env
const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  database: 'postgres',
  host: '/var/run/postgresql', // Unix socket directory
  port: 5432
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}

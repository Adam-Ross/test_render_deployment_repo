const express = require('express')

const {Pool} = require('pg')

const dotenv = require('dotenv')
dotenv.config()


const app = express()

const PORT = process.env.PORT || 5001


const conString = process.env.CONNECTION_STRING

const pool = new Pool({
    conString,
})

app.get('/api/todos', async () => {
    try {
        const todos = await pool.query('SELECT * FROM todos;')
        res.json(todos.rows).status(200)
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})  
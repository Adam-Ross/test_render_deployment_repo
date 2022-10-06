const express = require('express')
const cors = require('cors')

const {Pool} = require('pg')



const dotenv = require('dotenv')
dotenv.config()


const app = express()
app.use(cors())
app.use(express.static('public'))

const PORT = process.env.PORT || 5001


const connectionString = 'postgres://todo_db_user:T1Q4GJ8qzSljxAcNt5OlHsk2hB9cPsua@dpg-ccuv072en0hrsnghqks0-a.oregon-postgres.render.com/todo_db_j35t?ssl=true'

const pool = new Pool({
    connectionString,
})

app.get('/api/todos', async (req, res) => {
    try {
        const test = await pool.query('SELECT * FROM todos;')
        res.json(test.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})  
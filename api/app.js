// requiring express
const { Router } = require("express");
const express = require("express");
const cors = require('cors');
// creating an app
const app = express();

// setting a port
const port =  3057

app.use(cors())

app.use(express.json())

// requiring task route
const tasksRoute = require('./src/routes/tasksRoute')

// using my tasksRout
app.use('/api/tasks', tasksRoute)


app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})
require('./mongooseConnection')
const mongoose = require('mongoose')

const Schema = new mongoose.Schema ({
    task: {
        type : String
    },
    task_date: {
        type: Date
    },
    note : {
        type : String
    },
    completed : {
        type : Boolean  
    }
   

})

module.exports = mongoose.model("Task", Schema )
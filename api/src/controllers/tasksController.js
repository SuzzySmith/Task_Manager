const router = require("express").Router();

//requiring mongoose
require("../models/mongooseConnection");

const tasks = require("../models/tasks");
const Task = require("../models/tasks");

// let task = [
//   {
//     id: 1,
//     title: "Go to market",
//     task_date: new Date(Date.now()),
//     note: 'Orange, Yam, Pineapple, strawberry'
//   },
//   {
//     id: 2,
//     title: "Learn on codeacademy",
//     task_date: new Date(),
//     note: 'Learn Javascript'
//   }
// ]
const makeResponse = (status = 200) => ({
  sucess: true,
  message: "OK",
  data: [

  ],
  status: status,
});

exports.index = async (req, res) => {
  let response = makeResponse();
  //display all data from database
  const tasks = await Task.find({});
  response.data = tasks;

  return res.status(response.status).json(response);
};
exports.getTask = async (req, res) => {
  
  try {
    let response = makeResponse()
    const task = await Task.findById(req.params.id)
    response.data = task;
    return res.status(response.status).json(response)
} catch (error) {
    console.log(error)
}
};

exports.add = async (req, res) => {
  let response = makeResponse(201);
console.log(req.body)
  //save a new task to model
  const task = new Task(req.body);
  await task.save();
  response.data = task;

  return res.status(response.status).json(response);
};

exports.edit = async (req, res) => {
  let response = makeResponse();
  const task = await Task.findById(req.params.id)
  // const task = await Task.updateOne({id: req.params.id}, req.body)

  let editTask;
  Task.map((tasks) => {
    if (tasks.id == req.params.id) {
      tasks.task = req.body.task;
      tasks.task_date = req.body.task_date;
      tasks.note = req.body.note;

      editTask = tasks;
    }
    return tasks;
  });
  response.data = editTask;


  response.data = task

  return res.status(response.status).json(response);
};



exports.delete = async (req, res) => {
  let response = makeResponse();

  const deletetask = await Task.deleteOne({id: req.params.id});
  response.data = deletetask

  return res.status(response.status).json(response);
};

exports.clear = async (req, res) => {
  let response = makeResponse();

  return res.status(response.status).json(response);
};

exports.toggleCompleted = async (req, res) => {
  let response = makeResponse();

  const task = await Task.findById(req.params.id);
  if(task.completed){
    task.completed = false;
  } else {
    task.completed = true
  }
  await task.save();
  response.data = task;
 

  return res.status(response.status).json(response);
};
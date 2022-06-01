// requiring express
const express = require('express')

const controller = require('../controllers/tasksController');


//defining routes
const router = require('express').Router();

router.get('/', controller.index)

router.post('/', controller.add)

router.put('/:id', controller.edit)

router.get('/:id', controller.getTask)

router.delete('/:id', controller.delete)

router.delete('/clear', controller.clear)

router.put('/:id/toggle', controller.toggleCompleted)



module.exports = router


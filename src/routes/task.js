const express= require('express');

 const router = express.Router();

const Task = require('../models/Task');

 router.get('/', async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
 });

router.post('/', async(req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json({
    status: "Tarea almacenada"
  });
});

router.put('/:id', async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: 'Tarea Actualizada correctamente'
  });
});

router.delete(':id', async (req, res) => {
  Task.findByIdAndRemove(req.params.id);
  res.json({
    status: 'Tarea removida de forma correcta'
  })
});
 module.exports = router;

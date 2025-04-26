const express = require('express');
const router = express.Router();
const { getDB } = require('./db');

router.get('/tasks', async (req, res) => {
    const tasks = await getDB().collection('tasks').find().toArray();
    res.json(tasks);
});

router.post('/tasks', async (req, res) => {
    const task = req.body;
    await getDB().collection('tasks').insertOne(task);
    res.status(201).json(task);
});

router.delete('/tasks/:id', async (req, res) => {
    const { ObjectId } = require('mongodb');
    await getDB().collection('tasks').deleteOne({ _id: new ObjectId(req.params.id) });
    res.status(204).end();
});

module.exports = router;

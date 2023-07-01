const Todo = require('../models/todo')

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (error) {
        res.status(400).json({message: error.message})
    } 
}

exports.createTodo = async (req, res) => {
    try {
        const todo = new Todo(req.body)
        await todo.save()
        res.json({todo})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getATodo = async (req, res) => {

}

exports.updateTodo = async (req, res) => {

}

exports.deleteTodo = async (req, res) => {
    try {
        await req.todo.deleteOne()
        res.json({message: "Todo Item Deleted"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
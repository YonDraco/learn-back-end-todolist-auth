const todoModel = require('../models/Todo');
async function getTodos(req, res){
    let data = await todoModel.getTodos();
    res.json(data); // or res.render
}

module.exports = getTodos;
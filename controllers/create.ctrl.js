const todoModel = require('../models/Todo');

function index(req, res) {
    res.render('create/index', {
        auth: req.auth
    });
}
async function create(req, res) {
    if(req.auth) {
        let newTodo = new todoModel(req.body);
        await newTodo.save();
    }
    res.redirect('/');
}
module.exports = {index, create};

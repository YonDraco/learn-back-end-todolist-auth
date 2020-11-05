const todoModel = 
    require('../models/Todo');
async function index(req, res) {
    let p = Number(req.query.p || 1);
    let n = Number(req.query.nitem || 3);
    pr = p - 1;
    // bussiness logic
    let data = await todoModel.getAll(p, n);
    if(data.length < n) nxt = 0;
    else nxt = p+1;
    res.render('home/index', {
        title: 'TODO LIST', 
        todos: data,
        p, n, pr, nxt,
        auth: req.auth,
        username: req.username,
    });
}

async function deleteTodo(req, res) {
    if(req.auth) {
        await todoModel.deleteOne({
            _id: req.params.id
        });
    }
    res.redirect('/');
}

module.exports = { index, deleteTodo };

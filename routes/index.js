const setHomeRoutes = require('./home.routes');
const setCreateRoutes = require('./create.routes');

const loginCtrl = require(
    '../controllers/login.ctrl');
const getTodos = require('../api/getTodos');
function setRoutes(app) {
    setHomeRoutes(app);
    setCreateRoutes(app);
    app.get('/login', loginCtrl.index);
    app.post('/login', loginCtrl.login);
    app.get('/api/todos', getTodos);
}

module.exports = setRoutes;


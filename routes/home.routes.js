const homeCtrl = 
    require('../controllers/home.ctrl');
function setHomeRoutes(app) {
    app.get('/', homeCtrl.index);
    app.get('/delete/:id', homeCtrl.deleteTodo);
}

module.exports = setHomeRoutes;

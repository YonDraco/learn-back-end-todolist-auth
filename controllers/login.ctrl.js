//const uid = require('uid-safe');
const jwt = require('jsonwebtoken');
function index(req, res) {
    res.render('login/index', 
        {
            title: 'Login'
        });
}
function login(req, res) {
    const {username, password} = req.body;
    if(username == 'hoang' && password=="123") {
        jwt.sign({user: username}, req.app.get('secretKey'), (err, token)=>{
                res.cookie('token', token);
                res.redirect('/');
        });
        // const ssid = uid.sync(18);
        // req.app.set('ses', [
        //     ...req.app.get('ses'),
        //     {ssid: ssid, user: username}]);
        
        // res.cookie('ssid', ssid);
        // res.redirect('/');
    } else {
        res.redirect('/login');
    }
    
}

module.exports = {index, login};

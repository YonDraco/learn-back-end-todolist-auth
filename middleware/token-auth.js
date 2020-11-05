const jwt = require('jsonwebtoken');
// Authenticate
function tokenAuth(req, res, next) {
    if (Object.keys(req.cookies).length &&
        req.cookies.token) {
        jwt.verify(req.cookies.token, req.app.get('secretKey'),
            (err, data) => {
                req.auth = true;
                req.user = data.user;
                next();
            })
    }else {
        req.auth = false;
        req.username = '';
        next();
    }
}

module.exports = tokenAuth;

//Authentication
function auth(req, res, next) {
    let auth = false;
    let username = '';

    if(Object.keys(req.cookies).length && 
        req.cookies.ssid) {
        const tmp = req.app.get('ses').filter(
            s => s.ssid == req.cookies.ssid
        );
        if(tmp.length) {
            auth = true;
            username = tmp[0].user;
        }
    }

    req.auth = auth;
    req.username = username;
    next();
}

module.exports = auth;

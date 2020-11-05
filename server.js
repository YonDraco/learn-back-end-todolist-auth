const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const auth = require('./middleware/auth');
const tokenAuth = require('./middleware/token-auth');
const mongoose = require('mongoose');
const setRoutes = require('./routes');

mongoose.connect('mongodb+srv://backend:backend123@cluster0.ibvyp.mongodb.net/backend?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => {console.log('Connected');},
    err => {console.log(err)}
);

const app = express();
app.set('secretKey', 'yondraco')
app.set('views', './views');
app.set('view engine', 'pug');
app.set('ses', []);
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(cookieParser());
// app.use(auth);
// dat truoc setRoutes(app)
app.use(tokenAuth);

setRoutes(app);

app.listen(3000, ()=> {
    console.log('Server on port 3000');
})
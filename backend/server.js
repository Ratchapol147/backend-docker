const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const morgan = require("morgan");
const configDb = require('./configs/config-database');
const { DEBUG } = require('./helpers/DEBUG');





global.__basedir = __dirname;


const appSocket = express();
const serverSocket = require('http').createServer(appSocket);
const options = {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    },
    // path: "/tasana/socketio/socket.io"
};
const io = require('socket.io')(serverSocket, options);



global.__basedir = __dirname;

// view engine setup
app.set("view engine", "ejs");
app.set('view engine', 'jade');



// Middleware
app.use(cookieParser());
app.use(bodyParser.json({ extended: false, limit: "2000mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "2000mb" }));
app.use(morgan((process.env.NODE_ENV==='production')? 'combined' : 'dev'));

// CORS Middleware: allow cors requests from any origin and with credentials
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
    next()
})
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));
app.options('*', cors());


app.use(compression());


app.use('/api/',require('./router/model.router'))




app.get("/", (req, res) => {
    res.json({ message: "test application." });
});
  

const PORT = new configDb().app.port;

app.listen(PORT || "1000", () => {
    console.log(' \u{1F680} app listening on port ' + PORT + ' \u{1F525}');
})



module.exports = app;
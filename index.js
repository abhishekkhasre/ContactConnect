const express = require("express"); //importing express 
const port = 8080; //port number 
const bodyParser = require("body-parser"); 
const session = require("express-session"); //to create session
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  key : "UserId",
  name: "contact",
  secret: 'INSTAHYRE',
  resave: false,
  saveUninitialized: false
}));


app.set('view engine', 'ejs'); //ejs is view engine
app.set('views', './views');
app.use(express.static('assets'));

app.use(cookieParser());

//routes
app.use('/', require('./routes'));

app.listen(port, (err) => {
  if (err) {
    console.log("Error connecting to the Server");
  }

  console.log("Connected to the server. Running at Port ", port);
});

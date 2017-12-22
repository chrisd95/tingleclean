// Dependencies and requires (START)
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator =  require('express-validator');
var mongojs = require('mongojs');
var db = mongojs('example', ['coins']);
//dependencies and requires (END)
var app = express();


// View Engine (START)
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
// View Engine (END)

// body-parser Middleware (START)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// body-parser middleware (END)

// Global variables
app.use(function(req, res, next){
  res.locals.errors = null;
  next();
});

// Express Validator Middleware(START)
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.')
    , root  = namespace.shift()
    , formParam = root;
    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg : msg,
      value : value
    }
  }
}));

// Express Validator Middleware(END)


// Set Static Path (EJS,CSS,jquery,etc.) (START)
app.use(express.static(path.join(__dirname, 'public')))
// Set Static Path (EJS,CSS,jquery,etc.) (END)


var suscribers = [];
var coins;


// Main website GET (START)
app.get('/', function(req, res){
  //render db
  db.coins.find(function (err,docs){
    console.log(docs)
    //render EJS
    res.render('index', {
        //render variables
      title: 'Welcome to Tingle',
      coins: docs,
      suscribers: suscribers
    });
  })
});
// Main website GET (END)

// Catch suscribers (START)
app.post('/suscribers/add', function(req,res){
  //validator for email (END)
  req.checkBody('email', 'Please enter your email').notEmpty();
var errors = req.validationErrors();
  if(errors){
    res.render('index', {
        //render variables
        title: 'Welcome to Tingle',
        coins: coins,
        suscribers: suscribers,
        errors: errors
    });
  } else {
    var newSuscriber = {
      email: req.body.email
    }
    console.log('SUCCESS')
  }
  //validator for email (END)
  db.suscribers.insert(newSuscriber, function(err, result){
    if(err){
      console.log(err);
    }
    res.redirect('/')
  })
});
// Catch suscribers (END)


// Ports (START)
var serverPORT = 5000

app.listen(serverPORT,function(){
  console.log('Server has started on Port '+serverPORT+'...')

});
// Ports (END)

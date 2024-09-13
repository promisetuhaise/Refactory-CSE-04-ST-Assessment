require("dotenv").config();


const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const session = require('express-session');
const flash = require('connect-flash');



//importing routes
const SignupRoutes = require('./routes/SignupRoutes')



const app = express();


// Mongoose configuration
mongoose.connect(process.env.DATABASE_LOCAL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
  });
  
  mongoose.connection
    .once("open", () => {
      console.log("Mongoose connection open");
    })
    .on("error", (err) => {
      console.error(`Connection error: ${err.message}`);
    });
  


    // View engine configuration
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));




app.use(session({
    secret: 'Secret', // Replace with your secret key
    resave: false,
    saveUninitialized: true
  }));
  
  app.use(flash());
  
  app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
  });




app.use('/RIM_AVA.GR',SignupRoutes)

app.get('*', (req, res) => res.status(404).send('Page Not Found' ));

app.listen(3990, () => console.log('listening on port 3990'));

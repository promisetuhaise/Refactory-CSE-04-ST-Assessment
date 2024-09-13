const express = require('express')
const router = express.Router()
const Signup = require('../models/signupModels');

router.get('/bookFlight', (req, res) => {
    res.render('signUp'); 
  });




  router.post('/Flights', async (req, res) => {
    try {
      


      const FlightSignup = new Signup({
        fullName: req.body.fullName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        nationality: req.body.nationality,
        phoneNumber: req.body.phoneNumber,
        emailAddress: req.body.emailAddress,
        poBox: req.body.poBox,
        emergencyPhone: req.body.emergencyPhone,
        passportNumber: req.body.passportNumber,
        visaDocument: req.file ? req.file.path : null, 
        departureCity: req.body.departureCity,
        destinationCity: req.body.destinationCity
      });
  
     
      await FlightSignup.save();
  
     
      res.redirect('/RIM_AVA.GR/bookFlight'); 
    } catch (error) {
      console.error('Error while processing form submission:', error);
      res.status(500).send('Internal Server Error'); 
    }
  });
  











module.exports =router
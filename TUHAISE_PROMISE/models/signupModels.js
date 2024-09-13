const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const SignupSchema = new mongoose.Schema({
    fullName: {
      type: String,
      trim:true,
     
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other', 'none',],
      trim:true,
      
     
    },
    dateOfBirth: {
      type: Date,
      trim:true,
     
    },
    nationality: {
      type: String,
      trim:true,
     
    },
    phoneNumber: {
      type: String,
      trim:true,
      unique:true,
      
      
     
    },
    emailAddress: {
      type: String,
      unique:true,
      trim:true,
     
     
    },
    poBox: {
      type: String,
      
    },
    emergencyPhone: {
      type: String,
      trim:true,
      
     
    },
    passportNumber: {
      type: String,
      trim: true,
      
     
    },
    visaDocument: {
      type: String, 

    },
    departureCity: {
      type: String,
      trim: true,
     
    },
    destinationCity: {
      type: String,
      trim:true,
     
    }
  })


  SignupSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
  
  module.exports = mongoose.model('Signup', SignupSchema);
  
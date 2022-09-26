var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var UserModel = require('./userschema');
 
// Connecting to database
var query = "mongodb+srv://admin:admin@tugaspaw.j4zikmu.mongodb.net/?retryWrites=true&w=majority"
 
const db = (query);
mongoose.Promise = global.Promise;
 
mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
    else {
        console.log("Connection success!")
    }
});

module.exports = router;

router.post('/save', function(req, res) {
    var newUser = new UserModel();
       newUser.UserId = req.body.UserId;
       newUser.Name = req.body.Name;
       
       newUser.save(function(err, data){
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });

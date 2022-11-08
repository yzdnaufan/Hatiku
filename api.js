var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var UserModel = require('./userschema');

// Connecting to database
var query = "mongodb+srv://admin:admin@tugaspaw.j4zikmu.mongodb.net/?retryWrites=true&w=majority";
 
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
               res.send("Data inserted" + req.body.Name);
           }
       });
    });

    router.get('/findall', function(req, res) {
        UserModel.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
     });

     router.get('/findfirst', function(req, res) {
        UserModel.findOne({UserId:{$gt:req.body.UserId}}, 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
    });

    router.post('/delete', function(req, res) {
        UserModel.findByIdAndDelete((req.body.id), 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data Deleted!");
            }
        });  
    });

    router.post('/update', function(req, res) {
        UserModel.findByIdAndUpdate(req.body.id, 
        {Name:req.body.Name}, function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data updated!");
            }
        });  
    });

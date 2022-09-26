var mongoose=require('mongoose');
 
var UserSchema = new mongoose.Schema({
    UserId:Number,
    Name:String
});
 
module.exports = mongoose.model(
    'user', UserSchema, 'Users');
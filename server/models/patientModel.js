import mongoose from "mongoose";
 
const patient = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});
 
export default mongoose.model('Patients', patient);
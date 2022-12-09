import mongoose from "mongoose";
 
const patient = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    height:{
        type: Number,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    gender:{
        type: Number,
        //1: Woman, 2:Man
        enum: [1,2],
        required: true
    },
    ap_hi:{
        type: Number,
        required: true
    },
    ap_lo:{
        type: Number,
        required: true
    },
    cholestrol:{
        type: Number,
        //1: normal, 2: above normal, 3: well above normal
        enum: [1,2,3],

        required: true
    },
    gluc:{
        type: Number,
        //1: normal, 2: above normal, 3: well above normal
        enum: [1,2,3],

        required: true
    },
    smoke:{
        type: Boolean,
        required: true
    },
    alco:{
        type: Boolean,
        required: true
    },
    active:{
        type: Boolean,
        required: true
    },
    cardio:{
        type: Boolean,
        required: true
    }
});
 
export default mongoose.model('Patients', patient);
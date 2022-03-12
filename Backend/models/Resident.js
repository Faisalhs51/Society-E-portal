const mongoose = require("mongoose");
const {Schema} = mongoose;

const ResidentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    wing:{
        type: String,
        required: true
    },
    rNo:{
        type: Number,
        required: true
    },
    roomModel:{
        type: Number,
        required: true
    },
    maintenance:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const Resident = mongoose.model('resident', ResidentSchema);
module.exports = Resident;
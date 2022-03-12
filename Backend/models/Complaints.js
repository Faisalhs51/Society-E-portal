const mongoose = require("mongoose");
const {Schema} = mongoose;

const ComplaintSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    complaintDesc:{
        type: String,
        required: true
    }
})

const Complaint = mongoose.model('complaint', ComplaintSchema);
module.exports = Complaint;
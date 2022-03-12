const mongoose = require("mongoose");
const {Schema} = mongoose;

const NoticeSchema = new Schema({
    date:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const Notice = mongoose.model('notice', NoticeSchema);
module.exports = Notice;
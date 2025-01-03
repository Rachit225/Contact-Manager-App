const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User",
    },
    name:{
        type: String,
        required : [true, "Please add Name!"],

    },
    email: {
        type: String,
        required : [true, "Please add email!"],

    },
    phone: {
        type: String,
        required : [true, "Please add Phone Number!"],

    }
},
{timestamps: true});

module.exports = mongoose.models.Contact ||mongoose.model("Contact", contactSchema);
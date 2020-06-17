const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idnumber: {type: Number, required: true},
    password: {type: String, required: true},
    username: {type: String, required: true}
});

module.exports = mongoose.model("users", userSchema);
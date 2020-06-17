const mongoose = require('mongoose');

const gradeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idnumber: {type: Number, required: true},
    term: {type: String, required: true},
    year: {type: String, required: true},
    ccode: {type: String, required: true},
    units: {type: Number, required: true},
    grade: {type: Number, required: true}
});

module.exports = mongoose.model("grades", gradeSchema);
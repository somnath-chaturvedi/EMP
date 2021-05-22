const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({

    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6
    },
    dateOfBirth: {
        type: Date,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    aadharCard: {
        type: Number,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    designation: {
        type: String,
        require: true
    },
    ctc: {
        type: Number,
        require: true
    },

    joiningBonus: {
        type: Number,
        require: true
    },

    relocationBonus: {
        type: Number,
    },

    stocks: {
        type: Number,
    },

    leave: {
        type: Number,
        default: 0
    }

},
{timestamps: true})


module.exports = mongoose.model("Employee", EmployeeSchema)
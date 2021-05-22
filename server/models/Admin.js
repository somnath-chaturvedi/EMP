const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    employee: {
        type: Array,
        default: []
    },

    isAdmin: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("Admin", AdminSchema)
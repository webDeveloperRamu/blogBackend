const mongoose = require('mongoose')
const { Schema } = mongoose

const articla = new Schema({  
    fullName: {
        type: String,
        require: true
    },
    comment: String,
    title: {
        type: String,
        require: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Articale', articla)


const mongoose = require('mongoose')
const { Schema } = mongoose

const BlogSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  author: String,
  title: {
    type: String,
    require: true
  },
  content: []
}, {
  timestamps: true
})

module.exports = mongoose.model('Blog', BlogSchema)


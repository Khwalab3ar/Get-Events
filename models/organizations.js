const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Organization = new Schema(
  {
    name: { type: String, required: true },
    industry: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('organization', Organization)

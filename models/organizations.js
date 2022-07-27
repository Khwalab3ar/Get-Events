const { Schema } = require('mongoose')

const Organization = new Schema(
  {
    name: { type: String, required: true },
    industry: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Organization

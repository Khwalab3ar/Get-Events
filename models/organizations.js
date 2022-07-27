const { Schema } = require('mongoose')

const Organization = new Schema(
  {
    name: { type: String, required: true },
    industry: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Organization

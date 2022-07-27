const { Schema } = require('mongoose')

const Personal = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: false },
    email: { type: String, required: true },
    organization: {
      type: Schema.Types.ObjectId,
      ref: 'Organization',
      required: false
    },
    event: [{ type: Schema.Types.ObjectId, ref: 'Event', required: false }]
  },
  { timestamps: true }
)

module.exports = Personal

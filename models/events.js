const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Event = new Schema(
  {
    name: { type: String, required: true },
    industry: { type: String, required: false },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: String, required: true },
    organization: {
      type: Schema.Types.ObjectId,
      ref: 'Organization',
      required: false
    }
  },
  { timeseries: true }
)

module.exports = mongoose.model('events', Event)

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Event = new Schema(
  {
    name: { type: String, required: true },
    industry: { type: String, required: false },
    type: { type: String, required: true },
    price: { type: String, required: true },
    date: { type: Date, required: true },
    organization: { type: Schema.Types.ObjectId, ref: 'Organization' }
  },
  { timeseries: true }
)

module.exports = mongoose.model('event', Event)

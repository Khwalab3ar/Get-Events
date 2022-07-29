const mongoose = require('mongoose')
require('dotenv').config()

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/getEventDatabase'
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to DB')
  })
  .catch((e) => {
    console.log('connection error ', e.message)
  })

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db

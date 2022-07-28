const mongoose = require('mongoose')
require('dotenv').config()

const MONGO_URI = `mongodb+srv://khwalabear:${process.env.MONGO}@cluster0.lyvpy.mongodb.net/getEventDatabase`
let dbUrl = MONGO_URI
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

const db = require('../db')
const Event = require('../models/event')
const Organization = require('../models/organization')
const Personal = require('../models/personal')

db.on('error', console.error.bind(console, 'MongoDB connection error : '))

const main = async () => {
  const events = [{}]
  const org = [{}]
  const person = [{}]
}

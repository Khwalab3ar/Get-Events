const { model } = require('mongoose')
const PersonalSchema = require('./personals')
const EventSchema = require('./events')
const OrgSchema = require('./organizations')

const Event = model('Event', EventSchema)
const Personal = model('Personal', PersonalSchema)
const Organization = model('Organization', OrgSchema)

module.exports = {
  Personal,
  Event,
  Organization
}

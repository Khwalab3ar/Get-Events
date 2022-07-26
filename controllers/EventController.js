const Event = require('./models/event')

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await Event.find()
    res.status(200).json(allEvents)
  } catch (e) {
    res.status(500).send(e.message)
  }
}

module.exports = {
  getAllEvents
}

const Event = require('../models/events')

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await Event.find()
    return res.status(200).json(allEvents)
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = {
  getAllEvents
}

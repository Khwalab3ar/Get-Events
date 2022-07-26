const { Event } = require('../models/index')

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await Event.find()
    return res.status(200).json(allEvents)
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const createEvent = async (req, res) => {
  try {
    const newEvent = await new Event(req.body)
    await newEvent.save()
    return res.status(200).json(newEvent)
  } catch (e) {
    res.status(500).send(e.message)
  }
}

const searchEvents = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const events = await Event.find({ organization: id })
    if (events) {
      return res.status(200).json(events)
    }
    return res.status(404).send('No events were found.')
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params
    const event = await Event.findByIdAndUpdate(id, req.body, { new: true })
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params
    const event = await Event.findByIdAndDelete(id)
    if (event) {
      return res.status(200).send('Event was deleted')
    }
    throw new Error('event was not found')
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = {
  getAllEvents,
  createEvent,
  searchEvents,
  updateEvent,
  deleteEvent
}

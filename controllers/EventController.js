const { response } = require('express')
const Event = require('../models/events')

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await Event.find()
    return res.status(200).json(allEvents)
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const searchEvents = async (req, res) => {
  try {
    const events = await Event.find(req.body)
    if (events) {
      return res.status(200).json(events)
    }
    return res.status(404).send('No events were found.')
  } catch (e) {
    return res.status(500).send(e.message)
  }
  res.send('hello')
}

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params
    const event = await Event.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, event) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!event) {
          res.status(500).send('Event was not found')
        }
      }
    )
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
  searchEvents,
  updateEvent,
  deleteEvent
}

const Personal = require('../models/personals')

const getAllPersonals = async (req, res) => {
  try {
    const allPersonal = await Personal.find()
    return res.status(200).json(allPersonal)
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const createPersonal = async (req, res) => {
  try {
    const person = await new Personal(req.body)
    await person.save()
    return res.status(200).json(person)
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const searchPersonals = async (req, res) => {
  try {
    const personals = await Personal.find(req.body)
    if (personals) {
      return res.status(200).json(personals)
    }
    return res.status(400).send('No personals were found')
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const updatePersonal = async (req, res) => {
  try {
    const { id } = req.params
    const person = await Personal(
      id,
      req.body,
      { new: true },
      (err, person) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!person) {
          res.status(500).send('Personal was not found')
        }
      }
    )
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const deletePersonal = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Personal.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Personal was deleted')
    }
    throw new Error('Personal does not exist')
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = {
  getAllPersonals,
  createPersonal,
  searchPersonals,
  updatePersonal,
  deletePersonal
}

const Personal = require('../models/personal')

const getAllPersonals = async (req, res) => {
  try {
    const allPersonal = await Personal.find()
    return res.status(200).json(allPersonal)
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = { getAllPersonals }

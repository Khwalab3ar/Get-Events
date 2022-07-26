const Organization = require('../models/organization')

const getAllOrgs = async (req, res) => {
  try {
    const allOrgs = await Organization.find()
    return res.status(200).json(allOrgs)
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

module.exports = { getAllOrgs }

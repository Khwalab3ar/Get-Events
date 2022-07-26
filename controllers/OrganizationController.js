const Organization = require('../models/organizations')

const getAllOrgs = async (req, res) => {
  try {
    const allOrgs = await Organization.find()
    return res.status(200).json(allOrgs)
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const createOrg = async (req, res) => {
  try {
    const newOrg = await Organization(req.body)
    await newOrg.save()
    return res.status(200).json(newOrg)
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const searchOrgs = async (req, res) => {
  try {
    const orgs = await Organization.find(req.body)
    if (orgs) {
      return res.status(200).json(orgs)
    }
    return res.status(404).send('No organizations were found')
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const updateOrg = async (req, res) => {
  try {
    const { id } = req.params
    const org = await Organization.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, events) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!org) {
          res.status(500).send('Organization was not found')
        }
      }
    )
  } catch (e) {
    return res.status(500).send(e.message)
  }
}

const deleteOrg = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Organization.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Organization was deleted')
    }
    throw new Error('Organization was not found')
  } catch (e) {
    return res.status(500).send(e.message)
  }
}
module.exports = { getAllOrgs, createOrg, searchOrgs, updateOrg, deleteOrg }

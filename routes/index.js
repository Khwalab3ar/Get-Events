const { Router } = require('express')
const router = Router()
const orgController = require('../controllers/OrganizationController')
const eventController = require('../controllers/EventController')
const personalController = require('../controllers/PersonalController')

router.get('/', (req, res) => {
  res.send('this is the root!')
})
router.get('/organizations', orgController.getAllOrgs)
router.get('/events', eventController.getAllEvents)
router.get('/personals', personalController.getAllPersonals)

module.exports = router

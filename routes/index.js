const { Router } = require('express')
const router = Router()
const orgController = require('../controllers/OrganizationController')
const eventController = require('../controllers/EventController')
const personalController = require('../controllers/PersonalController')

router.get('/', (req, res) => {
  res.send('this is the root!')
})

//Controllers for organizations
router.get('/organizations', orgController.getAllOrgs)
router.post('/organization', orgController.createOrg)
router.get('/organizations/search', orgController.searchOrgs)
router.put('/organization/:id', orgController.updateOrg)
router.delete('/organization/:id', orgController.deleteOrg)
//Controllers for Events
router.get('/events', eventController.getAllEvents)
router.post('/event', eventController.createEvent)
router.get('/event/search', eventController.searchEvents)
router.put('/event/:id', eventController.updateEvent)
router.delete('/event/:id', eventController.deleteEvent)
//Controllers for Personals
router.get('/personals', personalController.getAllPersonals)
router.post('/personal', personalController.createPersonal)
router.get('/personal/search', personalController.searchPersonals)
router.put('/personal/:id', personalController.updatePersonal)
router.delete('/personal/:id', personalController.deletePersonal)

module.exports = router

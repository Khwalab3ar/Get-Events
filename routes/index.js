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
router.get('/organization/search', orgController.searchOrganizations)
router.get('/event/search', eventController.searchEvents)
router.get('/personal/search', personalController.searchPersonals)
router.put('/organization/:id', orgController.updateOrg)
router.put('/event/:id', eventController.updateEvent)
router.put('/personal/:id', personalController.updatePersonal)
router.delete('/organization/:id', orgController.deleteOrg)
router.delete('/event/:id', eventController.deleteEvent)
router.delete('/personal/:id', personalController.deletePersonal)

module.exports = router

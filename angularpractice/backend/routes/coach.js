const router = require('express').Router();
const coachcontroller = require('../controllers/coach');


router.post('/seatbooking',coachcontroller.booking);
router.get('/fetchcoach',coachcontroller.fetchCoach);
router.post('/savecoach',coachcontroller.saveCoach);

module.exports = router;    
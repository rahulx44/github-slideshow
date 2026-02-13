const router = require('express').Router();
const { auth, adminOnly } = require('../middleware/auth');
const { createInquiry, getInquiries } = require('../controllers/inquiryController');

router.post('/', createInquiry);
router.get('/', auth, adminOnly, getInquiries);

module.exports = router;

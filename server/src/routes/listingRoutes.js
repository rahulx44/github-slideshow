const router = require('express').Router();
const upload = require('../middleware/upload');
const { auth, adminOnly } = require('../middleware/auth');
const { createListing, updateListing, deleteListing, getListings, getListingBySlug, getStats } = require('../controllers/listingController');

router.get('/', getListings);
router.get('/stats', auth, adminOnly, getStats);
router.get('/:slug', getListingBySlug);
router.post('/', auth, adminOnly, upload.array('images', 10), createListing);
router.put('/:id', auth, adminOnly, upload.array('images', 10), updateListing);
router.delete('/:id', auth, adminOnly, deleteListing);

module.exports = router;

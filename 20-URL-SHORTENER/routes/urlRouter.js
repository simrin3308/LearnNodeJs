const express = require('express')
const { handleGenerateShortUrl, handleGetAnalytics } = require('../controllers/urlController')
const router = express.Router()

router.post('/', handleGenerateShortUrl)
router.get('/analytics/:shortID', handleGetAnalytics)


module.exports = router;
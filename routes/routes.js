const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router()
const {
    displayHomePage,
    analyzeFile,
} = require('../controller/upload')



router.route('/').get(displayHomePage)
router.post('/api/fileanalyse', upload.single('upfile'), analyzeFile)

module.exports = router

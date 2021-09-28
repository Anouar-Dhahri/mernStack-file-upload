const express = require('express');
const router = express.Router();
const { addFile } = require('./../controllers/FileController');
const {upload} = require('../helpers/filehelper');

router.post('/addFile', upload.single('file'), addFile);

module.exports = router;
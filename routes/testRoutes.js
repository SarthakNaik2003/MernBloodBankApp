const express = require('express');
const { testController } = require('../controller/testController');

// router object 
const router = express.Router()

router.get('/', testController)  // controller function 

module.exports = router;
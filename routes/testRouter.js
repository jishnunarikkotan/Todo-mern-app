const express = require("express");
const { testingController } = require('../controllers/testController');

//routes

const router = express.Router();

//Routes

router.get("/",testingController );
//export
module.exports = router;
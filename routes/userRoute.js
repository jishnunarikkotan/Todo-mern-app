const express = require("express");

const { registerController, loginControler } = require('../controllers/userController');


//router object

const router = express.Router();


//routed

//resgister || POST

router.post("/register", registerController);


//login



router.post("/login", loginControler);



//export 
module.exports = router;
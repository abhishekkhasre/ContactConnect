const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/home_controller");
const passport = require('passport');


router.get("/",HomeController.Home );
router.post("/SearchByName" , HomeController.SearchByName);
router.post("/SearchByNumber" , HomeController.SearchByNumber);
router.get("/signin" , HomeController.signin);
router.get("/signup",HomeController.signup);
router.post("/createaccount",HomeController.CreateAccount);
router.post("/createsession", HomeController.CreateSession);
router.get("/logout" , HomeController.DestroySession);
router.get("/yourcontact" , HomeController.YourContact);
router.get("/addtoyourcontact/:id", HomeController.AddToYourContacts);
router.get("/addspamcount/:id" , HomeController.addspam);
router.post("/addcontact" , HomeController.AddToContact);
router.post("/updatecontact"  ,HomeController.UpdateEmail);
router.use("/user" , require("./user"));


module.exports = router;
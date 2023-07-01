const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user_controllers");


router.get("/populatedatabase", UserController.populateDataBase);
router.get("/profile" , UserController.profile)
// router.get("/" , UserController.UserHome);
// router.post("/addContact" , UserController.CreateContact);
// router.get("/showcontact" , UserController.showContact);
// router.get("/searchbyname" , UserController.SearchContactByName);
// router.get("/searchbynumber",UserController.SearchContactByNumber);



module.exports = router;

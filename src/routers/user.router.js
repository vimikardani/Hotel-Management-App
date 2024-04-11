const express=require('express');
const router=express.Router();
const passport=require('passport')


const {loginpage,registerUser,loginUser,authenticate,logout}=require("../controllers/user.controller");

router.get("/login", loginpage);

// router.get("/registration",registrationpage);

router.post("/registration",registerUser);

router.post("/login",authenticate,loginUser);

router.get('/logout', logout);

module.exports=router;
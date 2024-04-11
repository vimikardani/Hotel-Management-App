const express=require('express');
const router=express.Router();
const Hotel=require('../models/hotel.model')
const {getallHoteldata,addhoteldata,findhotelId,deleteHotel,indexpageHoteldata}=require('../controllers/hotel.controller')

router.get("/",indexpageHoteldata);

router.post("/addhotel",addhoteldata);

router.get("/hotel/:id",findhotelId);

router.get('/deletehotel/:id',deleteHotel);


router.get('/hotels',getallHoteldata);


module.exports=router;


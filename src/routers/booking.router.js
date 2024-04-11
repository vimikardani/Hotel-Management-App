const express=require('express');
const router=express.Router();
const {bookingData}=require('../controllers/booking.controller');

router.post('/:id',bookingData);



module.exports=router;
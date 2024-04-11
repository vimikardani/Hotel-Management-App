const Booking = require('../models/booking.model'); // Import the Booking model
const Hotel=require('../models/hotel.model');


const bookingData= async(req, res) => {
    try {
      if(req.isAuthenticated()){
        const id = req.params.id;
      const hotelData = await Hotel.findById(id);
      // res.render('booking',{hotelinfo:hotelData})

      const checkinDate = new Date(req.body.checkinDate);
      const checkoutDate = new Date(req.body.checkoutDate);
      const totalGuest=req.body.guest;

      // Calculate the difference in milliseconds and days
      const diffInMs = checkoutDate - checkinDate;
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
      const totalAmount = diffInDays * hotelData.rentperNight;
  
      const booking = new Booking({hotelId: id,checkinDate,checkoutDate,totalGuest,rentPerNight: hotelData.rentperNight,serviceCharge:2000,tax:1800,totalAmount});
      const savedBooking = await booking.save();
      res.render('booking',{bookinginfo:savedBooking,hotelinfo:hotelData});
      }
      else {
        res.redirect('/user/login')
    }
    } 
    catch (error) {
      res.status(500).send('Error saving booking');
    }
  };


  
  module.exports={bookingData};
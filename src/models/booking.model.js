const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    },
    checkinDate: {
        type: Date
    },
    checkoutDate: {
        type: Date
    },
    totalGuest: {
        type: Number
    },
    rentPerNight: {
        type: Number
    },
    serviceCharge:{
        type:Number
    },
    tax:{
        type:Number
    },
    totalAmount: {
        type: Number
    }
});

const Booking = new mongoose.model('Booking', bookingSchema);

module.exports = Booking;
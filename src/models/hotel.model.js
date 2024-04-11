const mongoose=require('mongoose');

// Hotel schema
const hotelSchema=new mongoose.Schema({
    hotelName:{
        type:String
    },
    images:{
        type:[String]
    },
    city:{
        type:String
    },
    kiloMeter:{
        type:Number
    },
    hoteltitle:{
        type:String
    },
    rentperNight:{
        type:Number
    },
    hotelinfo:{
        type:String
    },
    guest:{
        type:String
    },
    bedroom:{
        type:String
    },
    bed:{
        type:String
    },
    bathroom:{
        type:String
    },
    
})

module.exports=new mongoose.model("Hotel",hotelSchema);
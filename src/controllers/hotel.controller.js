const Hotel=require("../models/hotel.model");



// render all hoteldata 
const getallHoteldata=async(req,res)=>{
    try {

        if(req.isAuthenticated()){
            const allHotel= await Hotel.find();
            res.render("home",{allHoteldata:allHotel});
        } 
        else {
            res.redirect('/')
        }

    } catch (error) {
        res.send(error)
    }
   
}

const indexpageHoteldata=async(req,res)=>{
    const allHotel= await Hotel.find();
    res.render("index",{allHoteldata:allHotel});

}

// add all hotel data
const addhoteldata=async(req,res)=>{
    try {

        const {hotelName,images,city,rentperNight,kiloMeter,hoteltitle,hotelinfo,guest,bedroom,bed,bathroom}=req.body;
        const hotelPhotos=[images];
        const hotel = await Hotel.create({ hotelName,images:hotelPhotos,city,rentperNight,kiloMeter,hoteltitle,hotelinfo,guest,bedroom,bed,bathroom});
        const allHotel= await Hotel.find();
        res.render("admin",{showhotelinfo:allHotel});

    } 
    catch (error) {
        res.send(error)
    }
    
}

// find Hotel ID with all hotelInfo
const findhotelId=async(req,res)=>{
    try {
             const id=req.params.id;
            const hotelData=await Hotel.findById(id);
            res.render('hotel',{hotelinfo:hotelData});
    } 
    catch (error) {
        res.send(error)
    }
}
5
const deleteHotel=async(req,res)=>{
    try {
        const id=req.params.id;
        await Hotel.deleteOne({ _id: id});
        const showallhotel= await Hotel.find();
        res.render('admin',{showhotelinfo:showallhotel})
    } 
    catch (error) {
        res.send(error)
    }
}


module.exports={getallHoteldata,addhoteldata,findhotelId,deleteHotel,indexpageHoteldata};
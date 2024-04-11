const express = require('express');
const connectDB = require('./src/config/db');
const ejs = require('ejs');
const bodyParser = require('body-parser');
require('dotenv').config();
const Hotel = require('./src/models/hotel.model');
const User=require('./src/models/user.model')
const session = require("express-session");
const passport=require ('passport');



const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

connectDB();


app.use(session({
  secret:"secret",
  resave:false,
  saveUninitialized:false
}))

app.use(passport.initialize());
app.use(passport.session());


app.get('/admin', async(req, res) => {
    try {

        const showallhotel= await Hotel.find();
        res.render("admin",{showhotelinfo:showallhotel});

    } catch (error) {
        res.send(error)
    }
  });

app.post('/search',async(req,res)=>{

    try {
        const searchWord=req.body.searchword;
        const hotelsfound=await Hotel.find({hotelName:{ $regex: '.*' + searchWord + '.*', $options: 'i' }})
        res.render('home',{allHoteldata:hotelsfound})
    } 
    catch (error) {
      res.send(error)
    }
})


app.use('/user', require('./src/routers/user.router'));
app.use('/', require('./src/routers/hotel.router'));
app.use('/booking',require('./src/routers/booking.router'))

app.listen(3600, () => {
  console.log('Server started at port 3600');
});
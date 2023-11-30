const express = require("express");
const mongoose = require("mongoose");

const userRoute = require('./routes/userRoutes');
const serviceRoute = require('./routes/serviceRoutes');
const showroomRoute = require('./routes/showroomRoutes');



const app = express();


app.use(express.json());

mongoose.connect('mongodb+srv://mario:1234@novigrad.cpmjhf3.mongodb.net/?retryWrites=true&w=majority',{
    //useNewUrlParser: true,
    // userCreateIndex: true,
    // useFindAndModify: false
}).then( con =>{
    console.log('Connected to database');
});



app.use('/user',userRoute);
app.use('/service',serviceRoute);
app.use('/showroom',showroomRoute);





app.get('/', (req, res) => {
    console.log("hey there")
    res.status(200).send('hello');
})



const port = 4000;
app.listen(port, ()=>{
    console.log('App runnin');
})
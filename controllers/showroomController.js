const Service = require('./../models/showroomModel');

exports.createShowroom = async (req, res) =>{
   try{
        const newShowroom = await Service.create(req.body);
        res.json({
            status: 'success',
            data:{
                showroom: newShowroom
            }
        })
   }
   catch(err){
        res.json({
            status: 'fail',
            message: err
        })
   }
}


exports.setShowroomAddress = async (req, res) =>{
    try{
         const newShowroom = await Service.updateOne({ name: req.body.name }, { $set: { address: req.body.address } }, {upsert: false});

         if (newShowroom.matchedCount == 0){
            throw new Error('No showroom found')
         }


         res.json({
             status: 'success',
             data:{
                 showroom: newShowroom
             }
         })
    }
    catch(err){
         res.json({
             status: 'fail',
             message: err
         })
    }
}


exports.setShowroomHours = async (req, res) =>{
    try{
         const newShowroom = await Service.updateOne({ name: req.body.name }, { $set: { hours: req.body.hours } }, {upsert: false});

         if (newShowroom.matchedCount == 0){
            throw new Error('No showroom found')
         }


         res.json({
             status: 'success',
             data:{
                 showroom: newShowroom
             }
         })
    }
    catch(err){
         res.json({
             status: 'fail',
             message: err
         })
    }
}


exports.getShowroomByName = async (req, res) =>{
    try{
         const newShowroom = await Service.findOne(req.body).select({});
         res.json({
             status: 'success',
             data:{
                 showroom: newShowroom
             }
         })
    }
    catch(err){
         res.json({
             status: 'fail',
             message: err
         })
    }
 }



exports.setShowroomAddressAndHours = async (req, res) =>{
    try{
         const newShowroom = await Service.updateOne({ name: req.body.name }, { $set: { hours: req.body.hours, address: req.body.address } }, {upsert: false});

         if (newShowroom.matchedCount == 0){
            throw new Error('No showroom found')
         }


         res.json({
             status: 'success',
             data:{
                 showroom: newShowroom
             }
         })
    }
    catch(err){
         res.json({
             status: 'fail',
             message: err
         })
    }
}


exports.updateShowroomServices = async (req, res) =>{
    try{
       
        const showroom = await Service.findOne({name: req.body.name});

        if (!showroom) {
            throw new Error('Showroom not found'); // Showroom with the given name doesn't exist
        }

        showroom.services = req.body.services;
        updateShowroom = await showroom.save();

         res.json({
             status: 'success',
             data:{
                 updateShowroom
             }
         })
    }
    catch(err){
         res.json({
             status: 'fail',
             message: err
         })
    }
 }


 exports.getServicesOfferedByShowroom = async (req, res) =>{
    
    try{
         const data = await Service.findOne(req.body).select('services');
         res.json({
             status: 'success',
             data
         })
    }
    catch(err){
         res.json({
             status: 'fail',
             message: err
         })
    }
 }

 exports.findShowroom = async (req, res) =>{
    console.log(req.body)
    
    try{
        const addressRegex = new RegExp(req.body.address, 'i');

        

        const showrooms = await Service.find({
            $and: [
                //{ address: addressRegex },
                { hours: req.body.hours },
                { services: { $in: [req.body.service] } }
            ]
        });
        console.log(showrooms)

        if (showrooms.length === 0) {
            console.log('none found')
            throw new Error('No showrooms found');
        }

        showroomNames = showrooms.map(showroom => showroom.name);

        res.json({
             status: 'success',
             showrooms: showroomNames
         })
    }
    catch(err){
         res.json({
             status: 'fail',
             message: err
         })
    }
 }

 
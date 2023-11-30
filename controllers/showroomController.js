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
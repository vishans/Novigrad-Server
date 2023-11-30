const Service = require('./../models/serviceModel');

exports.createService = async (req, res) =>{
   try{
        const newService = await Service.create(req.body);
        res.json({
            status: 'success',
            data:{
                service: newService
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


exports.updateService = async (req, res) =>{
    try{
         const newService = await Service.findOneAndReplace({'name': req.body.oldName},
         req.body, {upsert: false, new: true, runValidators: true});

         if (!newService) {
            throw new Error('Could not find document to be updated');
         }

        res.json({
             status: 'success',
             data:{
                 service: newService
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


 
 exports.getAllServiceNames = async (req, res) =>{
    try {
        const names = await Service.find({}, req.body.name);
        
        if (names && names.length > 0) {

            const namesArray = names.map(doc => doc.name);
            res.json({
                status: 'success',
                data: namesArray
            })
        } else {
            res.json({
                status: 'fail'
            })
        }
        res.json()
    } catch (error) {
        console.error('Error retrieving names:', error);
    }
 }

exports.deleteServiceByName = async (req, res) => {
    try {
      const result = await Service.deleteOne({ name: req.body.name });
  
      res.json({
        status: 'success',
        message: result
      })
    } catch (error) {
      res.json({
        status: 'fail',

      })
    }
}


exports.getDocuments = async (req, res) =>{
    try{
         const service = await Service.findOne(req.body);
         res.json({
             status: 'success',
             data:{
                 documents: service.requiredDocuments
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
 
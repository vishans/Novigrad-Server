const Request = require('./../models/requestModel');


exports.submitRequest = async (req, res) =>{
   
    let status = 'success';

    try{
        const newReq = await Request.create(req.body);

        if(!newReq){
            status = 'fail';
        }

        res.json({
            status,
            data:{
                request: newReq
            }
    })

    }catch (err){
        console.log(err);
        res.json(
            {status: 'fail',
        message: err}
        )
    }
}

exports.setRequestStatus = async (req, res) =>{
   
    let status = 'success';

    try{
        const newReq = await Request.findOneAndUpdate({_id: req.body.id}, {status: req.body.newStatus}, {new : true});

        if(!newReq){
            status = 'fail';
        }

        res.json({
            status,
            data:{
                request: newReq
            }
    })

    }catch (err){
        console.log(err);
        res.json(
            {status: 'fail',
        message: err}
        )
    }
}

exports.queryRequest = async (req, res) =>{
   
    let status = 'success';

    try{
        const newReq = await Request.find(req.body);

        if(!newReq){
            status = 'fail';
        }

        res.json({
            status,
            data:{
                requests: newReq
            }
    })

    }catch (err){
        console.log(err);
        res.json(
            {status: 'fail',
        message: err}
        )
    }
}

exports.getUniqueShowroomsForUser = async (req, res) => {
    try {
      // MongoDB aggregation pipeline to get unique showrooms for the given username
      const uniqueShowrooms = await Request.aggregate([
        {
          $match: {
            username: req.body.username // Filter requests by the provided username
          }
        },
        {
          $group: {
            _id: '$showroom' // Group by showroom field
          }
        },
        {
          $project: {
            showroom: '$_id', // Project the _id field as showroom
            _id: 0 // Exclude _id from the result
          }
        }
      ]);
  
      // Extract showrooms from the aggregation result
      const showroomsArray = uniqueShowrooms.map(entry => entry.showroom);
  
      res.json({status: "success",
    showrooms : showroomsArray}
    )
      return showroomsArray;
    } catch (error) {
      // Handle any potential errors
      console.error('Error fetching showrooms:', error);
      res.json({
        status: "fail",
        showrooms: null
      })
    }
  }
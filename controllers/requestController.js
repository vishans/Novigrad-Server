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

exports.getRequestByUser = async (req, res) =>{
   
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
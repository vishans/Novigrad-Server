const User = require('./../models/userModel');
const Showroom = require('./../models/showroomModel');


exports.signIn = async (req, res) =>{
    const {username, password} = req.body;
    let status = 'success';
    try{
        const newUser = await User.findOne({$and: [{username}, {password}]});

        if(!newUser){
            status = 'fail';
        }

        res.json({
            status,
            data:{
                user: newUser
            }
    })
//return;
    }catch (err){
        console.log(err);
        res.json(
            {status: 'fail',
        message: err}
        )
    }
}


exports.signUp = async (req, res) =>{
    console.log(req.body)
    try{
        const newUser = await User.create(req.body);
        res.json({
            status: 'success',
            data:{
                user: newUser
            }


        }   )

        if(req.body.role.toLowerCase() == 'showroom'){
            console.log('heret')
            const newShowroom = await Showroom.create({name: req.body.username});
        }
    
    }catch (err){
        console.log(err);
        res.json(
            {status: 'fail',
        message: err}
        )
    }
}
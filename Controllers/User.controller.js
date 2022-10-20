const {User} = require("../model/user.model");
async function createUser(req, res){
    const firstName =req.body.firstName
    const lastName = req.body.lastName
    const userName = req.body.userName
    const password = req.body.password

    if(firstName && lastName && userName && password){
       try {
            const newUser = await new User({
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password
            }).save();
           res.status(200).json({
               message: "creado",
               obj: newUser
           })
        }catch (e){
           console.error(e)
           res.status(500).json({
               message: "Algo paso"
           })


       }
    }else {
        res.status(400).json({
            message: "Faltan parametros"
        })
    }
}

module.exports = {
    createUser
}
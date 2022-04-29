const { response } = require( 'express' ) 

const usersGet = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: "get api - controller"
    })
}

const updateUserInfo = (req, res = response) => {

    res.status(200).json({
        ok: true,
        msg: "patch api - controller",
    })
}

const createUser = (req, res = response) => {
    const newUser = req.body
    
    res.status(200).json({
        newUser,
        ok: true,
        msg: "post api - controller"
    })
}

const deleteUser = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: "delete api - controller"
    })
}


module.exports = { 
    usersGet,
    updateUserInfo,
    createUser,
    deleteUser
}
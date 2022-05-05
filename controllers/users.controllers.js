const { response } = require( 'express' ) 
const { User } = require('../models/user.model')
const bcrypt = require('bcryptjs')
const res = require('express/lib/response')


// Ya quedo listo :D

const usersGet = async(req, res = response) => {

    // Pagination
    const query = { status: 'available' }
    const { limit = 5, offset = 0 } = req.query

    
    const users = await User.findAndCountAll({
        limit,
        offset,
        where: query,
        attributes: { exclude: 'password' }
    })      

    res.status(200).json({
       users
    })
}

const userGetByID = async( req, res = response ) => {
    const { id } = req.param
    const user = await User.findOne( id )

    res.status( 200 ).json({
        user
    })
}

const updateUserInfo = async(req, res = response) => {
    const { id } = req.params
    const { name, email } = req.body

    const userToUpdate = await User.findOne({ where: { id } })
    const userDB = await userToUpdate.update({ name, email })
    
    res.status(200).json( userDB )
}

const createUser = async(req, res = response) => {

    const { name, email, password, rol, status} = req.body
    

    // Encrypt password
    const salt = bcrypt.genSaltSync()
    const EncryptedPassword = bcrypt.hashSync( password, salt )


    // Save in DB
    const newUser = await User.create({ 
        name, 
        email, 
        password: EncryptedPassword, 
        rol, 
        status
    })
    newUser.password = undefined
    
    res.status(200).json({
        newUser,
        ok: true,
    })
}

const deleteUser = async(req, res = response) => {

    const { id } = req.params
    const { status } = req.body

    const userToUpdate = await User.findOne({ where: { id } })
    const userDB = await userToUpdate.update({ status })
    
    res.status(200).json( userDB )
}


module.exports = { 
    usersGet,
    userGetByID,
    updateUserInfo,
    createUser,
    deleteUser
}
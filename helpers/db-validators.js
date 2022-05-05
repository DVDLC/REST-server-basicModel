const { Repair } = require('../models/repairs.model')
const { User } = require('../models/user.model')

const emailExists =  async( email = '' ) => {

        // Verify email
        const emailExist = await User.findOne({ where: { email }})
        
        if( emailExist ){
            throw new Error(`The email has alredy exist`)
        }
}

const userByID =  async( id ) => {

    // Verify user
    const userExist = await User.findOne({ where: { id } })

    if( !userExist ){
        throw new Error(`The user with id: ${id} not exists`)
    }
}

const repairByID =  async( id ) => {

    // Verify repair
    const repairExist = await Repair.findOne({ where: { id } })

    if( !repairExist ){
        throw new Error(`The user with id: ${id} not exists`)
    }
}


module.exports = {
    emailExists,
    userByID,
    repairByID
}
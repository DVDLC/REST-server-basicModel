const { response } = require( 'express' ) 
const { Repair } = require('../models/repairs.model')


const repairsGet = async(req, res = response) => {
    
    const repairs = await Repair.findAll()      

    res.status(200).json({
       repairs
    })
}

const repairGetByID = async( req, res = response ) => {
    const { id } = req.param
    const repair = await Repair.findOne( id )

    res.status( 200 ).json({
        repair
    })
}

const updateStatus = async(req, res = response) => {
    const { id } = req.params
    const { status } = req.body

    const repairToUpdate = await Repair.findOne({ where: { id } })
    const repairDB = await repairToUpdate.update({ status })
    
    res.status(200).json( repairDB )
}

const createPetition = async(req, res = response) => {

    const { date, description, status } = req.body
    
    // Save in DB
    const newRepair = await Repair.create({ date, description, status })
    
    res.status(200).json({
        newRepair,
        ok: true,
    })
}

const deletePetition = async(req, res = response) => {

    const { id } = req.params
    const { status } = req.body

    const petitionToUpdate = await Repair.findOne({ where: { id } })
    const petitionDB = await petitionToUpdate.update({ status })
    
    res.status(200).json( petitionDB )
}


module.exports = { 
   repairsGet,
   repairGetByID,
   updateStatus,
   createPetition,
   deletePetition
}
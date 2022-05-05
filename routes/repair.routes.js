const { check } = require('express-validator')
const { Router } = require('express')

const { userValidation } = require('../middlewares/validation.middlerware')
const { repairByID } = require('../helpers/db-validators')

const { 
    repairsGet,
    repairGetByID, 
    updateStatus,
    createPetition,
    deletePetition
} = require('../controllers/repairs.controller') 

const router = Router()

// Routes 

router.get('/', repairsGet)

router.get('/:id', [
    check('id').custom( repairByID ),
    userValidation
],repairGetByID)

router.patch('/:id', [
    check('id').custom( repairByID ),
    userValidation
],updateStatus)

router.post('/', [
    check('description', 'the description is required').not().isEmpty(),
    userValidation
] ,createPetition)

router.delete('/:id',[
    check('id').custom( repairByID ),
    userValidation
] ,deletePetition)


module.exports = router
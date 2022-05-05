const { check } = require('express-validator')
const { Router } = require('express')

const { userValidation } = require('../middlewares/validation.middlerware')
const { 
    emailExists, 
    userByID, 
} = require('../helpers/db-validators')

const { 
    usersGet,
    userGetByID, 
    updateUserInfo, 
    createUser, 
    deleteUser
} = require('../controllers/users.controllers') 

const router = Router()

// Routes 

router.get('/', usersGet)

router.get('/:id', [
    check('id').custom( userByID ),
    userValidation
],userGetByID)

router.patch('/:id', [
    check('id').custom( userByID ),
    check('email', 'the email is not valid').isEmail().custom( emailExists ),
    userValidation
],updateUserInfo)

router.post('/', [
    check('name', 'the name is required').not().isEmpty(),
    check('email', 'the email is not valid').isEmail().custom( emailExists ),
    check('password', 'The password is required and not less six letters').isLength({ min: 6 }),
    userValidation
] ,createUser)

router.delete('/:id',[
    check('id').custom( userByID ),
    userValidation
] ,deleteUser)


module.exports = router

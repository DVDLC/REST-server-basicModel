const { 
    usersGet, 
    updateUserInfo, 
    createUser, 
    deleteUser
} = require('../controllers/users.controllers') 

const { Router } = require('express')
const router = Router()

router.get('/', usersGet)

router.patch('/:id', updateUserInfo)

router.post('/', createUser)

router.delete('/', deleteUser)


module.exports = router
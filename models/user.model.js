const { DataTypes } = require('sequelize')
const { db } = require('../db/config.db')

const User = db.define( 'user', {
    id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: DataTypes.INTEGER
	},
    name: {
       type: DataTypes.STRING,
       allowNull: false,
       /* validate:{ msg: 'Name is required' } */
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        /* validate:{ msg: 'Email is required' }, */
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        /* validate:{ msg: 'Password is required' } */
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
    },
})

module.exports = { User }
const { DataTypes } = require('sequelize')
const { db } = require('../db/config.db')

const Repair = db.define( 'repair', {
    id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: DataTypes.INTEGER
	},
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
    },
/*     userID: {

    } */
})

module.exports = { Repair }
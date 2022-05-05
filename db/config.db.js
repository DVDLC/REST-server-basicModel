const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
	host: 'localhost',
	username: process.env.USER_NAME,
	password: process.env.PASSWORD,
	database: process.env.DATA_BASE,
	logging: false
})

const dbConnection = async ()=> {
    // Authenticate database credentials
    db.authenticate()
        .then(() => console.log('Database authenticated'))
        .catch(err => console.log(err));

    // Sync sequelize models
    db.sync()
        .then(() => console.log('Database synced'))
        .catch(err => console.log(err));
}

module.exports ={
    db,
    dbConnection
}
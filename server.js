const { dbConnection } = require('./db/config.db')
const express = require('express')
var cors = require('cors')


class Server {

    constructor(){
        this.app =  express()
        this.port = process.env.PORT
        this.usersPath = '/api/v1/users'
        this.repairsPath = '/api/v1/repairs'

        // Connect to dabaBase
        this.ConnectDB()

        // Middlewares
        this.middlewares()

        // App routes
        this.routes()
    }

    async ConnectDB(){
        await dbConnection()
    }

    middlewares(){

        // Cors
        this.app.use( cors() )

        // Reading and  parse body

        this.app.use( express.json() )

        // Public Directory
        this.app.use( express.static('public') )
    }

    routes(){
        this.app.use( this.usersPath, require( './routes/user.routes' ))
        this.app.use( this.repairsPath, require( './routes/repair.routes' ))
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log( 'Server running at port:', this.port )
        })
    }
}

module.exports = Server
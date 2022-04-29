const express = require('express')
var cors = require('cors')

class Server {

    constructor(){
        this.app =  express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'

        // Middlewares
        this.middlewares()

        // App routes
        this.routes()
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
        this.app.use( this.usersPath, require( '../routes/user.routes' ))
    }

    listen(){
        this.app.listen( 8080, () => {
            console.log( 'Server running at port:', this.port )
        })
    }
}

module.exports = Server
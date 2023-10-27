const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app=express();
        this.port=3000;
        this.usersPath = '/users';
        this.personsPath = '/persons';
        this.middlewares();
        this.routers();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routers(){
        this.app.use(this.usersPath, require('../routes/users.routes'));
        this.app.use(this.personsPath, require('../routes/persons.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`estoy funcionando por el puerto ${this.port}`)
        });
    }
}

module.exports=Server;
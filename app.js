const express = require('express');
const authorsController = require('./controllers');
const db = require('./models');
const authors = require('./models/author');

const app = express();


async function testDB() {
    try{
        await db.sequelize.authenticate();
        console.log('SIII CONECTO')
    }catch(error){
        console.error('NOOOOO error', error)
    }
}

testDB()

app.get('/api/authors/find/id/:id',authorsController.find)

const port = 3000;

app.listen(port,()=>{
    console.log('Servidor ejecutandose en el puerto: ' + port)
})
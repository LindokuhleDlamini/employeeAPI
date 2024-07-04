const express = require('express');
const session = require('express-session');
const Mongostore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const passport = require('./lib/passport/setup');
const app = express();
const json = require('body-parser').json;
const MongoClientFactory = require('./lib/database/MongoClient').MongoClientFactory;

const employeeRoutes = require('./lib/routes/EmployeeRoutes').router;
var cors = require("cors");


const password = encodeURIComponent('test1');
const username = encodeURIComponent('test');

const options = {
    serverSelectionTimeoutMS: 6000,
    connectTimeoutMS: 6000
};
const connectionString = `mongodb+srv://${username}:${password}@bpldata.uwunt26.mongodb.net/`;


mongoose.connect(connectionString, options).then(async() => {
    await MongoClientFactory.connectMongoServer()
      .then(() => {

        console.log('===========================')
        console.log('Mongo client connected')
        console.log('===========================')


        app.use(json());
        app.use(cors());

        
        app.use('/api', employeeRoutes);

        
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
        
            console.log(`Server is running on port ${PORT}`);
        });
    });
});



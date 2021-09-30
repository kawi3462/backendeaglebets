const http = require('http');
const express = require('express');
const path = require('./util/path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const cors = require('cors');



//Admin routes 

const adminFixturesRoutes = require('./routesAdmin/fixtures');
const adminPredictionsRoutes = require('./routesAdmin/predictions');


const app = express();
app.use(cors({
    origin: 'http://localhost:8080'
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, application/json');
    next();
});





app.use('/admin/', adminFixturesRoutes);
app.use('/admin/', adminPredictionsRoutes);



mongoose.connect('mongodb+srv://eric:kaumbuthu@hawkpredicts1.sbybz.mongodb.net/ericpredicts?retryWrites=true&w=majority')
    .then(result => {

        app.listen(3000);
    })
    .catch(err => {

        console.log(err);
    });






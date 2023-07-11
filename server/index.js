const express=require('express');
const app=express();
var routes=require('./routes');
var cors = require('cors');
const bodyParser = require('body-parser');
const client = require('./config/connectingDb');
require('dotenv').config()

const port = process.env.PORT || 5173;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api',routes);

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})

const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongourl = process.env.LiveMongo;
const users = require('./controllers/HistoryContoller');

app.use(cors());
app.use(express.json());
app.use('/api',users);


//mongoose connection with mongodb
let mongoose = require('mongoose');
mongoose.connect(mongourl);

app.listen(port,()=>{console.log("started")});
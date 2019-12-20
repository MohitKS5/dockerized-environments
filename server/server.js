const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./controllers/route');

const API_PORT = 3001;
const app = express();

// apply cors, as per docker-compose file
const corsOptions = {
    origin: process.env.HOST+`:${process.env.PORT}` || 'none',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', cors(corsOptions), router);


// launch backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
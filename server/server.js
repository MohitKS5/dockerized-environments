const express = require('express');
var cors = require('cors');

const API_PORT = 3001;
const app = express();

// apply cors, as per docker-compose file
const corsOptions = {
    origin: process.env.HOST+`:${process.env.PORT}` || 'none',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// parse form-data
// app.use(express.urlencoded());

// parse request body as json
app.use(express.json());


// If in production, launch frontend
if (process.env.NODE_ENV === 'production') {
    console.log("website on /");
    app.use(express.static('public'))
}

// dummy backend
let router = express.Router();
router.get("/", (req, res) => res.send("hey there !"));
app.use('/api', cors(corsOptions), router);

// launch backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
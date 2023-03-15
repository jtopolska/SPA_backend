const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
mongoose.set('strictQuery', false);

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE ARE CONNECTED TO MONGO'))
.catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`SERVER ${PORT} is running!`)
})
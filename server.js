const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const Joi = require('joi');
const firms = require('./server/api/firm.resource');
const app = express();

mongoose.connect('mongodb://webster:webster@ds119608.mlab.com:19608/application')
    .then(() => console.log('connected to MongoDB...'))
    .catch(err => console.log('error connecting to MongoDB...'));

app.use(express.json());
app.use(bodyParser.json());
app.use('/api/firms', firms);
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'dist/index.html'));
});

// environment variable port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
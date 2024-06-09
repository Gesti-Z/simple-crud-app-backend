const express = require('express')
const mongoose = require('mongoose');
const dogRoute = require('./routes/dog.route');
const catRoute = require('./routes/cat.route');
const birdRoute = require('./routes/bird.route');
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});

// routes
app.use('/api/dogs', dogRoute);
app.use('/api/cats', catRoute);
app.use('/api/birds', birdRoute);



mongoose.connect("mongodb+srv://admin:<password>@backenddb.02l9twn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database");
        
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });

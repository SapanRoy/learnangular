const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var country = require('./entities/country');
var team = require('./entities/team');
var player = require('./entities/player');
var connection = require('./connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

// connect to database
connection.mySqlConnection.connect();

// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(4000, function () {
    console.log('Node app is running on port 4000');
});

// country
// Retrieve all contries 
app.get('/country', country.getAllCountries);
// Contry by id
app.get('/country/:id', country.getCountryById);
// Delete country
app.delete('/country/:id', country.DeleteCountryById);
// Adding country
app.post('/country', country.AddCountry);

// team
app.get('/team', team.getAllTeam);
app.post('/team', team.addTeam);
app.put('/team', team.updateTeam);
app.delete('/team/:id', team.deleteTeam);


// player
app.get('/player', player.getAllPlayers);
app.post('/player', player.addPlayer);
app.put('/player', player.updatePlayer);
app.delete('/player/:id', player.deletePlayer);
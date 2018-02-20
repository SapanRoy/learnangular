var connection = require('../connection');
module.exports = {
    addPlayer: function (req, res, next) {
        let name = req.body.Name;
        let countryID = req.body.CountryID;
        let age = req.body.Age;
        debugger;
        if (!name) {
            return res.status(400).send({ error: true, message: 'Please provide player.' });
        }
        connection.mySqlConnection.query("INSERT INTO PLAYER SET ? ", { name: name, CountryID: countryID, age: age }, function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'New player has been added successfully.' });
        });

    },
    getAllPlayers: function (req, res, next) {
        connection.mySqlConnection.query(`select country.name as CountryName, country.id as CountryID, player.id as ID, player.name as Name from player 
        join country on country.id = player.countryid order by player.name`, function (error, results, fields) {
                if (error) throw error;
                return res.send({ data: results, message: 'Player List.' });
            });
    },
    updatePlayer: function (req, res, next) {
        let player = req.body;

        if (!player) {
            return res.status(400).send({ error: true, message: 'Please provide player.' });
        }
        let sql = `UPDATE PLAYER SET NAME='${player.Name}', CountryID=${player.CountryID}, Age=${player.age} WHERE ID=${player.ID}`;
        connection.mySqlConnection.query(sql, function (error, results) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'Player has been updated successfully.' });
        });

    },
    deletePlayer: function (req, res, next) {

        let playerID = req.params.id;

        if (!playerID) {
            return res.status(400).send({ error: true, message: 'Please provide player ID.' });
        }
        let sql = `Delete from player where ID=${playerID}`;
        console.log(sql);
        connection.mySqlConnection.query(sql, function (error, results) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'Player has been deleted successfully.' });
        });

    },
}
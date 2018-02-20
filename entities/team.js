var connection = require('../connection');
module.exports = {
    addTeam: function (req, res, next) {
        let teamName = req.body.Name;
        let countryID = req.body.CountryID;
        debugger;
        if (!teamName) {
            return res.status(400).send({ error: true, message: 'Please provide team.' });
        }
        connection.mySqlConnection.query("INSERT INTO TEAM SET ? ", { name: teamName, CountryID: countryID }, function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'New team has been added successfully.' });
        });

    },
    getAllTeam: function (req, res, next) {
        connection.mySqlConnection.query(`select country.name as CountryName, country.id as CountryID, team.id as ID, team.name as Name from team 
        join country on country.id = team.countryid order by country.name`, function (error, results, fields) {
                if (error) throw error;
                return res.send({ data: results, message: 'Team List.' });
            });
    },
    updateTeam: function (req, res, next) {
        let team = req.body;

        if (!team) {
            return res.status(400).send({ error: true, message: 'Please provide team.' });
        }
        let sql = `UPDATE TEAM SET NAME='${team.Name}', CountryID=${team.CountryID} WHERE ID=${team.ID}`;
        connection.mySqlConnection.query(sql, function (error, results) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'Team has been updated successfully.' });
        });

    },
    deleteTeam: function (req, res, next) {

        let teamID = req.params.id;

        if (!teamID) {
            return res.status(400).send({ error: true, message: 'Please provide team ID.' });
        }
        let sql = `Delete from team where ID=${teamID}`;
        console.log(sql);
        connection.mySqlConnection.query(sql, function (error, results) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'Team has been deleted successfully.' });
        });

    },
}
 var connection = require('../connection');
module.exports = {
    getCountryById: function (req, res, next) {
        let countryId = req.params.id;
        if (!countryId) {
            return res.status(400).send({ error: true, message: 'Please provide countryId' });
        }
        connection.mySqlConnection.query('SELECT * FROM country where id=?', countryId, function (error, results, fields) {
            if (error) throw error;
            return res.send({ data: results[0], message: 'CountryById' });
        });
    },

    getAllCountries: function (req, res, next) {
        connection.mySqlConnection.query('SELECT * FROM country', function (error, results, fields) {
            if (error) throw error;
            return res.send({ data: results, message: 'Country list.' });
        });
    },
    DeleteCountryById: function (req, res, next) {
        let countryId = req.params.id;
        if (!countryId) {
            return res.status(400).send({ error: true, message: 'Please provide countryId' });
        }

        connection.mySqlConnection.query('Delete FROM country where id=?', countryId, function (error, results, fields) {
            if (error) throw error;
            return res.send({ data: results[0], message: 'DeleteCountryById' });
        });

    },
    AddCountry: function (req, res) {
        let countryName = req.body.Name;
        if (!countryName) {
            return res.status(400).send({ error: true, message: 'Please provide country.' });
        }
        connection.mySqlConnection.query("INSERT INTO COUNTRY SET ? ", { name: countryName }, function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'New country has been created successfully.' });
        });
    }
}
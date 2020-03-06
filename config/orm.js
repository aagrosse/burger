const connection = require('./connection.js');

const orm = {
    selectAll: function (cb) {
        const query = 'SELECT * FROM burgers;';
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (burger, cb) {
        const query = `INSERT INTO burgers (burger_name) VALUES ("${burger}")`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (burgerID, cb) {
        const query = `UPDATE burgers SET devoured = 1 WHERE ID = ${burgerID}`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: function(table, condition, cb) {
        var query = "DELETE FROM "+ table + " WHERE "+ condition;
        console.log(query)
        connection.query(query, condition, function(err, results) {
            if (err) throw err;
            cb(results)
        })
    }
}

module.exports = orm;
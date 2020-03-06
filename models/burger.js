const orm = require('../config/orm');
const burger = {
    all: function (cb) {
        orm.selectAll((res) => {
            cb(res);
        })
    },
    create: function (burger, cb) {
        orm.insertOne(burger, function (res) {
            cb(res);
        });
    },
    update: function (burgerID, cb) {
        orm.updateOne(burgerID, (res) => {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res)
        })
    }
}

module.exports = burger;
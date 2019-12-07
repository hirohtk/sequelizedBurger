var orm = require("../config/orm");

var burgerModel = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        })
    }, 
    insertOne: function(burgerName, cb) {
        console.log("Model level: " + burgerName);
        orm.insertOne(burgerName, function(res){
            cb(res);
        })
    },
    updateOne: function(burgerID, cb) {
        orm.updateOne(burgerID, function(res) {
            cb(res)
        })
    }
}

module.exports = burgerModel;
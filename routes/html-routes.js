
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        db.burgers.findAll({}).then(function (response) {
            var hbsObject = {
                allBurgers: response
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });

    });

};

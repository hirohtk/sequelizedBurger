
var db = require("../models");

module.exports = function (app) {

    //showing all burgers
    app.get("/", function (req, res) {
        db.burgers.findAll({}).then(function (response) {
            
            res.json(response);
        });
    });

    //"INSERT INTO burgers (burger_name) VALUES (?)"
    app.post("/api/burger", function (req, res) {
        let burgerName = req.body.name
        // "Make a new entry in the database where burger_name is the post body, with devoured status of false"
        db.burgers.create({
            burger_name: burgerName,
            devoured: false,
        }).then(function (response) {
            console.log(response);
            // why am I doing this?  What uses this Json on the front end?
            res.json({ id: response.insertId })
        });
    })

    //"UPDATE burgers SET devoured = true WHERE id = (?)"
    app.put("/api/burger/:id", function (req, res) {
        var burgerID = req.params.id;
        // "Update devoured to true where the id is this burger's ID"
        db.burgers.update(
            {
            devoured: true,
        },
            {
                where: {
                    id: burgerID
                }
            }).then(function (response) {
                res.json(response);
            });


    });

}


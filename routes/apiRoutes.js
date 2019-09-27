var db = require(`../models`);

module.exports = function(app) {

    app.get(`/api/burgers/`, function(req, res) {
        db.Burger.findAll({}).then(function(burgers) {
            res.json(burger);
        });
    });

    app.get(`/api/burgers/:id`, function(req, res) {
        db.Burger.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(burger) {
            res.json(burgers);
        });
    });

    app.post(`/api/burgers/`, function(req, res) {
        db.Burger.create({
            burger_name: req.body.name,
            devoured: req.body.devoured
        }).then(function(burger) {
            res.json(burger);
        });
    });

    app.delete(`/api/burgers/:id`, function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(burger) {
            res.json(burger);
        });
    });

    app.put(`/api/burgers/`, function(req, res) {
        db.Burger.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(burger) {
            res.json(burger);
        });
    });

};
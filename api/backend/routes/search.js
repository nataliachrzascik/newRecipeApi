var express = require('express');
var router = express.Router();
const RecipeSchema = require('../models/recipe');
var mongoose = require('mongoose');

router.get(`/product:id`, (req, res) => {
    console.log("in server search.js");
    RecipeSchema.find({ id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
});
module.exports = router;
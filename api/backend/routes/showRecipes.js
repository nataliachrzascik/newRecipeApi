var express = require('express');
var router = express.Router();
const RecipeSchema = require('../models/recipe');
var mongoose = require('mongoose');
router.get(`/api:category`, (req, res) => {
    console.log("in server showRecipes.js");
    RecipeSchema.find({ category: req.params.category })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
});
module.exports = router;
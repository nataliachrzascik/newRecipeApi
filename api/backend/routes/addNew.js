var express = require('express');
var router = express.Router();
const RecipeSchema = require('../models/recipe');
let async = require('async--await');

router.post('/', async (req, res) => {
    let ingredients = req.body.ingredients.split(";");
    const count = await RecipeSchema.countDocuments();
    const newRecipe = new RecipeSchema({ id: count + 1, name: req.body.title, ingredients: ingredients, preparation: req.body.preparation, category: req.body.category, img: req.body.fileValue });
    newRecipe.save((error) => {
        if (error) {
            res.status(500).json({ msg: "internal server error" });
            return;
        }
        res.redirect('/');
    });
});

module.exports = router;
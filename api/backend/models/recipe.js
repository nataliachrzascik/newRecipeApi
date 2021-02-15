var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema(
    {
        id: { type: Number, required: true },
        name: { type: String, required: true, maxlength: 100 },
        ingredients: { type: Array, required: true },
        preparation: { type: String, required: true },
        category: { type: String, required: true, maxlength: 100 },
        img: { type: String },
    }, { collection: 'Collection0' }
);


module.exports = mongoose.model('Recipe', RecipeSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipeSchema = new Schema({
    title: String,
    level: String,
    ingredients: Array,
    cuisine: { type: String, required: true },
    dishType: { type: String, enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other'] },
    image: { type: String, default: 'https: //images.media-allrecipes.com/images/75131.jpg' },
    duration: { type: Number, min: 0 },
    creator: String,
    created: { type: Date, default: Date.now }
});

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;
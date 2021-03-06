const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
    image: {type: String, required: true},
    image2: String,
    image3: String,
    image4: String,
    name: {type: String, required: true},
    type: String,
    description: String,
    age: {type: String, required: true},
    user: [{
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    }]
})

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;

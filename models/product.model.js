const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductShema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true}
});

// Export the model
module.exports = mongoose.model('Product', ProductShema);
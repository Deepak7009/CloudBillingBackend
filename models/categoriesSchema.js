const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    srNo: Number,
    newTitle: String,
    newStatus: String,
    newDescription: String,
    timestamp: {
        type: Date,
        default: Date.now,
    }
});

const NewCategories = mongoose.model("newCategorie", categoriesSchema);

module.exports = { NewCategories };
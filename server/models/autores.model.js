const mongoose = require("mongoose");

const AutorSchema = new mongoose.Schema({
	name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"]
    }
});

const Autor = mongoose.model("autors", AutorSchema);

module.exports = Autor;
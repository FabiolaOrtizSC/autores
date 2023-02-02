const Autor = require("../models/autores.model");

module.exports.findAllAutors = (req, res) => {
  Autor.find()
    .then(allDaAutors => res.json({ allDaAutors }))
    .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
};

module.exports.findOneSingleAutor = (req, res) => {
	Autor.findOne({ _id: req.params.id })
		.then(oneSingleAutor => res.json({ oneSingleAutor }))
    .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
};

module.exports.createNewAutor = (req, res) => {
  Autor.create(req.body)
    .then(newlyCreatedAutor => res.json({ newlyCreatedAutor }))
    .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
};

module.exports.updateExistingAutor = (req, res) => {
  Autor.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true , new: true })
    .then(updatedAutor => res.json({ updatedAutor }))
    .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
};

module.exports.deleteAnExistingAutor = (req, res) => {
  Autor.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result }))
    .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
};

const { Project } = require("../models/project.model");

// Get all items
module.exports.findAllProjects = (req, res) => {
   Project.find({})
      .then(allProjects => res.json(allProjects))
      .catch(err => res.status(400).json(err));
};

// Get one item
module.exports.findOneSingleProject = (req, res) => {
   Project.findOne({ _id: req.params.id })
      .then(oneSingleProject => res.json(oneSingleProject))
      .catch(err => res.status(400).json(err));
};

// Create an item
module.exports.createNewProject = (req, res) => {
   Project.create(req.body)
      .then(newlyCreatedProject => res.json(newlyCreatedProject))
      .catch(err => res.status(400).json(err));
};

// Update an item
module.exports.updateExistingProject = (req, res) => {
   Project.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(updatedUser => res.json(updatedUser ))
      .catch(err => res.status(400).json(err));
};

// Delete an item
module.exports.deleteAnExistingProject = (req, res) => {
   Project.deleteOne({ _id: req.params.id })
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
};

// Check if the item already exists, then create
module.exports.exists = (req, res) => {
   Project.exists({name: req.body.name})
      .then(projectExists => {
      if (projectExists) {
         // Promise.reject() will activate the .catch() below.
         return Promise.reject('Error Message Goes Here');
      }
      return Project.create(req.body);
   })
   .then(saveResult => res.json(saveResult))
   .catch(err => res.status(400).json(err));
}

// Default index route
module.exports.index = (request, response) => {
   response.json({
      message: "Hello World"
   });
}
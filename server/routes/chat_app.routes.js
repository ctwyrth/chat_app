const ProjectController = require('../controllers/project.controller')

module.exports = (app) => {
   app.get("/", (req, res) => {
      res.sendFile(__dirname + '');
   });
   // app.get("/api/projects", ProjectController.findAllProjects); // Get all route
   // app.get("/api/project/:id", ProjectController.findOneSingleProject); // Get one route
   // app.post("/api/project/new", ProjectController.createNewProject); // Create route
   // app.put("/api/project/:id/update", ProjectController.updateExistingProject); // Update route
   // app.delete("/api/project/:id/delete", ProjectController.deleteAnExistingProject); // Delete route
}
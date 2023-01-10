const express = require('express');
const controller = require('./controllers');

const router = express.Router();

router.route('/projects')
    .get(controller.getAllProjects)
    .post(controller.createProject);

router.route('/projects/:id')
    .get(controller.getProjectById)
    .put(controller.updateProject)
    .delete(controller.deleteProject);

module.exports = router;

const data = require("../controllers/task.controller.js");
var router = require("express").Router();

module.exports = app => {
  router.post("/create",data.create);
  app.use('/api', router);
};
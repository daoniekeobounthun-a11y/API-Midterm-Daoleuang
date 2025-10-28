const express = require("express");
const hospitalController = require("../controllers/hospitalsController");
const apiRouter = express.Router();

// Root path:/
apiRouter.get("/",hospitalController.handleGreeting);

// hospital path: / hospitals
apiRouter.get("/hospital", hospitalController.handleGetHospitals);

module.exports = apiRouter;

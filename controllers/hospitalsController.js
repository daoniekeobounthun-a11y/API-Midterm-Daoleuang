const hospitalModel = require("../models/hospitalModel");

const handleGreeting = (req, res) => {
    res.send(" I went to hospital");
};

const handleGetHospitals = (req, res) => {
    const hospitalsData = hospitalModel.getALLHospitals();
    res.json(hospitalsData);
};

const hospitalController = {
    handleGreeting,
    handleGetHospitals,
};

module.exports = hospitalController;

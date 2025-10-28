const dataHospitals = [
    {name: "sugar", doctors: "namtan", appointments: "10/10/26"},
    {name:"phinia", doctors: "pheomany", appointments:15/10/26},
    {name:"misu", doctors:"maysa", appointments:20/10/26},
    {name:"suoh", doctors:"somo", appointments:15/10/26},
];

const hospitalModel = {
    getALLHospitals: () => dataHospitals,
};

module.exports = hospitalModel;

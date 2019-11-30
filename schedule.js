const preset = require("./preset");
const employees = require("./employees");
const autoAssignEmployee = require("./autoAssignEmployee");
//this module will take manual assignemts and workstationsa as arguments for now i will simulate them
//--------------------FOR TESTING ONLY------------------------
let manualAssignments = [
    [["alex", "Sigala"], "m"],
    [["Rosi", "Calderone"], "k"]
];
let workStation = [
    ["a", ""],
    ["b", ""],
    ["c", ""],
    ["d", ""],
    ["e", ""],
    ["f", ""],
    ["g", ""],
    ["h", ""],
    ["i", ""],
    ["j", ""],
    ["k", ""],
    ["l", ""],
    ["m", ""]
];
//-----------------------------END TESTING CODE-------------------------

//function takesa  workstation and any manual assignments to create work schedul
const scheduler = (workStation, manualAssignments) => {
    //execute preset function to assign presets to their stations
    if (manualAssignments) {
        console.log("assiging presets");
        preset(manualAssignments, workStation);

        workStation.forEach(station => {
            console.log(`assigning employee to ${station}`);
            autoAssignEmployee(station, employees);
            console.log(
                `the employee at station ${station[0]} is ${station[1]}`
            );
        });
        //for remaining
    } else {
        console.log("no presets");
        workStation.forEach(station => {
            console.log(`assigning employee to ${station}`);
            autoAssignEmployee(station, employees);
        });
    }
};

scheduler(workStation, manualAssignments);
console.log(`rotation with presets is ${workStation}`);
module.exports = scheduler;

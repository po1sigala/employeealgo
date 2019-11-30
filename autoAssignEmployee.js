const autoAssignEmployee = (stationArry, employees) => {
    console.log(`\nemployees are ${employees}
    \n workstation is ${stationArry}`);
    //if the workstation isnt empty end the operation. else assign an employee
    if (stationArry[1].length > 0) {
        return console.log("already assigned");
    } else {
        console.log("no preset assigning employee");
    }
};
module.exports = autoAssignEmployee;

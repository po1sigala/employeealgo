const assign = require("./assign");
const autoAssignEmployee = (stationArry, employees) => {
    console.log(`\nemployees are ${employees}
    \n workstation is ${stationArry}`);
    //if the workstation isnt empty end the operation. else assign an employee
    if (stationArry[1].length > 0) {
        return console.log("already assigned");
    } else {
        console.log("no preset assigning employee");
        //sort the employees by the number of stations they kno. employees with fewer certs should be placed first since they are less flexible
        employees.sort((a, b) => {
            return a.certStations.length > b.certStations.length;
        });
        employees.forEach(employee => {
            //find out where we are
            let currentPlaceInRotation = employee.certStations.indexOf(
                employee.currentStation
            );
            //find out if they are toward the end of their rotation
            if (employee.certStations.length - currentPlaceInRotation > 1) {
                console.log("able to move one down");
                //get index of next station
                let nextStationIndex = currentPlaceInRotation + 1;
                //find the new station this should be a string
                let newStation = employee.certStations[nextStationIndex];
                assign(stationArry, newStation);
                //find that station in the workstation array and then set its name to the employee nam

                //if they arent in the middle find out where between the start end or one spot removed from either extreme
            } else {
                switch (employee.certStations.length - currentPlaceInRotation) {
                    //0 1 2 3 4 5 6
                    //employee is at the last station theyre certified to
                    case 0:
                        console.log(
                            "employee is at the end of certs cannot pull"
                        );

                        break;

                    //employee is one station before end
                    case 1:
                        console.log(
                            "employee is near the end of his cert stations will prefer to move them back to start"
                        );
                        break;

                    //empoyee isnt assigned
                    // case :
                    //     break;
                }
            }
        });
    }
};
module.exports = autoAssignEmployee;

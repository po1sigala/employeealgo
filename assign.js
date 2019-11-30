const assigner = (stationArry, newStation) => {
    //find that station in the workstation array and then set its name to the employee name
    for (i = 0; i < stationArry.length; i++) {
        //looking for where the new station matches the work station in the array
        switch (stationArry[i][0] === newStation) {
            case true:
                console.log(
                    `found the matching station assiging ${employee.name} to station ${newStation}`
                );
                return (stationArry[i][1] = employee.name);
                break;
            case false:
                console.log(`not a match still looking`);
                break;
        }
    }
};
module.exports = assigner;

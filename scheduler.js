let employees = require("./employees");
//define some presets to make sure they do not change after running set schedule
let presets = [
    [["alex", "Sigala"], "m"],
    [["Rosi", "Calderone"], "k"]
];
function setSchedule(employees, presets) {
    console.log("setting new rotation");
    console.log(`emplyess to be pre assigned are ${presets}`);
    //define the workstation object
    let workRotation = {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: "",
        i: "",
        j: "",
        k: "",
        l: "",
        m: ""
    };
    //if the manager wants a particular person somwehre set it
    if (presets) {
        console.log("assigning emplyuees to preset stations");
        presets.forEach(employee => {
            let employeeName = employee[0];
            let assignedStation = employee[1];
            //set up a switch case to determine which prperty to update
            switch (assignedStation) {
                case "a":
                    break;
                case "b":
                    break;
                case "c":
                    break;
                case "d":
                    break;
                case "e":
                    break;
                case "f":
                    break;
                case "g":
                    break;
                case "h":
                    break;
                case "i":
                    break;
                case "j":
                    break;
                case "k":
                    break;
                case "l":
                    break;
                case "m":
                    break;
            }
            console.log(`
            \n station a is assigned employee ${workRotation.a}
            \n station b is assigned employee ${workRotation.b}
            \n station c is assigned employee ${workRotation.c}
            \n station d is assigned employee ${workRotation.b}
            \n station e is assigned employee ${workRotation.e}
            \n station f is assigned employee ${workRotation.f}
            \n station g is assigned employee ${workRotation.g}
            \n station h is assigned employee ${workRotation.h}
            \n station i is assigned employee ${workRotation.i}
            \n station j is assigned employee ${workRotation.j}
            \n station k is assigned employee ${workRotation.k}
            \n station l is assigned employee ${workRotation.l}
            \n station m is assigned employee ${workRotation.m}`);
        });
    } else {
        return "no presets";
    }
}
console.log(`employees are ${employees}`);
setSchedule(employees, presets);

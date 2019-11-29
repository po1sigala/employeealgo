//-------------------------------------TEST-------------------------------------
//define some presets to make sure they do not change after running set schedule
// let presets = [
//     [["alex", "Sigala"], "m"],
//     [["Rosi", "Calderone"], "k"]
// ];
// let workStation = [
//     ["a", ""],
//     ["b", ""],
//     ["c", ""],
//     ["d", ""],
//     ["e", ""],
//     ["f", ""],
//     ["g", ""],
//     ["h", ""],
//     ["i", ""],
//     ["j", ""],
//     ["k", ""],
//     ["l", ""],
//     ["m", ""]
// ];
// console.log(`
//             \n station a is assigned employee ${workStation.a}
//             \n station b is assigned employee ${workStation.b}
//             \n station c is assigned employee ${workStation.c}
//             \n station d is assigned employee ${workStation.b}
//             \n station e is assigned employee ${workStation.e}
//             \n station f is assigned employee ${workStation.f}
//             \n station g is assigned employee ${workStation.g}
//             \n station h is assigned employee ${workStation.h}
//             \n station i is assigned employee ${workStation.i}
//             \n station j is assigned employee ${workStation.j}
//             \n station k is assigned employee ${workStation.k}
//             \n station l is assigned employee ${workStation.l}
//             \n station m is assigned employee ${workStation.m}`);
//-----------------------------------------------------------------------------------------

const assignPresets = (presets, workStation) => {
    console.log("setting new rotation");
    console.log(`employees to be pre assigned are ${presets}`);
    //define the workstation object

    //if the manager wants a particular person somwehre set it
    if (presets) {
        console.log("assigning employees to preset stations");
        presets.forEach(employee => {
            let employeeName = employee[0];
            let assignedStation = employee[1];
            console.log(`assigning ${employee} to station ${assignedStation}`);
            for (i = 0; i < workStation.length; i++) {
                console.log(`station ${workStation[i][0]}`);
                switch (workStation[i][0] === assignedStation) {
                    case true:
                        console.log(`match. assigning employee to station`);
                        return (workStation[i][1] = employeeName);
                        break;
                    case false:
                        console.log("no match");
                        break;
                }
            }
        });
    } else {
        //if no presets just return the empty workstation
        return workStation;
    }
};
// assignPresets(presets, workStation);
// console.log(workStation);
//-----------------------------------------OLD CODE----------------------------------------------------------------
//at first had workstation as an object but it was hard to traverse dynamically. I want to be able to inpout a changing workstation so an array was better bc i can acess the array at point i and update the value not havce to call a specific property
//DEFINE A WORK STATION TO BE EDITED
// let workStation = {
//     a: "",
//     b: "",
//     c: "",
//     d: "",
//     e: "",
//     f: "",
//     g: "",
//     h: "",
//     i: "",
//     j: "",
//     k: "",
//     l: "",
//     m: ""
// };
//that old code above made me have to write a very long switch case but i realized i had to hard code each station name which isnt ideal
//set up a switch case to determine which prperty to update
// switch (assignedStation) {
//     case "a":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );
//         workStation.a = employeeName;
//         break;
//     case "b":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );

//         workStation.b = employeeName;
//         break;
//     case "c":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );

//         workStation.c = employeeName;
//         break;
//     case "d":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );

//         workStation.d = employeeName;
//         break;
//     case "e":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );

//         workStation.e = employeeName;
//         break;
//     case "f":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );

//         workStation.f = employeeName;
//         break;
//     case "g":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );

//         workStation.g = employeeName;
//         break;
//     case "h":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );

//         workStation.h = employeeName;
//         break;
//     case "i":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );

//         workStation.i = employeeName;
//         break;
//     case "j":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );

//         workStation.j = employeeName;
//         break;
//     case "k":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );

//         workStation.k = employeeName;
//         break;
//     case "l":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );

//         workStation.l = employeeName;
//         break;
//     case "m":
//         console.log(
//             `assigning employee ${employeeName} to work station ${assignedStation}`
//         );

//         workStation.m = employeeName;
//         break;
// }
module.exports = assignPresets;

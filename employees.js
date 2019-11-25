let workers = [
    {
        name: ["Alex", "Sigala"],
        certStations: ["m", "l", "k", "j"],
        currentStation: "l",
        daysSinceLastTrained: 27,
        qualityIssues: 2,
        daysSinceLastQualityIssue: 30,
        buildEfficiency: [
            ["m", 1.25],
            ["l", 1.5],
            ["k", 1],
            ["j", 0.95]
        ]
    },
    {
        name: ["Rosi", "Calderone"],
        certStations: ["m", "l", "k", "j", "Test"],
        currentStation: "m",
        daysSinceLastTrained: 100,
        qualityIssues: 0,
        daysSinceLastQualityIssue: 200,
        buildEfficiency: [
            ["m", 1.45],
            ["l", 1.8],
            ["k", 1.5],
            ["j", 1.95]
        ]
    },
    {
        name: ["new", "person"],
        certStations: ["i", "h", "j", "g"],
        currentStation: "i",
        daysSinceLastTrained: 0,
        qualityIssues: 0,
        daysSinceLastQualityIssue: 0,
        buildEfficiency: [["", ""]]
    },

    {
        name: ["other", "person"],
        certStations: ["j", "k", "l", "i"],
        currentStation: "k",
        daysSinceLastTrained: 0,
        qualityIssues: 0,
        daysSinceLastQualityIssue: 0,
        buildEfficiency: [["", ""]]
    },
    {
        name: ["tan", "phan"],
        certStations: ["k", "j"],
        currentStation: "j",
        daysSinceLastTrained: 20,
        qualityIssues: 4,
        daysSinceLastQualityIssue: 30,
        buildEfficiency: [["", ""]]
    },
    {
        name: ["new", "guy"],
        certStations: ["g", "f", "e", "h"],
        currentStation: "h",
        daysSinceLastTrained: 0,
        qualityIssues: 0,
        daysSinceLastQualityIssue: 0,
        buildEfficiency: [["", ""]]
    },
    {
        name: ["nick", "munoz"],
        certStations: ["g", "h", "f", "e", "i"],
        currentStation: "g",
        daysSinceLastTrained: 0,
        qualityIssues: 0,
        daysSinceLastQualityIssue: 0,
        buildEfficiency: [["", ""]]
    },
    {
        name: ["duyn", "nguyen"],
        certStations: ["f", "e", "d", "g", "h"],
        currentStation: "f",
        daysSinceLastTrained: 0,
        qualityIssues: 0,
        daysSinceLastQualityIssue: 0,
        buildEfficiency: [["", ""]]
    },
    {
        name: ["", ""],
        certStations: ["e", "f", "d", "c"],
        currentStation: "e",
        daysSinceLastTrained: 0,
        qualityIssues: 0,
        daysSinceLastQualityIssue: 0,
        buildEfficiency: [["", ""]]
    },
    {
        name: ["richard", "guy"],
        certStations: ["d", "c", "b", "e", "f"],
        currentStation: "d",
        daysSinceLastTrained: 0,
        qualityIssues: 0,
        daysSinceLastQualityIssue: 0,
        buildEfficiency: [["", ""]]
    },
    {
        name: ["third", "man"],
        certStations: ["c", "b", "d", "e"],
        currentStation: "c",
        daysSinceLastTrained: 0,
        qualityIssues: 0,
        daysSinceLastQualityIssue: 0,
        buildEfficiency: [["", ""]]
    },
    {
        name: ["second", "dude"],
        certStations: ["a", "c", "d", "b"],
        currentStation: "b",
        daysSinceLastTrained: 0,
        qualityIssues: 0,
        daysSinceLastQualityIssue: 0,
        buildEfficiency: [["", ""]]
    },
    {
        name: ["first", "guy"],
        certStations: ["a", "b", "c", "d"],
        currentStation: "a",
        daysSinceLastTrained: 0,
        qualityIssues: 0,
        daysSinceLastQualityIssue: 0,
        buildEfficiency: [["", ""]]
    }
];
module.exports = workers;

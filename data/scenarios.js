module.exports = {
    scenarios: [
        {
            input: {
                "roomSize" : [5, 5],
                "coords" : [3, 0],
                "patches" : [
                  [4, 0],
                  [4, 1],
                  [4, 2],
                  [4, 3]
                ],
                "instructions" : "ENNNNSSSSW"
            },
            output: {
                "coords" : [3, 0],
                "patches" : 5
            }
        },

        {
            input: {
                "roomSize" : [5, 5],
                "coords" : [0, 0],
                "patches" : [],
                "instructions" : ""
            },
            output: {
                "coords" : [0, 0],
                "patches" : 0
            }
        },

        {
            input: {
                "roomSize" : [4, 4],
                "coords" : [1, 1],
                "patches" : [],
                "instructions" : "NS"
            },
            output: {
                "coords" : [1, 1],
                "patches" : 0
            }
        },
    ]
}

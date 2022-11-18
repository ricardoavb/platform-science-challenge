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
                "roomSize" : [2, 2],
                "coords" : [0, 0],
                "patches" : [
                    [1, 0]
                ],
                "instructions" : ""
            },
            output: {
                "coords" : [0, 0],
                "patches" : 0
            }
        },
        {
            input: {
                "roomSize" : [1, 1],
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
                "roomSize" : [3, 3],
                "coords" : [1, 1],
                "patches" : [
                    [2, 1],
                    [2, 0],
                    [1, 0],
                ],
                "instructions" : "ESW"
            },
            output: {
                "coords" : [1, 0],
                "patches" : 3
            }
        },
        {
            input: {
                "roomSize" : [3, 3],
                "coords" : [2, 2],
                "patches" : [
                    [0, 0],
                    [1, 1]
                ],
                "instructions" : ""
            },
            output: {
                "coords" : [2, 2],
                "patches" : 0
            }
        },
        {
            input: {
                "roomSize" : [3, 3],
                "coords" : [0, 0],
                "patches" : [
                    [0, 1],
                    [0, 2]
                ],
                "instructions" : "NN"
            },
            output: {
                "coords" : [0, 2],
                "patches" : 2
            }
        },
        {
            input: {
                "roomSize" : [3, 3],
                "coords" : [0, 0],
                "patches" : [
                    [0, 1],
                    [0, 2],
                    [1, 2]
                ],
                "instructions" : "NNE"
            },
            output: {
                "coords" : [1, 2],
                "patches" : 3
            }
        },
        {
            input: {
                "roomSize" : [2, 2],
                "coords" : [1, 1],
                "patches" : [],
                "instructions" : ""
            },
            output: {
                "coords" : [1, 1],
                "patches" : 0
            }
        },
        {
            input: {
                "roomSize" : [2, 2],
                "coords" : [1, 1],
                "patches" : [
                    [1, 0],
                    [0, 0]
                ],
                "instructions" : "S"
            },
            output: {
                "coords" : [1, 0],
                "patches" : 1
            }
        },
    ]
}

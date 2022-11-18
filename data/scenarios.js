module.exports = {
    scenarios: [
        {
            input: {
                'roomSize' : [5, 5],
                'coords' : [1, 2],
                'patches' : [
                  [1, 0],
                  [2, 2],
                  [2, 3]
                ],
                'instructions' : 'NNESEESWNWW'
            },
            output: {
                "coords" : [1, 3],
                "patches" : 1
            }
        }
    ]
}


# Bugs

### Bug 1

When moving two steps towards the NORTH and then two steps towards the SOUTH, we get one(1) patch of dirt even when passing an empty array of patches. 

input:
- room size: [4, 4]
- coords: [0, 0]
- instructions: "NNSS"
- patches: []

Expected output:
  - coords: [0, 0]
  - patches: 0

Actual output:
  - coords: [0, 0]
  - patches: 1

### Bug 2

When moving one step towards the SOUTH and then one step towards the NORTH, we get one patch of dirt cleaned even when passing an empty array of patches. 

input:
- room size: [4, 4]
- coords: [1, 1]
- instructions: "SN"
- patches: []

Expected output:
  - coords: [1, 1]
  - patches: 0

Actual output:
  - coords: [1, 1]
  - patches: 1

### ¿Bug 3? - Mini room
When using a 1 X 1 room, and placing both the robot and a patch of dirt in the same position (0,0), the patches counter should be equals to 1?

input:
- room size: [1, 1]
- coords: [0, 0]
- instructions: ""
- patches: [0, 0]

Expected output:
  - coords: [0, 0]
  - patches: 1

Actual output:
  - coords: [0, 0]
  - patches: 0


### Bug 4 - N X M room

input:
- room size: [2, 3]
- coords: [1, 1]
- instructions: "SW"
- patches: [0, 0]

Expected output:
  - coords: [0, 0]
  - patches: 1

Actual output:
  - coords: [0, 0]
  - patches: 2

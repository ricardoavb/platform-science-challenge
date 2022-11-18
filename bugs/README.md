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

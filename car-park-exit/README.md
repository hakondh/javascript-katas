# car-park-exit

This function takes a matrix (a two-dimensional
array), which represents a
multi-story car parking lot. The task is to move 
the car to the exit by using staircases. The
exit is always at the bottom right of the matrix.

1. Free carparking spaces are represented by a `0`
2. Staircases are represented by a `1`
3. Your starting position is represented by a `2` and can be at any level of the car park.
4. Exit is always at the bottom right of the ground floor.
5. You must use the stair cases (1) to go down a level.
6. Each floor will have only one staircase apart from the ground floor which will not have any staircases.

Examples:

```
findQuickestRoute([[1, 0, 0, 0, 2],[0, 0, 0, 0, 0]]) ➞ ["L4", "D1", "R4"]
findQuickestRoute([[2, 0, 0, 1, 0],[0, 0, 0, 1, 0],[0, 0, 0, 0, 0]]) ➞ ["R3", "D2", "R1"]
```


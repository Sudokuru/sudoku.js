const sudoku = require('./sudoku.js');

// Generates 400 puzzles with each number of givesn 17-61 inclusive (18000 total)
for (let i = 17; i <= 61; i++) {
    for (let j = 0; j < 400; j++) {
        console.log(sudoku.generate(i));
    }
}
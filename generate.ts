// @ts-nocheck
const sudoku = require('./sudoku.js');

// Generates 400 puzzles with each number of givens 31-61 inclusive (12000 total)
for (let i = 31; i <= 61; i++) {
    for (let j = 0; j < 4; j++) {
        console.log(sudoku.generate(i));
    }
}
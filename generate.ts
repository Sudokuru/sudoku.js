// @ts-nocheck
const sudoku = require('./sudoku.js');

// Generates 2000 puzzles with each number of givens 42-61 inclusive (40000 total)
for (let i = 42; i <= 61; i++) {
    for (let j = 0; j < 2000; j++) {
        console.log(sudoku.generate(i));
    }
}
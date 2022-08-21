function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var tc = +input[0];
    for(let i = 1; i<tc+1; i++){
        var arr = input[i].trim().split(" ").map(Number);
        console.log(raceDay(arr));
    }
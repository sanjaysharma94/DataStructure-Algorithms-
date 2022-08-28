function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var tc = +input[0];
    var line = 1;
    for(let i = 0; i <tc; i++){
        var N = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        var K = +input[line++];
        
        pairLessThanK(N,arr,K)
    }
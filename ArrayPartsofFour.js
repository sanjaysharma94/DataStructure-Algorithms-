function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    
    var n = N/4;
    
     var sum = 0
    
    for(let  i = 0; i<n; i++ ){
        sum = sum + 2*arr[i]
         
    }
    for(let  i = n; i<2*n; i++ ){
        sum = sum + arr[i]
         
    }
function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);

    for(var i = 1; i<N-1; i++){
        if(arr[i-1]<arr[i] && arr[i+1]>arr[i]){
            console.log(arr[i]);
            break;
        }
    }
  
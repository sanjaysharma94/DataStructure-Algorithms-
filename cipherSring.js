//  input
//  2 tc
// 5
// aabcc
// 5
// aazaa


// output
// a2b1c2
// a2z1a2

function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var tc = +input[0];
    var line = 1;
    for(var i =0; i<tc; i++){
      var N= +input[line];
      line++;
      var str = input[line]; 
      line++;
      
      cipherstring(N,str)
    }
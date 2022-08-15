//  sample input nxn matrix
// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8


// sample output

// 1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2 

function spirallyTraversingAMatrix(N, matrix){
    let left =0;
    let top =0;
    let right = N-1;
    let bottom = N-1;
    let size  = N*N;
    let count =0;
    var bag ="";
    while(count < size){
        for(var i=left ; i<=right && count < size ; i++){
            bag += matrix[left][i]+" ";
            count++;
        }
        top++;
        
        for(let i=top ; i<=bottom && count < size ; i++){
            bag += matrix[i][right]+" ";
             count++;
        }
        right--;
        for(let i=right; i>= left && count < size ; i--){
            bag += matrix[bottom][i]+" ";
            count++;
        }
        bottom--;
        for(let i=bottom ; i>=top && count < size ; i--){
            bag += matrix[i][left]+" ";
            count++;
        }
        left++;
        
    }
  console.log(bag);
}

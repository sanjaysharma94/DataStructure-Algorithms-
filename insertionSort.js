let array = [-5,-3,5,2,-1,-8,11,0];
let N = array.length;

console.log(insertionSort(array,N))

function insertionSort(array,N){


    for(let i = 0; i < N; i++){
    let j = 1
        while(j<N){
            if(array[j]<array[j-1]) swap(array,j,j-1);
            else(j++);
        }
    }

    return array
}


function swap(array, min, j){
    console.log(min,j)
    temp = array[min];
    array[min] = array[j];
    array[j] = temp;

}
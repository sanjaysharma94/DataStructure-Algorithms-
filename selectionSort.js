let array = [-2,5,1,6,-7];
let N = array.length;

console.log(selectionSort(array,N));

function selectionSort(array,N){


        for(let i = 0; i<N; i++){
            let min = i;

            for(var j = i+1; j<N; j++){
                if(array[j]<array[min]) min = j
            }
            
            swap(array,min,i);
        }
        return array;
}


function swap(array, min, j){
    console.log(min,j)
    temp = array[min];
    array[min] = array[j];
    array[j] = temp;

}
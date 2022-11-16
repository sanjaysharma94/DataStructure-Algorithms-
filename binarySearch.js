let array = [2, 3, 4, 10, 40 ] 
let target = 10;


function binarySearch(array,target){
array.sort((a,b)=>a-b);
let N = array.length;
let left = array[0];

let right = N;
while(left<right){

    let mid = Math.floor((left+right)/2);

    if(array[mid]===target) return mid;
    else if (array[mid]>target){
        right= mid-1;

    }
    else{
        left = mid+1;
    }

}


}

console.log(binarySearch(array,target));
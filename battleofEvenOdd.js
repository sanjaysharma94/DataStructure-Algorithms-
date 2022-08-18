function battleOfOddAndEven(n, arr){
    //write code here
    var oddsum = 0;
    var evensum = 0;
    for(var i = 0; i<n; i++){
     if(arr[i]%2 === 0){
            evensum = evensum + arr[i];
        }
        else if(arr[i]%2 !== 0){
            oddsum = oddsum + arr[i];
        }
    }
    if(evensum >= oddsum){
        console.log("Even");
    }
    else if(evensum <= oddsum){
        console.log("Odd");
    }
}
function threeMaxThreeMin(N,arr){
    let uniqueIntegers = [...new Set(arr)];
    
    uniqueIntegers.sort((a,b)=>a-b)
    if(uniqueIntegers.length<3){
        console.log("Not Possible")
        console.log("Not Possible")
    }
    else{
        console.log(uniqueIntegers[0]+" "+uniqueIntegers[1]+" "+uniqueIntegers[2])
        console.log(uniqueIntegers[uniqueIntegers.length-3]+" "+
        uniqueIntegers[uniqueIntegers.length-2]+" "+
        uniqueIntegers[uniqueIntegers.length-1])
    }
}

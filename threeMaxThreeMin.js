// Three Max, Three Min Please -25:41:36
// Description

// Given an array of N integers, print the 3 distinct maximum and 3 distinct minimum elements of the array.


// Input
// Input Format

// First line contains N

// Second line contains N space separated integers which are elements of the array.

// Constraints

// 0<=N<=100 (Please note that N can be 0 as well)

// The values present in the array can be negative as well.




// Output
// In the first line, print the least 3 values (sorted) present in the array.

// In the second line, print the top 3 values (sorted) present in the array.

// In case there are not 3 min value, print "Not Possible" (without quotes).

// In case there are not 3 max value, print "Not Possible" (without quotes).

// So, according to the above statements, if both are not possible, you have to print "Not Possible" twice (once for each)

// In the array, if you found out only 2 distinct min and 2 distinct max elements then also printNot Possibletwice [ one for minimum and other for maximum]


// Sample Input 1 

// 8
// 1 2 3 4 2 1 6 5
// Sample Output 1

// 1 2 3
// 4 5 6

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

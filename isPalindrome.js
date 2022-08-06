// Detect Palindrome -25:33:23
// Description

// Given an integer, print "Yes" (without quotes) if that integer is aPalindrome, else print "No" (without quotes)

// You must write a recursive function to achieve this

// You must not use the reverse() function. Using that would lead to disqualification


// Input
// Input Format

// You are provided with one integer.

// Constraints

// The provided integer is always lesser than 1000000


// Output
// Print Yes or No depending upon the integer.


// Sample Input 1 

// 1221
// Sample Output 1

// Yes



function isPalindrome(str){
    var N = str.length;
    var left = 0;
    var right = N-1;
    while(left<right){
        if(str[left]==str[right]){
            left++;
            right--;
        }
        else{
            return "No";
        }
        
        
    }
    
    if(left>=right) return "Yes";
    }
  
    
    console.log(isPalindrome(str))
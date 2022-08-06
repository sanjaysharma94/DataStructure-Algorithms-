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
    
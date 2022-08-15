function perfomMerge(arr1,arr2){


    var left = 0 , right = 0;
    var arr3 = [];
    
    while(left<N && right<N){
        if(arr1[left]<=arr2[right]) {
         arr3.push(arr1[left]);
         left++;
        }
        else{
            arr3.push(arr2[right]) ;
            right++
            }
        
        
       
    }
    
    while(left<N) arr3.push(arr1[left]), left++;
    while(right<N) arr3.push(arr2[right]),right++;
    console.log(arr3.join(" "));
  
  
   
  
  
  
  
  }

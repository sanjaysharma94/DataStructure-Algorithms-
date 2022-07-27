function median(A,B){
    let n = A.length;
    let m = B.length;
    if(n>m) return median(B,A)
    
    let low = 0;
    let high = n;
    let midd = Math.floor((n+m+1)/2);
    while(low<=high){
      let mid = Math.floor((low+high)/2);
      let leftAsize = mid;
      let leftBsize = midd - mid;
  
    let leftA = (leftAsize>0)?A[leftAsize-1]:-Infinity;
      let leftB = (leftBsize>0)?B[leftBsize-1]:-Infinity;
    let rightA = (leftAsize<n)?A[leftAsize]:+Infinity;
    
    let rightB = (leftBsize<m)?B[leftBsize]:+Infinity;
  
  
    if(leftA<=rightB && leftB<=rightA){
      if((m+n)%2==0){
         return Math.floor((Math.max(leftA,rightB)+Math.min(rightA,rightB)/2.0))
      }
      return Math.max(leftA,leftB)
    }
    else if(leftA>rightB){
      high = mid -1;
    }
    else {
      low = mid+1;
    }
  }
  return 0.0;
    
  } 
  
  let A = [1,2,3,4,5,6,7,8]
  let B = [11,12,13,14,15]
  
  console.log(median(A,B))
  
  
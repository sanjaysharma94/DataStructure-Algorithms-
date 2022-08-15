

// search target element k


function BinarySearch(arr,k,start,end){
        
    if(start>end){
        return -1;
        }
        
    mid = Math.floor(start + (end-start)/2);
    if(arr[mid]==k){
        return 1;
    }
    else if(arr[mid]>k){
        return BinarySearch(arr,k,start,mid-1);
    }
    else{
        return BinarySearch(arr,k,mid+1,end);
    }
    
        
    
}

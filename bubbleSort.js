function bubbleSort(N,arr){
    
    for (var i = 0; i < N-1; i++)
    {
        for (var j = 0; j < N-i-1; j++)
        {
            if (arr[j] > arr[j+1])
            {
            swap(arr,j,j+1);
             
            }
        }
     
    }
    
     return arr;
    }
    
    function swap(arr, a, b)
    {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    console.log(bubbleSort(6,[1,5,0,3,4,-1]))
    
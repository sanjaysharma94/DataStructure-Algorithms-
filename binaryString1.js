function binaryString(N,str){
    let max = 0;
    for(let i=0 ; i<N ; i++){
        for(let j=i ; j<N ; j++ ){
            let bag="";
            for(let k=i ; k<=j ; k++){
                bag += str[k];
            }
            const length = bag.length;
             
             
             let same=areSame(bag)
     
             if(same) if(length>max) max = length;
             
        }
    }
    
    console.log(max);
}

        function areSame(arr)
    {
        let first = 0;
       for (let i=0; i<arr.length; i++)
           if (arr[i] != first)
                return false;
       return true;
    }


function primeSumUp(num) {
    var sum = 0;
    for(var i = 2; i<=num; i++){
        var value = i;
        var count = 0;
        for(var j = 2; j<value; j++){
            if(value%j===0) count++;
       }
       
       if(count===0) sum += (value); 
       
   }
   
   console.log(sum);

}

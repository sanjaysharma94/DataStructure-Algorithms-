function primeLoopCheck(num) {
    for(var i = 2; i<=num; i++){
        var value = i;
        var count = 0;
        for(var j = 2; j<value; j++){
            if(value%j===0) count++;
       }
       
       if(count===0) console.log(value); 
       
   }
}
let numbers = [ 2, 5, 9, 8, 7, 6, 47, 0, -13 ];

function filterPrime(num){

      if(num<=0) return false
        upto = Math.ceil(num/2);
      for(var i = 2;  i < upto;  i++) {
       if(num%i == 0) {
         return false
       }
       else continue;
     }
  return true;
}


const primeArray = numbers.filter(filterPrime);

console.log(primeArray);

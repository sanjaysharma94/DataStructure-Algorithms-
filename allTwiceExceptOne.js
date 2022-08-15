function findUnique(N,arr){
                   
    let obj = {}     
for(let i = 0; i<N; i++){
 if(obj[arr[i]]===undefined){
    obj[arr[i]]=1; 
 }
 else obj[arr[i]]++;
} 


   for(var x in obj){
       if(obj[x]==1){
           console.log(x)
       }
   }     
}

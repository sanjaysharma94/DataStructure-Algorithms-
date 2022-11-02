
    let words = ["cat","bt","hat","tree"]
    let  chars = "atach"
    let words1 = ["hello","world","leetcode"]
    let chars1 = "welldonehoneyr"
    
    function canMakeString(words, chars){

        let  N = words.length;
        let count = 0;
        for(let i = 0; i < N; i++){

        let word = words[i];
        

        let N2 = word.length;
        let currentCount = 0;
        for(let j = 0; j < N2; j++){
            if(chars.includes(word[j])) {
                
                currentCount++;
                
            } else{
                
                currentCount = 0;
                break;
            }

        }
        count += currentCount;
        }
         return count;

    
        }

    console.log(canMakeString(words,chars));
    console.log(canMakeString(words1,chars1));


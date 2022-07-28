
 var romanToInt = function(s) {
    
    
    let num = s.split("");
    let ans = 0;
    for(let i = 0; i<num.length; i++){
        if(num[i]=="I"){
            ans += 1;
        }
        if(num[i]=="X"){
            ans += 10;
            if(num[i-1]=="I"){
                ans -= 2;
            }
        }
        if(num[i]=="V"){
            ans += 5;
             if(num[i-1]=="I"){
                ans -= 2;
            }
        }
        if(num[i]=="L"){
            ans += 50;
             if(num[i-1]=="X"){
                ans -= 20;
            }
        }
        if(num[i]=="C"){
            ans += 100;
             if(num[i-1]=="X"){
                ans -= 20;
            }
        }
        if(num[i]=="D"){
            ans += 500;
             if(num[i-1]=="C"){
                ans -= 200;
            }
        }
        if(num[i]=="M"){
            ans += 1000;
             if(num[i-1]=="C"){
                ans -= 200;
            }
        }
    }
    
    return ans
};


console.log(romanToInt("XI"))
function strPowerCalc(N, str){
    let vowel = 0;
    let consonent = 0;
	for(var i = 0; i<N; i++){
	    if(str[i]=="a" ||str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u") vowel++;
	    else consonent++;
	}
	 return (5*vowel + 7*consonent);
}

console.log(strPowerCalc(6, "ankush"))
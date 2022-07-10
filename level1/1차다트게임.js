function solution(dartResult) {

    var answer = 0;

    var bonus = {'S':1, 'D':2, 'T':3};
    var option = {"*": 2, "#": -1};
    var dart = [0, 0, 0];

    var flag = -1;

    var toNum = /\d+/;

    for( var i = 0; i < dartResult.length; i++ ) {
        
        if(toNum.test(dartResult[i])){
            flag++;
            // if((dartResult[i+1])==0){
            if(toNum.test(dartResult[i+1])){
                dart[flag] = 10;
                i++;
                continue;
            }
            dart[flag] = parseInt(dartResult[i]);
            
        }
        else if("STD".includes(dartResult[i])){
            dart[flag] = dart[flag]**bonus[dartResult[i]];
        }
        else if("*#".includes(dartResult[i])){
            if(dartResult[i] === '*' && flag !== 0){
                dart[flag-1] = dart[flag-1]*option[dartResult[i]]
            }
            dart[flag] = dart[flag]*option[dartResult[i]];
        }
    }

    
    return dart.reduce((accumulator, curr) => accumulator + curr)
}


console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));
console.log(solution("1D2S3T"));
console.log(solution("1S2D3T"));
console.log(solution("10D4S10D")); 
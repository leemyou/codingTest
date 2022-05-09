function solution(absolutes, signs) {

    var num = [];
    var answer = 0;

    for (var i = 0; i <absolutes.length; i++) {
        if(signs[i] === true){
            signs.splice(i,1,'+');
        }else{
            signs.splice(i,1,'-');
        }
        num.push(signs[i] + absolutes[i]);
        num[i] = parseFloat(num[i]);
        answer += num[i];
    }
    return answer;

//     // 개똥멍청이 그냥 1이랑 -1을 곱해주면 됌
// let answer = 0;
// absolutes.forEach((v, i) => {
//     if(signs[i]){
//         answer += v;
//     }else{
//         answer -= v;
//     }
// })
// return answer;
}




result = solution([4,7,12],	[true,false,true])
console.log(result)
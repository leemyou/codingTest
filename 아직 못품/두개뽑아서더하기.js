function solution(numbers) {
    //for문 이용
    var temp = [];

    for(var i = 0; i < numbers.length; i++){
        for(var j = i+1; j<numbers.length; j++){
            temp.push(numbers[i] + numbers[j])
        }
    }
    
    // 전개구문 이용 -> 깊은 복사가 베이스로 깔려있음.
    const answer = [...new Set(temp)]
    answer.sort((a,b) => a-b);

    return answer;
}

var result = solution([5,0,2,7]);
console.log(result);
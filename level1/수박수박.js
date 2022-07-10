function solution(n) {
    // const answer ;
    var answer = '';

    // for (var i = 0; i < n; i++) {
    //     i%2===0 ? answer+='수' : answer+='박';
    // }

    answer = '수박'.repeat(n/2 + 1).slice(0,n)

    return answer;
}

result = solution(3);
console.log(result);
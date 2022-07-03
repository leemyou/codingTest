function solution(s) {
    var answer = '';

    if (s.length%2 == 0) { //문자열 길이 짝수
        answer = s.substr((s.length/2)-1, 2)
    }else { // 문자열 길이 홀수
        answer = s.substr(Math.floor(s.length/2), 1)
    }

    return answer;
}

result = solution("abcde");
console.log(result);
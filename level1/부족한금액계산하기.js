function solution(price, money, count) {
    var answer = -1;
    var total = 0;

    //총 필요한 놀이기구의 이용 금액
    for(var i=1; i<count+1; i++) {
        total += price*i;
    }
    
    answer = total - money
    
    if(answer<0) {
        return 0;
    }
    else {
        return answer;

    }
}

result = solution(3, 20, 4);
console.log(result);
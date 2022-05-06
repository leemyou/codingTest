function solution(numbers) {

    var i = 0;
    var answer = 0;
    
    while (i<10){
        if(numbers.includes(i)){
            i++;
        }
        else{
            answer += i;
            i++;
        }
    }


    return answer;
}

result = solution([1,2,3,4,6,7,8,0])
console.log(result)
function solution(nums) {
    var answer = nums.length/2;

    // 내가 가져갈 수 있는 포켓몬의 수 = 배열/2
    myPocketmon = new Set(nums);
    myPocketmon = myPocketmon.size;

    // num의 길이/2 만큼 myPocketmon에서 뽑아
    if(answer <= myPocketmon){
        answer = answer;
    }else if(answer > myPocketmon){
        answer = myPocketmon;
    }

    return answer;
}

result = solution([3,3,3,2,2,2])
console.log(result);
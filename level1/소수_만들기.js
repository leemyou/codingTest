function solution(nums) {
    var answer = 0;
    num = [];
    
    // 배열중에 3개를 뽑는 알고리즘
    for(var i=0; i<nums.length; i++){
        for(var j=i+1; j<nums.length; j++){
            for(var k=j+1; k<nums.length; k++){
                number = nums[i]+nums[j]+nums[k];
                if(isPrime(number)) {
                    answer ++;
                }
            }
        }
    }
    return answer;
}

function isPrime(num) {
    for(i=2; i<=num/2; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

result = solution([1,2,7,6,4]);
console.log(result)
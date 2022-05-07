function solution(nums) {
    var answer = 0;
    num = [];
    
    // 배열중에 3개를 뽑는 알고리즘
    for(var i=1; i<nums.length+1; i++){
        for(let j=i+1; j<nums.length+1; j++){
            for(let k=j+1; k<nums.length+1; k++){
                num.push(i+j+k)
                console.log(num);
            }
        }
    }

    for(i=0; i<num.length; i++){
        num[i];
        if(num[i] === 2){
            answer += 1;
        }
        for(t=2; t<)
    }


    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    // return results;
}

result = solution([1,2,3,4]);
console.log(result)
// 자신이 구매했던 로또로 당첨가능한 최고최저순위
// 순서 상관없이 내 번호가 있으면 맞춘 것
// 최고순위, 최저순위


function solution(lottos, win_nums) {
    
    // js에서는 순서와 상관없는 배열이 없음 -> for문으로 하나씩 돌려봐야함
    
    
    if(lottos.indexOf(0)){
        // 0이 있는지 찾고 [0,0,..]의 배열을 만들어
        let count0 = 0;
        for (var i in lottos) {
            if(lottos[i] === 0){
                count0++;
            }
        }
        // 0들의 배열의 선언 및 길이 지정
        let arr = new Array(count0).fill(0);
            // return arr;

        // 0에다가 1~45까지 넣어봐 for문
        for(i in arr){
            for(j=1; j<46; j++){
                arr[i]
            }
        }
        // 힘들면 0을 뺀 나머지 숫자를 lottos에서 빼와서 새로운 배열을 만들어
        // 그 안에서 최고순위 찾아
        // 최저순위를 찾아
    }
        
    
    // var answer = [0,0];
    // answer.push(최고순위, 최저순위);
    // return answer;
}

const result = solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
console.log(result);
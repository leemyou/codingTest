function solution(lottos, win_nums) {
    
    lottos.length = 6;

    // 0빼고 나머지 수의 배열 구해
    for(var i = 0; i < lottos.length; i++) {
        if(lottos[i] === 0){
            lottos.splice(i, 1);
            i--;
        }
    }

    return lottos;

}

const result = solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
console.log(result);
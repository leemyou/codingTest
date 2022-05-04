function solution(array, commands) {

    var answer = [];

    for(var i=0; i < commands.length; i++){
        let arr = commands[i];
        saveArr = array.slice(arr[0]-1, arr[1]);
        //sort에 따로 조건을 걸어주지 않으면 문자열 취급으로 유니코드 순서대로 정렬한다.
        saveArr.sort(function(a,b){
            return a-b;
        });
        answer.push(saveArr[arr[2]-1]);
    }

    return answer;
}

result = solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]);
console.log(result);
function solution(d, budget) {
    var answer = 0;
    var a = 0;
    
    var dSort = d.sort( function (a,b) { return a-b;});
    console.log(dSort)

    for (var i = 0; i < dSort.length; i++) {
        a += dSort[i];

        if( a <= budget ) {
            answer += 1;
        }
    }
    return answer;
}

result = solution( [1, 2, 10, 20], 8);
console.log(result);


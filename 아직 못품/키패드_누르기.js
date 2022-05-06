function solution(numbers, hand) {

    var answer = '';

    number = numbers.toString().replace(/,/g, '');
    var answer = number.replace(/[147]/g, 'L')
        .replace(/[369]/g, 'R')


        // 2 거리1=1,3,5   거리2=4,6
        // 5 거리1=2,4,6,8 거리2=
        // 8 거리1=5,7,9,0
        // 0 거리1=8

    switch (hand){
        case "right":
            break;
        case "left":
            break;
    }

    return answer;
}

result = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")
console.log(result)
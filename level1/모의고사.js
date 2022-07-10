function solution(answers) {
    
    // answer의 길이 5

    var p1 = [1, 2, 3, 4, 5]; // 5개
    var p2 = [2, 1, 2, 3, 2, 4, 2, 5]; //8개
    var p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10개

    var person = [0, 0, 0]

    var tester = [];


    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === p1[i % p1.length]) {
            person[0] = person[0] + 1;
        }
        if(answers[i] === p2[i % p2.length]) {
            person[1] = person[1] + 1;
        }
        if(answers[i] === p3[i % p3.length]) {
            person[2] = person[2] + 1;
        }
    }


    // 시험 잘 본 친구 return
    var max = Math.max(...person)
    for(var i =0; i<3; i++) {
        if(person[i] === max){
            tester.push(i+1)
        }
    }

    return tester;
}

result = solution([1,3,2,4,2])
console.log(result)
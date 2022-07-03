function solution(numbers, hand) {

    var answer = '';
// 숫자를 좌표로 만들어서 거리 비교
    let number = {
        1:[0,0], 2:[0,1], 3:[0,2],
        4:[1,0], 5:[1,1], 6:[1,2],
        7:[2,0], 8:[2,1], 9:[2,2],
        10:[3,0],0:[3,1], 12:[3,2]
    };

    setL = 10;
    setR = 12;

    // |x좌표의 차 + y좌표의 차| = 거리
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i]%3 === 1){ // 1,4,7
            setL = numbers[i];
            answer += 'L';
        }
        else if(numbers[i]%3 === 0 && numbers[i] != 0){ // 3,6,9
            setR = numbers[i];
            answer += 'R';
        }
        else{   // 2,5,8,0   
            ic = number[numbers[i]];
            lc = number[setL];
            rc = number[setR];
            왼손거리 = Math.abs(lc[0]-ic[0]) + Math.abs(lc[1] - ic[1]);
            오른손거리 = Math.abs(rc[0]-ic[0]) + Math.abs(rc[1] - ic[1]);

            if(왼손거리 > 오른손거리) {
                setR = numbers[i];
                answer += 'R';
            }
            else if(왼손거리 < 오른손거리) {
                setL = numbers[i];
                answer +='L';
            }else{
                switch (hand){
                    case "right":
                        setR = numbers[i];
                        answer += 'R';
                        break;
                    case "left":
                        setL = numbers[i];
                        answer += 'L';
                        break;
            }
            
        }
    } 
}
    
    
//숫자 자체의 거리 비교    
    // var setL = 10;
    // var setR = 12;

    // for(var i = 0; i < numbers.length; i++){
    //     if(numbers[i]%3 === 1){ // 1,4,7
    //         setL = numbers[i];
    //         numbers.splice(i, 1, 'L');
    //     }
    //     else if(numbers[i]%3 === 0){ // 3,6,9
    //         setR = numbers[i];
    //         numbers.splice(i, 1, 'R');
    //     }
    //     else{   // 2,5,8,0
    //         l = Math.abs(setL-i);   //5 // 7
    //         r = Math.abs(setR-i);   //7 // 5



    //         if(l>r) {
    //             numbers.splice(i, 1, 'L');
    //             setL = numbers[i];
    //         }
    //         else if(l<r) {
    //             numbers.splice(i, 1, 'R');
    //             setR = numbers[i];
    //         }
    //         else {
    //             switch (hand){
    //                 case "right":
    //                     setR = numbers[i];
    //                     break;
    //                 case "left":
    //                     setL = numbers[i];

    //                     break;
    //             }
    //         }


    //     }
    // }




    // number = numbers.toString().replace(/,/g, '');

    
        // 2 거리1=1,3,5   거리2=4,6
        // 5 거리1=2,4,6,8 거리2=
        // 8 거리1=5,7,9,0
        // 0 거리1=8



    return answer;
}

result = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")
console.log(result)
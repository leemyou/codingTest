function solution(new_id) {

    // 체이닝으로 간결하게 표현 가능
    // // 1,2,3단계
    // new_id = new_id.toLowerCase();
    // new_id = new_id.replace(/[^\w-._]/g,'');
    // new_id = new_id.replace(/[.]{2,}/g, '.');

    // //아이디의 처음에 위치한 . 제거

    // new_id = new_id.replace(/^\./, '');
    // new_id = new_id.replace(/\.$/, '');

    // // 6단계
    // new_id = new_id.substring(0, 15);
    // new_id = new_id.replace(/\.$/, '');



    // // 5단계 처음부터 마지막까지 공백이면 a로 치환
    // if(answer === ""){
    //     answer = 'a'
    // }

    // 7단계
    // if(answer.length<3){
    //     while(true){
    //         if(answer.length == 3){
    //             break;
    //         }else{
    //             answer = answer + answer[answer.length - 1];
    //         }
    //     }
    // }
    // padEnd()로 간결하게 표현 가능

    // return answer;


    var answer = new_id
        .toLowerCase()
        .replace(/[^\w-._]/g,'')
        .replace(/[.]{2,}/g, '.')
        .replace(/^\./, '')
        .replace(/\.$/, '')
        .substring(0, 15)
        .replace(/\.$/, '')
        .replace(/^$/, 'a');    //5단계
    return answer.padEnd(3, answer[answer.length -1])



}

result = solution("abcdefghijklmn.p.");
console.log(result);
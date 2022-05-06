function solution(s) {

    // while(true){
    //     if(isNaN(s)){
    //         s = s.replace('zero', '0')
    //             .replace('one', 1)
    //             .replace('two', 2)
    //             .replace('three', 3)
    //             .replace('four', 4)
    //             .replace('five', 5)
    //             .replace('six', 6)
    //             .replace('seven', 7)
    //             .replace('eight', 8)
    //             .replace('nine', 9);
    //     }else{
    //         break;
    //     }
    // }
    // 조금 더 간결하게
    s = s.replace(/zero/gi, 0)
        .replace(/one/gi, 1)
        .replace(/two/gi, 2)
        .replace(/three/gi, 3)
        .replace(/four/gi, 4)
        .replace('five', 5)
        .replace('six', 6)
        .replace('seven', 7)
        .replace('eight', 8)
        .replace('nine', 9);
    return Number(s);
}

result = solution("2three45sixseven")
console.log(result)
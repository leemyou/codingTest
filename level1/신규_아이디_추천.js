function solution(new_id) {
    var answer = '';

    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^\w-._]/g,'');
    new_id = new_id.replace(/[.]{2,}/g, '.');

    //아이디의 처음과 마지막에 위치한 . 제거
    if(new_id[0]==='.' && new_id[new_id.length - 1]==='.'){
        new_id = new_id.replace('.', '')
    }
    if(new_id === ""){
        new_id = 'a'
    }

    new_id = new_id.substring(0, 16);

    if(new_id.length<3){
        new_id = new_id + new_id[new_id.length - 1];
    }


    return new_id;
}

result = solution("...!@BaT#*..y.abcdefghijklm.");
console.log(result);
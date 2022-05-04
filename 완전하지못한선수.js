function solution(participant, completion) {

    participant.sort();
    completion.sort();

    for(var i = 0; i <participant.length; i++){
        // if(participant[i] === completion[i]){
        // }else{
        //     return participant[i];
        // }
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

result = solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
console.log(result);
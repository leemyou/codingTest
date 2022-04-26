
function solution(id_list, report, k) {
    
    id_list = ["muzi", "frodo", "apeach", "neo"];
    report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
    report = new Set(report);     // report에 중복제거

    신고당한id = [];
    for(i in report) {
        신고당한id.push(report[i].split(" ")[1]);
    }

    ban = [];
    count = [];
    for (i in id_list) {
        let count = id_list.filter(Element => id_list[i] === Element).length;
        if(count >= k){
            ban.push(i);
        }
    }

    console.log(신고당한id);
    
    var answer = [0]*id_list.length;
    
    for(i in id_list) {
        for(j in ban){
            if(j in id_list[i]) answer
                answer[id_list.index(i)] += 1;
        }
    }

    return answer;
}

result = solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2);
console.log(result);
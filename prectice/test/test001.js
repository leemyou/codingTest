function solution(id_list, report, k) {

    // map의 기본 원리 -> 반복문을 돌며 배열 안의 요소들을 1ㄷ1로 짝지어주는 것
    // set으로 중복을 제거한 report 배열에서 하나씩 돌면서 ' '기준으로 자른걸 reports에 넣어줌
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});

    let counts = new Map();

    // in이랑 of랑 똑같음
    // set(key, value)
    for (const bad of reports){
        counts.set(bad[1], counts.get(bad[1])+1||1)     // 여기서 ||1을 없애면 NaN이 나오는데 왜?
    }
    // return counts;  // id별로 신고당한 횟수를 리턴해준다.

    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    return good;        // id별로 처리문자를 받은 횟수 리턴

    // let answer = id_list.map(a=>good.get(a)||0)
    // return answer;
}

const result = solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2);
console.log(result);
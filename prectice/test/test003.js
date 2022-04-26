var lottos = [44, 1, 0, 0, 31, 25];

let result = [];
// if(lottos.indexOf(0)){
//     for (var i in lottos) {
//         var record = lottos.find(function(item, index, arr){ return item === 0 });
//         result.push(record);
//     }
    

// }

// 0의 갯수를 구해서 그 갯수만큼 배열을 만들자?
let count0 = 0;
for (var i in lottos) {
    if(lottos[i] === 0){
        count0++;
    }
}

// arr배열의 선언 및 길이 지정
let arr = new Array(count0).fill(0); //[0,0]

for(i in arr) {
    for(j=1; j<46; j++){
        // expectArr = 0대신 1~45로 구성된 새로운 배열생성 및 구성
        // expextArr[0]과 expectArr[1]의 중복제거(원소들 간의 중복제거)
        // lottos 안에 있는 숫자들 중에 하나랑 중복이 있나 검사해야함
    }
}

만들어진 배열중에 하나를 고르고(for문) 0을뺀 나머지lottos와 합쳐




console.log(expNum);
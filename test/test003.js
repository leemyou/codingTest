var lottos = [44, 1, 0, 0, 31, 25];

let result = [];
// if(lottos.indexOf(0)){
//     for (var i in lottos) {
//         var record = lottos.find(function(item, index, arr){ return item === 0 });
//         result.push(record);
//     }
    

// }

// 0의 갯수를 구해(count0 = 2)
let count0 = 0;
let expectArr = new Array(lottos);

for (var i = 0; i < lottos.length; i++) {
    if(lottos[i] === 0){
        count0++;
        // count의 숫자만큼 배열을 만들어서 하나씩 넣어보면 안되나

        lottos.splice(i, 1);        // [44, 31, 25] 출력
        i--;
        
        for(var j = 1; j < count0; j++) {
            
        }
        if(lottos[i] === 1){
            
        }
    }

}

// 1부터 45까지 for문을 돌려서 숫자를 꺼내
for(var i=1; i<46; i++) {
    i;

}
// count0의 갯수(2)+lottos에서 0빼고 나머지 숫자를 합친 배열을 만들어(expextArr)
// expextArr = [... new Set(expextArr)]; -> 중복제거
// 이 배열들을 하나씩 for문으로 정답 로또(win_~)와 몇개가 맞는지 검사해서 순위 배열을 만들어
// 순위 배열에서 최고값과 최저값을 빼내서 배열을 만들고 출력



// 0의 갯수를 구해서 그 갯수만큼 배열을 만들자?
// let count0 = 0;
// for (var i in lottos) {
//     if(lottos[i] === 0){
//         count0++;
//     }
// }

// arr배열의 선언 및 길이 지정
// let arr0 = new Array(count0).fill(0); //[0,0]
// let expectArr = [1,1];

// for(i in arr0) {
//     for(j=1; j<45; j++){
//         // expectArr = 0대신 1~45로 구성된 새로운 배열생성 및 구성
//         arr0 = arr0.splice(i, 1, j);
//         expectArr.push(arr0);

//         // expextArr의 원소들 간의 중복제거
//         expectArr = [... new Set(expectArr)];

//         // lottos 안에 있는 숫자들 중에 하나랑 중복이 있나 검사해야함

//     }
// }

// 만들어진 배열중에 하나를 고르고(for문) 0을뺀 나머지lottos와 합쳐




console.log(lottos);
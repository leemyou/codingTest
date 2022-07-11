function solution(n, arr1, arr2) {

    var test = ""
    var answer = [];

    // 2진수 변환방법
    // var arr1to2 = arr2[1].toString(2);
    // console.log(arr1to2);

    for(var i=0; i<arr1.length; i++) {
        var arr1i = arr1[i].toString(2);
        var arr2i = arr2[i].toString(2);

        for(var j=0; j<n; j++) {
            if(arr1i.length < n){
                arr1i = 0 + arr1i;
            }
            if(arr2i.length < n){
                arr2i = 0 + arr2i;
            }

            if(arr1i[j]==0 && arr2i[j]==0) {
                test += " "
            }else {
                test += "#"
            }
        }
    }
    for(var i=0; i<n; i++) {
        answer.push(test.substr(n*i, n));
    }
    // console.log(answer)

    return answer;
}

result = solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
console.log(result);
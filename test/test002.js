//함수 선언
function doit(add){
    console.log(add);
    const result  = add(2,3);
    console.log(result);
}


function add(a, b){
    const sum = a + b;
    return sum;
}

//함수 호출
doit(add); // 함수 이름만을 전달함으로써 함수를 호출함
// doit(add());   //add함수를 수행을 하고 수행된 sum값을 전달하게 됨.
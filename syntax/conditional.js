var args = process.argv;    //node.js의 런타임/ 파일의 실행위치 / 입력값들
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2]==='1'){
    console.log('C1');
}else{
    console.log('C2');
}
console.log('D');
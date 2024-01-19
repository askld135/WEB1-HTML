var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

module.exports = M; // M이 가리키는 객체를 외부의 파일에서도 사용할 수 있도록 함. 
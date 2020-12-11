
//포트폴리오 페이지로 접속 애니메이션구현
function starship() {
    $(".ship > img").attr("src", "images/spaceshipF.png");
    $(".ship").css({"left": "100%" ,"transition":"all ease-in-out 2.2s"});
   
    shipMove();
    function shipMove() {
        setTimeout(function(){
            window.open("http://haedeny95.dothome.co.kr/port/portList.html","_blank");
            },2000);
    }

    shipBack();
    function shipBack() {
        setTimeout(function() {
            $(".ship").offset({left:400});
        },3000);
    }
            
}

//스크린 크기 구분
let windowWidth = window.outerWidth;

if(windowWidth < 500) {
alert("PC 버전에 최적화된 화면입니다");
}



//내비 시작
$("#gnb>ul>li").mouseover(function() {
    $(this).children("ul").stop().fadeIn("normal");
});
$("#gnb>ul>li").mouseout(function() {
    $(this).children("ul").stop().fadeOut("normal");
});

//내비 끝

//슬라이드 시작
let now=0;
let imgs= 2;
startLoop();

function startLoop() {
    setInterval(fadeShow, 3000);
}

function fadeShow() {
    now= now==imgs ? now=0: ++now;
    $("#slide>img").eq(now).fadeIn("slow");
    $("#slide>img").eq(now-1).fadeOut("slow");
}

//슬라이드 끝

//탭 시작
$("#tabBtn>button").click(function () {
    let linkV = $(this).attr("data-link");
    $(".tabLi").css({"display":"none"});
    $("#" + linkV).css({"display":"block"});
    $("#tabBtn>button").removeClass("tabOn");
    $(this).addClass("tabOn");
});

//탭 끝

//모달 시작
$("#banner>a").click(function(){
    $("#modalFrame").css("display","block");
});
$("#youtube>button").click(function(){
    $("#modalFrame").css("display","none");
});
//모달 끝

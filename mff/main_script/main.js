// $(window).resize(function() {
//
//        var size = window.outerWidth;
//
//        if(size<=1105) {
//
//            $("#nav").attr("id","gnb");
//
//        } else if (size>=1105) {
//
//            $("#gnb").attr("id","nav");
//
//        }
//
//    });

//$("#gnb>ul>li").click(function(){
//    $("#gnb>ul>li>ul").slideUp("normal"); //다 올려버리고
//    $(this).children("ul").stop().slideDown("normal");//클릭한거 내려 
//});


//내비게이션
 $(".all").on("click",function(){
    $(".navi").addClass("on");
    $(".black").show();
});
$(".close").on("click",function(){
    $(".navi").removeClass("on");
    $(".black").hide();
});

$("#nav>ul>li").mouseover(function() {
    $(this).find("ul").stop().slideDown("normal");
});
$("#nav>ul>li").mouseout(function() {
    $(this).find("ul").stop().slideUp("normal");
});


//슬라이드쇼
let now=0;
let imgCnt=4;
fadeStart();

function fadeStart(){
    setInterval(imgfade, 3000);
}

function imgfade() {
    now = now == imgCnt? now=0: ++now;
    $("#main_container>div").eq(now).fadeIn("slow");
    $("#main_container>div").eq(now-1).fadeOut("slow");
}

//상영작 롤
var liWidth = $("#movie").find("ul").children().outerWidth();
var liLength = $("#movie").find("ul").children().length; 

slidemulti();
var rollStart;
function slidemulti() {
    rollStart = setInterval(slideRoll,3000);
}


function slideRoll() {
    $("#movie").children("ul")
    .animate(
        {"left":-liWidth + "%"},
        1000,"swing",
        function() {
            $(this).css("left","0%");
            let liMove = "<li>" + $(this).find("li:first-child").html()+"</li>";
            $(this).append(liMove);
            $(this).find("li:first-child").remove();
        }

    )
}

$("#movie").mouseover(function() {
    clearInterval(rollStart);
}); 

$("#movie").mouseout(function() {
    slidemulti();
});





//탭메뉴
$("#tabBtn>button").click(function () {
    let linkV = $(this).attr("data-link");
    $(".tabLi").css({"display":"none"});
    $("#" + linkV).css({"display":"block"});
    $("#tabBtn>button").removeClass("tabOn");
    $(this).addClass("tabOn");
});


//모달유투브
$("#banner a").click(function(){
    $("#modalFrame").show();
});
$("#youtube>button").click(function(){
    $("#modalFrame").hide();
});

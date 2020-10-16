//자유게시판 글 등록하기 누르면 공백검증, 자유게시판으로 돌아가기

$("#goWriteBtn").click(function(){
    var head = $("#head").val();
    var content = $("#content").val();
    var fileGo = $("#fileGo").val();
    var idx = fileGo.lastIndexOf(".");
    var upload = fileGo.substring(idx+1);
    
    if(upload =="js") {
        $("#freebbs").find("span").css({"color":"blue"});
        return false;
    } else if(upload =="exe") {
        $("#freebbs").find("span").css({"color":"blue"});
        return false;
    } else {
        document.frm02.submit;
    }

    if(head=="") {
        $("#head").focus();
        return false;
    } else if (content=="") {        
        $("#content").focus();
        return false;
    } else {
        document.frm02.submit;
    }
});


//select 선택시 영화이름 적힘

$("#name").change(function () {
    let selectV =$(this).val();
    $("#write>span").text(selectV);
});

//리뷰 등록 별점 blur시 채우기
$("#starRate").blur(function () {
    let starRate = $("#starRate").val();
    let number = parseFloat(starRate) *20;
    $("div.star>span#starG").attr("style","width:"+number+"%");
    let pct = parseInt(starRate);
    let numberNo =0;
    if(pct <= 0) {
        alert("1 - 5 점까지 가능합니다.");
        $("#div.star>span#starG").attr("style",+"width:"+numberNo+"%");
        $("#starRate").val("");
    } else if (pct > 5) {
        alert("1 - 5 점까지 가능합니다.");
        $("#div.star>span#starG").attr("style",+"width:"+numberNo+"%");
        $("#starRate").val("");
    }
});


//select, 별점, textArea 유효성




//리뷰 등록클릭시 로그인페이지 이동
$("#viewBtn").click(function() {
    $("form").submit();
    alert("로그인 후 이용해주세요");
});



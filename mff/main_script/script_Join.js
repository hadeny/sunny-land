//모두 공백유효성
$("#joinBtn").click(function() {
    let userID = $("#userID").val();    
    let userPW = $("#userPW").val();
    let userPWC = $("#userPWC").val();
    let userName = $("#userName").val();
    let phone = $("#phone").val();
    let phoneCertify = $("#phoneCertify").val();
    let userEmail01 = $("#userEmail01").val();
    let userEmail02 = $("#userEmail02").val();
    let essential = $("#essential").prop("checked");
    let chk01 = $("#chk01").prop("checked");
    let chk02 = $("#chk02").prop("checked");

    if($("span#spanID").length ==0) { //아이디
        if(userID =="") {
            $("#userID").after("<span class='validChk' id='spanID'>*</span>");
        }        
    }
    
    if($("span#spanPW").length ==0) { //비번
        if(userPW =="") {
            $("#userPW").after("<span class='validChk' id='spanPW'>*</span>");
        }
        
    }
    
    if($("span#spanPWC").length ==0) { //비번확인
        if(userPWC =="") {
            $("#userPWC").after("<span class='validChk' id='spanPWC'>*</span>");
        }
        
    }
    
    if(userPW !=userPWC) {    //비밀번호 일치 시작
           if($("span#notSame").length ==0) {
                $("#userPW").after("<span class='validChk' id='notSame'> 불일치</span>");
                $("#userPW").focus();
                $("#userPW").val("");
                $("#userPWC").val("");
            }
        }
    //비밀번호 일치 끝      
        
    if($("span#spanName").length ==0) { //이름
        if(userName =="") {
            $("#userName").after("<span class='validChk' id='spanName'>*</span>");
        }
        
    }
    
    if($("span#spanPhone").length ==0) { //휴대폰 번호
        if(phone =="") {
            $("#phone").after("<span class='validChk' id='spanPhone'>*</span>");
        }
    } 

    if(isNaN(phone)) {    //폰번호 숫자만 가능
            alert("숫자만 입력가능합니다.");           
             $("#phone").focus();
             $("#phone").val("");        
     }
    // else if(isNaN(phone)) {    //폰번호 숫자 일치 시작
    //     if($("span#spanNotNum").length ==0) {
    //          $("#phone").after("<span class='validChk' id='span#spanNotNum'> 숫자만 가능</span>");
    //          $("#phone").focus();
    //          $("#phone").val("");
    //      }
    //  }
    
 //비밀번호 일치 끝
    
    if($("span#spanCertify").length ==0) { //인증번호
        if(phoneCertify =="") {
            $("#phoneCertify").after("<span class='validChk' id='spanCertify'>*</span>");
        }
        
    }
    
    if(userEmail01 =="" || userEmail02=="") {        //이메일 유효성검사
        if($("span#spanEmail").length==0) {
            $("#userEmail03").after("<span class='validChk' id='spanEmail'> *</span>");
        }
        
    }
    
    if($("span#spanEss").length==0) {//체크박스 유효성
            if(essential ==false) {
            $("span.red").after("<span class='validChk' id='spanEss'> *</span>");
            }            
    }
    
    if($("span#spanChk01").length==0) {
            if(chk01 ==false) {
            $("#chk01_span").after("<span class='validChk' id='spanChk01'> *</span>");
            }
            
    }
    
    if($("span#spanChk02").length==0) {
            if(chk02 ==false) {
            $("#chk02_span").after("<span class='validChk' id='spanChk02'> *</span>");
            }
    }

    let validChkCnt = $("span.validChk").length;
    if (validChkCnt < 1) {       //*없으면 넘기기                              
        document.frm03.submit();
        alert("로그인창으로 넘어갑니다");                          
    }

       
});


// 이메일 keyup 시 * 없애기
$("#userEmail01").keyup(function() {
    removeA();
});

$("#userEmail02").keyup(function() {
    removeA();
});

function removeA () {
    let userEmail01 = $("#userEmail01").val();
    let userEmail02 = $("#userEmail02").val();
    $("#spanEmail").remove();
    if(userEmail01 =="" || userEmail02 =="") {
        if($("span#spanEmail").length ==0) {
            $("#userEmail03").after(" <span id='spanEmail'> *</span>");            
        } 
    }
}

//체크박스 블러 *지우기 시작
$("#essential").click(function() {
    removeE();
});

function removeE() {
    let essential = $("#essential").val();
    $("#spanEss").remove();
    if(essential ==false) {
        if($("span#spanEss").length ==0) {
            $("#essential").after(" <span id='spanEss'> *</span>");            
        } 
    }
}

$("#chk01").click(function() {
    removeC1();
});

function removeC1() {
    let chk01 = $("#chk01").val();
    $("#spanChk01").remove();
    if(chk01 ==false) {
        if($("span#spanChk01").length ==0) {
            $("#chk01_span").after(" <span id='spanChk01'> *</span>");            
        } 
    }
}

$("#chk02").click(function() {
    removeC2();
});

function removeC2() {
    let chk02 = $("#chk02").val();
    $("#spanChk02").remove();
    if(chk02 ==false) {
        if($("span#spanChk02").length ==0) {
            $("#chk02_span").after(" <span id='spanChk02'> *</span>");            
        } 
    }
}
//체크박스 블러 *지우기 끝

//나머지 keyup 시 * 없애기 시작
$("#userID").keyup(function () { //아이디
   let userID = $("#userID").val();
   if(userID!="") {
       $("#spanID").remove();
   } 
});
$("#userPW").keyup(function () { //비번
    let userPW = $("#userPW").val();
    if(userPW !="") {
        $("#spanPW").remove();
    } 
 });
 $("#userPWC").keyup(function () { //비번확인
    let userPWC = $("#userPWC").val();
    if(userPWC !="") {
        $("#spanPWC").remove();
    } 
 });
 $("#userName").keyup(function () { //이름
    let userName = $("#userName").val();
    if(userName !="") {
        $("#spanName").remove();
    } 
 });
 $("#phone").keyup(function () { //휴대폰
    let phone = $("#phone").val(); 
    if(phone !="") {
        $("#spanPhone").remove();
    } 
 });

 $("#phoneCertify").keyup(function () { //인증번호
    let phoneCertify = $("#phoneCertify").val();
    if(phoneCertify !="") {
        $("#spanCertify").remove();
    } 
 });

 $("#userPWC").keyup(function(){
    let userPW = $("#userPW").val();
    let userPWC = $("#userPWC").val();
    if(userPW == userPWC) {
        $("span#notSame").remove();
    }
 });

 //나머지 keyup 시 * 없애기 끝


//blur 시 * 띄우기 시작
$("#userID").blur(function(){ //아이디
    let userID = $("#userID").val();
    if( $("span#spanID").length == 0 ) {
     if(userID == "") {
      $("#userID").after("<span id='spanID'>*</span>");
         }
    }
});
$("#userPW").blur(function(){ //비번
    let userPW = $("#userPW").val();
    if( $("span#spanPW").length == 0 ) {
     if(userPW == "") {
      $("#userPW").after("<span id='spanPW'>*</span>");
         }
    }
});
$("#userPWC").blur(function(){ //비번확인
    let userPWC = $("#userPWC").val();
    if( $("span#spanPWC").length == 0 ) {
     if(userPWC == "") {
      $("#userPWC").after("<span id='spanPWC'>*</span>");
         }
    }
});
$("#userName").blur(function(){ //이름
    let userName = $("#userName").val();
    if( $("span#spanName").length == 0 ) {
     if(userName == "") {
      $("#userName").after("<span id='spanName'>*</span>");
         }
    }
});
$("#phone").blur(function(){ //휴대폰
    let phone = $("#phone").val();
    if( $("span#spanPhone").length == 0 ) {
     if(phone == "") {
      $("#phone").after("<span id='spanPhone'>*</span>");
         }
    }
});
$("#phoneCertify").blur(function(){ //인증번호
    let phoneCertify = $("#phoneCertify").val();
    if( $("span#spanCertify").length == 0 ) {
     if(phoneCertify == "") {
      $("#phoneCertify").after("<span id='spanCertify'>*</span>");
         }
    }
});

//blur 시 * 띄우기 끝


//생년월일 option 값넣기
var nowData = new Date();
    var thisYear = nowData.getFullYear();
    var yearData = "<option>년도</option>";
    while(thisYear>=1940) {
        yearData +="<option>" + thisYear + "</option>";
        thisYear--;
    }
    document.getElementById("year").innerHTML=yearData;

var thisMonth = 1;
    var monthData = "<option>월</option>";
    while(thisMonth<=12) {
        monthData +="<option>" + thisMonth + "</option>";
        thisMonth++;
    } 
    document.getElementById("month").innerHTML = monthData;

var thisDate = 1;
    var dayData = "<option>일</option>";
    while(thisDate<=31) {
        dayData +="<option>" + thisDate + "</option>";
        thisDate++;
    } 
    document.getElementById("day").innerHTML = dayData;


//이메일주소 유효성, 직접입력시 text박스 change

$("#userEmail03").change(function() {
    let selectValue = $(this).val();
    // alert(selectValue);
    $("#userEmail02").val(selectValue);
});


//전체동의 체크 만들기
$("#chkAll").click(function(){
    let chkV = $(this).is(":checked");
    $(".chkItem").prop("checked",chkV);
    if(chkV==true) {
        removeAll();
    }
});
$(".chkItem").click(function(){
    let chkV = $(this).is(":checked");
    $("#chkAll").prop("checked",chkV);

    let cnt = 0;
    $(".chkItem").each(function() {
        let chkSum = $(this).is(":checked");
        if(chkSum ==false) cnt++;
    });
    if(cnt>0) {
        $("#chkAll").prop("checked",false);
    }
});

function removeAll() { // 전체동의시 체크해제 
    let chk01= $("#chk01").prop("checked");
    let chk02= $("#chk02").prop("checked");
    $("#spanChk01").remove();
    $("#spanChk02").remove();
    if(chk01 ==false) {
        if($("span#spanChk01").length ==0) {
            $("#chk01_span").after(" <span id='spanChk01'> *</span>");            
        } 
    }
    if(chk02 ==false) {
        if($("span#spanChk02").length ==0) {
            $("#chk02_span").after(" <span id='spanChk02'> *</span>");            
        } 
    }
}


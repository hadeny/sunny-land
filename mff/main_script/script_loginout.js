//공백유효성검사
$("#btn").click(function(){

   let uID = $("#uID").val();   
   let uPW = $("#uPW").val();
   if(uID=="" || uPW =="") {   
        if($("span#spanID").length==0) {
                $("#inputID").append("<span id='spanID'>*</span>");
                $("#uID").focus();
        }
        if($("span#spanPW").length==0) {
                $("#inputPW").append("<span id='spanPW'>*</span>");
        }
    } else {
        document.frm01.submit();
    }
});

$("#uID").keyup(function(){
    let uID = $("#uID").val(); 
        if (uID !=="") {
            $("#spanID").remove();
        }
}); 

$("#uPW").keyup(function(){
    let uPW = $("#uPW").val(); 
        if (uPW !="") {
            $("#spanPW").remove();
        }
}); 

// $("#uID").blur(function(){
//     let uID = $("#uID").val();
//     if($("span#spanID").length==0) {
//         if (uID !="") {
//             $("#inputID").append("<span id='spanID'>*</span>");
//             $("#uID").focus();
//         }
//     }
// });
// $("#uPW").blur(function(){
//     let uPW = $("#uPW").val();
//     if($("span#spanPW").length==0) {
//         if (uPW!="") {
//             $("#inputPW").append("<span id='spanPW'>*</span>");
//             $("#uPW").focus();
//         }
//     }
// }); 

//내정보 submit
$("#mypageSub").click(function() {
    $("#frm").attr("action","../login/modify.html").submit();
});
$("#outSub").click(function() {
    $("#frm").attr("action","../login/delete.html").submit();
});
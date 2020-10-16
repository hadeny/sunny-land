$("#agreeBtn").click(function () {
    let noReason = $("#noReason").prop("checked");
    let noInter = $("#noInter").prop("checked");
    let etc = $("#etc").prop("checked");
    let etcTxt = $("#etcTxt").val();

    if(noReason ==false || noInter == false) {
        alert("탈퇴사유를 체크해주세요");
    }
});
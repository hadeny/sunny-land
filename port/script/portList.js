let slideSection = $(".list02"); //section.list02 부분만 슬라이드쇼
let goImg = slideSection.find("img"); 

let now = 0;
let imgs = 3; //이미지갯수 -1
let matchV = 0;

slideStart();

function slideStart() {
    setInterval(slideGo, 3000);
}

function slideGo() {
    now = now ==imgs ? now=0: ++now;
    $(goImg).eq(now-1).css({ //밑에서 위로 이동
        "margin-top" : "-43vh",
        "transition" : "all 1s"
    });
    $(goImg).eq(now).css({
        "margin-top" : "0vh",
        "transition" : "all 1s"
    });

    for (let i =0; i <=imgs; i++) {
        matchV++;
        if(i ==imgs) matchV =0;
        if(now==i) {
            $(goImg).eq(matchV).css({
                "margin-top":"43vh",
                "transition":"none"
            });
        }
    }

    // if(now==0) {
    //     $(goImg).eq(1).css({
    //         "margin-top" : "44vh",
    //         "transition" : "none"
    //     });
    // }

    // if(now==1) {
    //     $(goImg).eq(0).css({
    //         "margin-top" : "44vh",
    //         "transition" : "none"
    //     });
    // }

}


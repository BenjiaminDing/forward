window.onload=function () {

    const button=document.getElementById("backbtn");

    //点击事件
    button.addEventListener('click',function () {
        const timer=setInterval(function () {
            const  scrollTop=document.documentElement.scrollTop
            if (scrollTop<=0){
                clearInterval(timer);
            }else {
                window.scroll(0,scrollTop-50);
            }

        },10)
    })


}

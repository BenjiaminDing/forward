window.onload=function () {
    const button=document.getElementById("btns");
    var timer=null;
    button.onclick=function () {

        let   timer=setInterval(
            function () {
                let backtop=document.documentElement.scrollTop;

                console.log(backtop)
                // var speed=backtop/5;
                if (backtop<=0){
                    clearInterval(timer)
                }else
                {
                    document.documentElement.scrollTop-=100;

                    // window.scroll(0,backtop-100);
                }




            }
            ,30);

    }

}

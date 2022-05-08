var ie = /msie/i.test(navigator.userAgent);
$(function () {
    if (ie) {
        $("img").each(function (index, item) {
            var imgsrc = item.src;
            if (/\.svg/.test(imgsrc)) {
                item.src = imgsrc.replace(/svg/, "png");
            }
        });

        $(".banner").each(function (index, item) {
            //var bgimg = item.currentStyle.backgroundImage;
            var bgimg = item.style.backgroundImage;
            if (/\.svg/.test(bgimg)) {
                item.style.backgroundImage = bgimg.replace(/svg/, "png");
            }
        });
    }
})
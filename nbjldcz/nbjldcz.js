jQuery(".picMarquee-left").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    vis: 2,
    interTime: 50,
    trigger: "click"
});
jQuery(".slide").slide({
    mainCell: ".bd",
    autoPlay: true,
    delayTime: 1,
    trigger: "mouseover",
    interTime: 5000
});
$(function() {
    $(".link ul > li").mouseover(function() {
        $(this).addClass("active").siblings().removeClass("active");
    })
    $("#country").mouseover(function() {
        $('.link .country').css({
            "display": ""
        }).siblings('p').css({
            "display": "none"
        })
    })
    $("#city").mouseover(function() {
        $('.link .city').css({
            "display": ""
        }).siblings('p').css({
            "display": "none"
        })
    })
    $("#province").mouseover(function() {
        $('.link .province').css({
            "display": ""
        }).siblings('p').css({
            "display": "none"
        })
    })
    $("#usual").mouseover(function() {
        $('.link .usual').css({
            "display": ""
        }).siblings('p').css({
            "display": "none"
        })
    })
})
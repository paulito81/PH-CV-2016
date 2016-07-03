/**
 * Created by Paul on 16.02.2016.
 */
$(window).scroll(function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    scrollPercent = (s / (d-c)) * 100;
    var position = scrollPercent;
    $("#progressbar").attr('value', position);
});
/**
 * Created by nakamura on 15/04/07.
 */
$(function () {
  // velocity.jsを利用してアニメーション効果として座標を書き換えてインさせる。
    $('.navTxt').on({
        'mouseenter':function() {
            $(this).children('.nT').stop(true,false).each(function(i) {
                $(this).delay(30*i).velocity({'top':'0%'}, {duration:130}, {easing:'easeOutExpo'});
            });
        },
        'mouseleave':function() {
            $(this).children('.nT').stop(true,false).each(function(i) {
                $(this).delay(30*i).velocity({'top':'-100%'}, {duration:130}, {easing:'easeOutExpo'});
            });
        }
    });
});
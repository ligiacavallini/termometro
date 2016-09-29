$(window).on('resize',function() {
    var height = $(window).height(),
        half_height =  height / 2,
        weather = $('#weather'),
        amount,
        percentage;

    weather.css("height", function(){
        return height * 2;
    });
    calc_temperature();
    $(window).scroll(function(){

        calc_temperature();

        if($(window).scrollTop() < half_height){
            weather.addClass('winter');
            weather.removeClass('summer');
        }else{
            weather.addClass('summer');
            weather.removeClass('winter');
        }
    });

    function calc_temperature(){
        amount = (($(window).scrollTop() / height) * 100);
        percentage =  amount + "%";
        $('.filler').css("height", percentage);
        $('.info').css("height", percentage);
        $('.number').text(parseInt(amount));
    }
}).trigger('resize');


$(window).on('resize',function() {
    var height = $(window).height();
    var half_height =  height / 2;
    $('#weather').css("height", function(){
        return height * 2;
    });
    var amount  = (($(window).scrollTop() / height) * 100);
    var percentage =  amount + "%";
    $('.filler').css("height", amount);
    $('.info').css("height", amount);
    // scroll top = total height * 100
    //(5 / 300) x 100
    $(window).scroll(function(){
        amount = (($(window).scrollTop() / height) * 100);
        percentage =  amount + "%";
        $('.filler').css("height", percentage);
        $('.info').css("height", percentage);
        $('.number').text(parseInt(amount));

        console.log(height);

        if($(window).scrollTop() < half_height){
            $('#weather').addClass('winter');
            $('#weather').removeClass('summer');
        }else{
            $('#weather').addClass('summer');
            $('#weather').removeClass('winter');
        }
    });
}).trigger('resize');


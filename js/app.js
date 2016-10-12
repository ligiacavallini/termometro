$(window).on('resize',function() {
    var height = $(window).height(),
        weather = $('#weather'),
        fahrenheit,
        celcius,
        percentage,
        total_height_calc = height * 3;;

    weather.css("height", function(){
        return height * 4;
    });
    var winter = weather.height() / 5, //50
      fall = weather.height() / 3, //66
      spring = weather.height() / 1.8, //100
      summer = weather.height() / 1.5; //200
      
      /*alert("total height "+weather.height());
      alert("winter "+winter);
      alert("fall "+fall);
      alert("spring "+spring);
      alert("summer "+summer);*/
    calc_temperature();
    $(window).scroll(function(){

        calc_temperature();

        if($(window).scrollTop() <= winter){
          change_season('winter');
        }else if($(window).scrollTop() <= fall){
          change_season('fall');
        }else if($(window).scrollTop() <= spring){
          change_season('spring');
        }else{
          change_season('summer');
        }
    });

    function change_season(season){
      var seasons = ['winter', 'fall', 'spring', 'summer'];
      seasons.forEach(function(k){
        if(season == k){
         	$("#weather").addClass(k);
        }else{
        	$("#weather").removeClass(k);
        }
      });
    }
    function calc_temperature(){
        fahrenheit = (($(window).scrollTop() / total_height_calc) * 100);
        celsius = (fahrenheit - 32) * 0.5556;
        percentage =  fahrenheit + "%";
        $('.filler').css("height", percentage);
        $('.info').css("height", percentage);
        $('.fahrenheit .number').text(parseInt(fahrenheit));
        $('.celsius .number').text(parseInt(celsius));
    }
}).trigger('resize');

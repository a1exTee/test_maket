
$(document).ready(function(){
    // Инициализирует карусель
    $(".start-slide").click(function(){
        $("#myCarousel2").carousel('cycle');
    });
    // Останавливает процесс автоматической смены слайдов карусели
    $(".pause-slide").click(function(){
        $("#myCarousel2").carousel('pause');
    });
    // Осуществляет переход на 0 слайд карусели
    $(".slide-one").click(function(){
        $("#myCarousel2").carousel(0);
    });
    // Осуществляет переход на 1 слайд карусели
    $(".slide-two").click(function(){
        $("#myCarousel2").carousel(1);
    });
    // Осуществляет переход на 2 слайд карусели
    $(".slide-three").click(function(){
        $("#myCarousel2").carousel(2);
    });

    //video


    //paralax
    $objWindow = $(window);
    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // Назначаем объект
        $(window).scroll(function() {
            var yPos = -(($objWindow.scrollTop() - $bgobj.offset().top)/ $bgobj.data('speed'));
            // Собираем значение координат фона вместе
            var coords = '50% '+ yPos + 'px';
            // Смещаем фон
            $bgobj.css({ backgroundPosition: coords });
        });

    });
	
	//youtobe
	$(function(){
		$("#fon_video").YTPlayer();
	});
	


});





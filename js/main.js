(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : false,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

//Validacion mensaje contacto
function enviarCorreo(){
    $(".alerta_correo").css('display', 'none');
    $(".alerta_mensaje").css('display','none');
    $(".alerta_correcto").css('display','none');
    $(".alerta_incorrecto").css('display','none');

    var nombre = $("#nombre").val();
    var correo = $("#email").val();
    var asunto = $("#asunto").val();
    var mensaje = $("#mensaje").val();
    var valido = 1;
    var validacion_correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

    if(!validacion_correo.test(correo)){
        $(".alerta_correo").css('display', 'block');
        valido = 0;
    }

    if(mensaje.length <= 10 ){
        $(".alerta_mensaje").css('display','block')
        valido = 0;
    }
    
    if(valido==1){
        var datos = 'nombre =' + nombre + '&email =' + correo + '&asunto ='+ asunto + '&mensaje =' + mensaje ;
        $.ajax({
			type: "POST",
			url: "enviar.php",
			data: datos,
			success: function(res) {
                if(parseInt(res) == 1){
                    $('.alerta_correcto').css('display','block');
                }else{
                    $('.alerta_incorrecto').css('display','block');
                }
			},
			error: function(res) {
                $('.alerta_incorrecto').css('display','block');
			}
		});
    }
}


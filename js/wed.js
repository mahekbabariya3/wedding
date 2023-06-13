$(document).ready(function(){
    $('.moblie_manu').hide();
    $('.moblie_sub_manu').hide();
    $('.icon_bars').click(function(){
        $('.moblie_manu').slideToggle();

    })

    $('.moblie_manu > li > a').click(function(){
        $(this).next('.moblie_sub_manu').slideToggle();
        // <i class="fa-solid fa-minus"></i>
        // <i class="bi bi-dash"></i>   
    })

    $('.minus').click(function(){
        $('.moblie_sub_manu').slideToggl();
        $('.minus').toggleClass('plus')
    })


            $('#baner_img').owlCarousel({
                 
                responsive:{
                    0:{
                        items:1,
                        dots:false,
                        nav:false
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
            
            $('#slider_gift').owlCarousel({
                nav:false,
                dots:false,
                loop:true,
                autoplay:true,
                autoplayTimeout:1600,
                margin:90,
                responsive:{
                    0:{
                        items:1,
                        dots:false
                    },
                    600:{
                        items:1
               
                    },
                    1000:{
                        items:5
                    }
                }
            });

            $('#gallery_slider').owlCarousel({
                nav:false,
                dots:false,
                loop:true,
                autoplay:true,
                
                responsive:{
                    0:{
                        items:1,
                        dots:false
                    },
                    600:{
                        items:1
               
                    },
                    1000:{
                        items:8
                    }
                }
            })

        setTimeout(function(){
            $('.loder').fadeOut();
        },1000)

        window.onload = ()=>{
            // $(selector).countMe(delay,speed)
            $("#num1").countMe(40,65);
            $("#num2").countMe(30, 30);
            $("#num3").countMe(40, 50);
            $("#num4").countMe(100,200);
         }
    
});
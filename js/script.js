$(".banner-slider").slick({
    arrows:false,
     
    dots:true,
    autoplay:true,
    autoplaySpeed: 4000,
     
     
     
     
})

$('#colorful').colorfulTab();

jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});

$(".company_slider").slick({
	slidesToShow:5,
	slidesToScroll: 2,
	prevArrow:'<i class="fas fa-chevron-left prev"></i>',
	nextArrow:'<i class="fas fa-chevron-right next"></i>',
  autoplay:true,
	 
  responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
         
      }
    },




    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
         
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})

$(document).ready(function(){
    $('.venobox').venobox(); 
});

$('.team-slider').slick({
   slidesToShow:4,
   arrows:false,
   autoplay:true,
   
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
         
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})


$('.testi-slider').slick({
  slidesToShow:2,
  arrows:false,
  
  responsive: [
    
    
   {
     breakpoint: 576,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]

});

 



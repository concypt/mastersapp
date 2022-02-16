$(function() {
    console.log( "ready!" );
  	//script for showing sections 
    $("#visibility-data .sts-item .w-embed").each(function(){
    	let sectionToShow = $(this).text();
      sectionToShow = '#' + sectionToShow;
      $(sectionToShow).removeClass('hidden');
      console.log(sectionToShow);
    });
    //script for showing sections - end
    
    //play on low power mode
    var iframe = document.getElementById('hero-video');
  	var player = new Vimeo.Player(iframe);
    
 		$('body').on('click touchstart', function () {
    	player.getPaused().then(function(paused) {
          if(paused){
            player.play();
            //alert('play it!!');
          }
				});
    });
    	setTimeout(function(){
      player.play();
      	player.getPaused().then(function(paused) {
          if(paused){
            player.play();
            //alert('play it!!');
          }
				});
      }, 5000);




    var swiper = new Swiper(".myswiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        mousewheel: {
          forceToAxis: true,
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev"
        },
        breakpoints: {
          // when window width is >= 480px
          480: {
            slidesPerView: 'auto',
            centeredSlides: false,
            loop: false,


          },
        }
      });
      
 var swiperNodes = "";
 var pagination = '<div class=swiper-pagination></div>';
 var swiperNodes = swiperNodes.concat(pagination);
 /* loop throw all swipers on the page */
  $('.swiper-container').each(function( index ) {
    $( this ).append(swiperNodes);
  });


  var mySwiper = new Swiper ('.swiper-container', {
    // Enable lazy loading
    lazy: false,
    slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
    },
    keyboard: {
      enabled: true,
    },
  })
});
// Account Creation using email Form submission
Webflow.push(function() {
  $('.account-form').submit(function(e) {
  	e.preventDefault();
    redirectURL ='https://web.mastersapp.com/?email=' + encodeURIComponent($('.input-field').val());;
    location.href = redirectURL; 
  });
});
// Account Creation using email Form submission

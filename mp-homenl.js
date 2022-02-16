//function for getting all the querystrings 
function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
  
}
//end of function for getting all the querystrings

$(function() {
    //Read and Add Querystring parameters to start now buttons 
  const queryString = getAllUrlParams();
  let newParameters = (queryString.utm_source ? "utm_source=" + queryString.utm_source : "");
  newParameters += (queryString.utm_medium ? "&utm_medium=" + queryString.utm_medium : "");
  newParameters += (queryString.utm_campaign ? "&utm_campaign=" + queryString.utm_campaign : "");
  newParameters += (queryString.utm_content ? "&utm_content=" + queryString.utm_content : "");
  newParameters += (queryString.utm_term ? "&utm_term=" + queryString.utm_term : "");
  newParameters += (queryString.fbclid ? "&fbclid=" + queryString.fbclid : "");
  newParameters += (queryString.gclid ? "&gclid=" + queryString.gclid : "");



  console.log(newParameters);
  $('.button').each(function() {
    let obj = $(this);
    let newHref;
    if(newParameters){
      newHref = obj.attr('href')+'?'+newParameters;
    }
    obj.attr('href', newHref);
  });
  //End of Read and Add Querystring parameters to start now buttons 

  	//script for showing sections 
    $("#visibility-data .sts-item .w-embed").each(function(){
    	let sectionToShow = $(this).text();
      sectionToShow = '#' + sectionToShow;
      $(sectionToShow).removeClass('hidden');
      //console.log(sectionToShow);
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
    redirectURL = $('.button').attr('href')+'&email=' + encodeURIComponent($('.input-field').val());
    location.href = redirectURL; 
  });
});
// Account Creation using email Form submission

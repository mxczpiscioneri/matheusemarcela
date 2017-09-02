// Show maps
function initMap() {
  // Set address
  var latLng1 = {
    lat: -21.497148013269076,
    lng: -48.038578033447266
  };
  var latLng2 = {
    lat: -21.368565,
    lng: -48.058963
  };

  // Create maps
  var map1 = new google.maps.Map(document.getElementById('map1'), {
    zoom: 15,
    center: latLng1,
    styles: [{ "featureType": "landscape", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "stylers": [{ "hue": "#00aaff" }, { "saturation": -100 }, { "gamma": 2.15 }, { "lightness": 12 }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "visibility": "on" }, { "lightness": 24 }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 57 }] }]
  });
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 15,
    center: latLng2,
    styles: [{ "featureType": "landscape", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "stylers": [{ "hue": "#00aaff" }, { "saturation": -100 }, { "gamma": 2.15 }, { "lightness": 12 }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "visibility": "on" }, { "lightness": 24 }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 57 }] }]
  });

  // Add marker points
  var marker1 = new google.maps.Marker({
    position: latLng1,
    map1: map1,
    animation: google.maps.Animation.DROP,
    icon: 'http://matheusemarcela.com/img/marker-map.png',
    title: 'Igreja São Pedro e São Martinho'
  });
  var marker2 = new google.maps.Marker({
    position: latLng2,
    map2: map2,
    animation: google.maps.Animation.DROP,
    icon: 'http://matheusemarcela.com/img/marker-map.png',
    title: 'Salão Benvenuto'
  });

  // To add the marker to the map, call setMap();
  marker1.setMap(map1);
  marker2.setMap(map2);
}

$(window).on('load', function() {
  $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDOaupgIaq-07-B1Ld27EOFo_20fvILxOk&callback=initMap");

  // Remove loader
  $("#load").fadeOut();
  $("body").css("overflow-y", "auto");

  // Menu mobile
  $('#menu').slicknav();

  // Counter
  $('#counter-box').countdown({
    date: '10/28/2017 21:00:00',
    offset: -4,
    day: 'dia',
    days: 'dias',
    hour: 'hora',
    hours: 'horas',
    minute: 'minuto',
    minutes: 'minutos',
    second: 'segundo',
    seconds: 'segundos'
  });

  // Equal height couple
  if ($(window).width() > 767) {
    $('.grooms').matchHeight();
  }
  $('.events .item').matchHeight();

  // Gallery modal
  $('#gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    removalDelay: 300,
    gallery: {
      enabled: true
    }
  });

  // Presents modal
  $('#open-popup').magnificPopup({
    type: 'inline',
    preloader: false
  });

  // Carousel people
  $('.people .owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    navText: ["&#8249;", "&#8250;"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      543: {
        items: 2
      },
      767: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  // Carousel gallery
  $('.gallery .owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      543: {
        items: 3
      },
      767: {
        items: 4
      },
      991: {
        items: 5
      },
      1200: {
        items: 6
      },
      1366: {
        items: 7
      },
      1500: {
        items: 8
      }
    }
  });

  // Carousel providers
  $('.providers .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoWidth: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 5
      },
      543: {
        items: 6
      },
      767: {
        items: 7
      },
      991: {
        items: 8
      },
      1200: {
        items: 9
      },
      1366: {
        items: 10
      },
      1500: {
        items: 12
      }
    }
  });

  // Submit form contact
  $('#contact').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: 'function/contact.php',
      data: $(this).serialize(),
      type: 'POST',
      success: function(data) {
        console.log(data);
        swal("Obrigado", "Sua mensagem foi enviada com sucesso!", "success");
      },
      error: function(data) {
        swal("Oops...", "Ocorreu um problema ao enviar sua mensagem. Tente novamente! :(", "error");
      }
    });
  });

  // Close MFP on click back button
  bajb_backdetect.OnBack = function() {
    mfp = $.magnificPopup.instance;
    if (mfp.isOpen) {
      mfp.close();
      e.preventDefault();
    }
  };

  // Set height
  $('.couple').height($('.couple').height());

  // Lazy Load
  $("img").unveil(200);

  // Movie elements for responsive
  if ($(window).width() <= 543) {
    $("#history-photo1").detach().appendTo('#history-text1');
    $("#history-photo3").detach().appendTo('#history-text3');
    $(".map2").detach().appendTo('.photo2');
  }
});

// Scroll animate
$(document).on('click', '.anchor', function(e) {
  e.preventDefault();
  var id = $(this).attr('href');
  var targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset // - 100
  }, 600);
});

// Back to top
$(document).on('click', '#back-to-top', function(e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 600);
});

// Show button back to top
$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 800) {
    $('#back-to-top').addClass('show').removeClass('hidden');
  } else {
    $('#back-to-top').addClass('hidden').removeClass('show');
  }
});

$(window).resize(function() {
  // Equal height couple
  if ($(window).width() > 767) {
    $('.grooms').matchHeight();
  }

  // Set height
  $('.couple').css('height', 'auto');
  $('.couple').height($('.couple').height());
});

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
    zoom: 16,
    center: latLng1
  });
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 16,
    center: latLng2
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

  // Menu mobile
  $('#menu').slicknav();

  // Counter
  $('#counter-box').countdown({
    date: '10/28/2017 20:30:00',
    offset: -4,
    day: 'Dia',
    days: 'Dias',
    hour: 'Hora',
    hours: 'Horas',
    minute: 'Minuto',
    minutes: 'Minutos',
    second: 'Segundo',
    seconds: 'Segundos'
  });

  // Gallery modal
  $('#gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    removalDelay: 300,
    gallery: {
      enabled: true
    }
  });

  // Carousel people
  $('.people .owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayHoverPause: true,
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

});

// Scroll animate
$(document).on('click', 'a[href^="#"]', function(e) {
  e.preventDefault();
  var id = $(this).attr('href');
  var targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset // - 100
  }, 600);
});

// Back to top
$('#back-to-top').on('click', function(e) {
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

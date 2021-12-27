
//Jquery-->
src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
// Materialize JavaScript -->
src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
//menu Sidenav
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });



//Dropdown Structure -->

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown({
    coverTrigger:false, hover: false
  });

// Parallax

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.slider').slider({
      height:500
    });
  });

  //script do versículo do dia 
  jQuery(document).ready(function($){
      $.ajax({
          url:'https://dailyverses.net/get/verse?language=arc&isdirect=1&url=' + window.location.hostname,
          dataType: 'JSONP',
          success:function(json){
              $(".dailyVersesWrapper").html(json.html);
          }
      });
  });
 
 

//Slide up Function
$(document).mouseup(function (e) {
    var faq = ["#faq-question-id-1", "#faq-question-id-2", "#faq-question-id-3", "#faq-question-id-4", "#faq-question-id-5", "#faq-question-id-6", "#faq-question-id-7", "#faq-question-id-8", "#faq-question-id-9", "#faq-question-id-10"];
    
    for(var i = 0; i< faq.length; i++){
        if (!$(faq[i]).is(e.target) && $(faq[i]).has(e.target).length === 0) {
            $(faq[i]).next('div').hide("slow");
            $(faq[i]).removeClass('active-bg');
            $(faq[i]).children('p').children('i').removeClass("changeIcon");
        }
    }
});

//Slide down Function
function slideFunction(x) {
    $(x).next('div').slideToggle("slow");
    $(x).toggleClass("active-bg");
    $(x).children('p').children('i').toggleClass("changeIcon");
}
//menu animation function
function barIconFunction(x) {
    x.classList.toggle("change");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function () {

    //loader script
    $(window).load(function () {
        fixedNavFunction();
        $('.loader-overlay').fadeOut("slow");
    });

    //sticky navbar
    window.onscroll = function () { fixedNavFunction() };

    var navbar = document.getElementById("navbar");
    var elements = document.getElementsByClassName('bar-icon');

 

    function fixedNavFunction() {
        if (window.pageYOffset >= 300) {
            navbar.classList.add("nav-change-bg")
            document.getElementById("banner-logo").src = "/img/banner-logo-2.png";
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = "#111";
            }
	    $('.slide-up-button').addClass('scrolled');
        } else {
            navbar.classList.remove("nav-change-bg");
            document.getElementById("banner-logo").src = "/img/banner-logo-1.png";
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = "#fff";
            }
	    $('.slide-up-button').removeClass('scrolled');
        }
    }

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({scrollTop: $(hash).offset().top}, 500, function () {
                window.location.hash = hash + 80;
            });
        } 
    });
    
    $('.demo').slick({
        dots: true,
        dotsClass: 'slick-dots',
        slidesToShow: 4,
        slidesToScroll: 1,
        touchMove: false,
        centerPadding: '20px',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

     //execute animation on page load
    $(".slideAnimMainText").each(function () { $(this).addClass("slideUp"); });
    $(".slideAnimLeft").each(function () { $(this).addClass("slideLeft"); });
    $(".slideAnimRight").each(function () { $(this).addClass("slideRight"); });
    $(".slideAnimUp").each(function () { $(this).addClass("slideUp"); });
    $(".popAnim").each(function (index) {  $(this).addClass('pop-' + (index + 1));  });
   
   //Slide Animation Script
   $(window).scroll(function() {
     var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();
       $(".slideAnimMainText").each(function () {
           var top_of_element = $(this).offset().top;
           var bottom_of_element = $(this).offset().top + $(this).outerHeight();
		if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
		   $(this).addClass("slideUp");
		} else {
		   $(this).removeClass("slideUp");
		}     
       });

      $(".slideAnimLeft").each(function(){
           var top_of_element = $(this).offset().top;
           var bottom_of_element = $(this).offset().top + $(this).outerHeight();
	       if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
		     $(this).addClass("slideLeft");
		   }else{
		     $(this).removeClass("slideLeft");
		   }
       });
       $(".slideAnimRight").each(function(){
           var top_of_element = $(this).offset().top;
           var bottom_of_element = $(this).offset().top + $(this).outerHeight();
		   if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
		     $(this).addClass("slideRight");
              //  $(this).show("slide", { direction: "left" }, 1000);
		   }else{
		     $(this).removeClass("slideRight");
	       }
       });
       $(".slideAnimUp").each(function(){
         var top_of_element = $(this).offset().top;
           var bottom_of_element = $(this).offset().top + $(this).outerHeight();
       	   if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
	         $(this).addClass("slideUp");
	       }else{
	         $(this).removeClass("slideUp");
	       }
       });
     $(".popAnim").each(function(index){
       var top_of_element = $(this).offset().top;
       var bottom_of_element = $(this).offset().top + $(this).outerHeight();
       if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
         $(this).addClass('pop-' + (index + 1));
       } else {
         $(this).removeClass('pop-' + (index + 1));
       }
     });
  });
});

//Modal Script
function openModal() {
  document.getElementById("sliderModal").style.display = "block";
}

function closeModal() {
  document.getElementById("sliderModal").style.display = "none";
}

var slideIndex = 1;
 showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("modal-slides");
  var dots = document.getElementsByClassName("show-slide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-slide";
  captionText.innerHTML = dots[slideIndex-1].alt;
}







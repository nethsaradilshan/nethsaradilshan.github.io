(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.on( "load", function() {
	   $(".preloader").fadeOut(600);
	   $('#folio-bg').hide();
	 
	   //changeAboutBG();
    });
	
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:'', closeOnClick:true});
	
	/* Sticky header */
	$window.scroll(function(){
    	if ($window.scrollTop() > 200) {
			$('.navbar').addClass('sticky-header');
		} else {
			$('.navbar').removeClass('sticky-header');
		}
		
		showGototop();
	});
	
	/* Top Menu */
	$(document).on('click','.navbar-nav li a, #responsive-menu ul li a',function(){
		if($(this).hasClass("has-popup")) return false;
		var id = $(this).attr('href');
		if($(id).length) {
			var h = parseFloat($(id).offset().top);
			$('body,html').stop().animate({
				scrollTop: h - 74
			}, 2500);
			return false;
		}
	});
	
	/* Brand slider */
	var swiper = new Swiper('.brand-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 4,
		spaceBetween: 30,
		breakpoints: {
			991: {
				slidesPerView: 2
			}
		}
    });

	/* Experience slider */
	var swiper = new Swiper('.experience-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.experience-pagination',
			type: 'bullets',
			clickable: true,
		},
    });
	
	/* Education slider */
	var swiper = new Swiper('.education-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.education-pagination',
			type: 'bullets',
			clickable: true,
		},
    });
	
	/* Testimonial slider */
	var swiper = new Swiper('.testimonial-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		centeredSlides: true,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true,
		}
    });
	
	/* Partner slider */
	var swiper = new Swiper('.partner-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 5,
		spaceBetween: 30,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 1
			},
			
			991: {
				slidesPerView: 3
			}
		}
    });
	
	/*Portfolio (filtering) */
	/* Init Isotope */
	var $portfolio = $(".portfolio-boxes").isotope({
		itemSelector: ".portfolio-box",
		layoutMode: "masonry"
	});

	/* Set initial filtering */
	$window.load(function(){
		$portfolio.isotope({ filter: "*" });
	});

	/* Filter items on click */
	var $portfolionav=$(".portfolio-nav li a");
		$portfolionav.on('click', function (e) { 
	
		var filterValue = $(this).attr('data-filter');
		$portfolio.isotope({
			filter: filterValue
		}); 
		
		$portfolionav.removeClass("active-portfolio"); 
		$(this).addClass("active-portfolio");
		e.preventDefault();
	}); 
	
	/* Portfolio magnific popup */
	$('.has-popup').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'mfp-fade'
	});
	
	/* Init Counter */
    $('.counter').counterUp({ delay: 10, time: 1000 });
	
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 



	//
	// my screipts 
	//

	/* hide banner text when scroll start*/
	$(document).ready(function () {
		hideTitle();
		$(window).on("scroll", function () {
			hideTitle();
		});
	  });
	  function hideTitle(){
		// Show & Hide Text On-Scroll
		if ($(window).scrollTop() > 500) {
		   $(".heading").fadeOut(1000);
		 } else {
		   $(".heading").fadeIn(1000);
		 }
	 }
	/* hide banner text when scroll end*/

	/*auto line when scrolling start*/
	// let ticking = false;
	// let last_known_scroll_position = 0;
	// let updatePath = false;
	
	// const element = document.querySelector('svg');
	// const path = element.querySelector('path')
	// let totalLength = 0;
	
	// initPath(path)
	
	// function initPath(path){
	//    totalLength = path.getTotalLength();
	//    path.style.strokeDasharray = `${totalLength}`;
	//    path.style.strokeDashoffset = totalLength;
	// }
	
	
	// function handleEntries(entries) {
	//   console.log(entries)
	//    entries.forEach(entry => {
	// 	console.log(entry)
	// 	if(entry.isIntersecting) {
	// 	  console.log(entry.target)
	// 	}
		
	//   })
	// }
	
	// let observer = new IntersectionObserver((entries, observer) => { 
	// 	entries.forEach(entry => {
	// 	if(entry.isIntersecting){
	// 	  console.log(entry);
	// 	  updatePath = true;
	// 	} else {
	// 	  updatePath = false;
	// 	}
	// 	});
	//   }, {rootMargin: "0px 0px 0px 0px"});
	
	
	//   observer.observe(element);
	
	// function doSomething(scroll_pos) {
	//   if(!updatePath) {
	// 	return;
	//   }
	//   window.requestAnimationFrame(()=>{
	// 	const center = window.innerHeight / 2;
	// 	const boundaries = path.getBoundingClientRect();
	// 	const top = boundaries.top;
	// 	const height = boundaries.height;
	// 	const percentage = (center - top ) / height;
	// 	const drawLength = percentage > 0 ? totalLength * percentage : 0;
	// 	path.style.strokeDashoffset = drawLength < totalLength ? totalLength - drawLength : 0;
	 
	//   })
	
	// }
	
	// window.addEventListener('scroll', function(e) {
	//   last_known_scroll_position = window.scrollY;
	//   if (!ticking) {
	// 	window.requestAnimationFrame(function() {
	// 	  doSomething(last_known_scroll_position);
	// 	  ticking = false;
	// 	});
	
	// 	ticking = true;
	//   }
	// });
	/*auto line when scrolling end*/


	$.fn.isInViewport = function() {
		if(!this.length){
			return false;
		}
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();
	
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
	
		return elementBottom > viewportTop && elementTop < viewportBottom;
	};


//page top background effect	

//let section = document.querySelector('section');
let text = document.querySelector('.text-vertiical-line');
let innerText = document.querySelector('.innerText-vertical-line');
let backgroundColor = document.querySelector('.section-vertical-line');

window.addEventListener('scroll', function() {	
	$('#folio-bg').hide();
	 
	
})

//fortpolio title show and hide
function viewFortpolioTitle(){	
	if(($('.horizontal').isInViewport()) || ($('.thisISPortfolio').isInViewport()) || ($('#wordlogos').isInViewport()))
	$('#folio-bg').show();	
}

//side social media 
function sideSocialMedia(){	
	if($('.banner').isInViewport()){
		$('.float-sm').show();
	}else{
		$('.float-sm').hide();
	}
}



// change social media background
$( document ).ready(function() {
    $('#facebook').hover(
		function() {
			$('.main-footer').addClass('facebook-bg');
			$("#socialMediaType").text("facebook");
		},
		function() {
			$('.main-footer').removeClass('facebook-bg');
		},
	);
    $('#twitter').hover(
		function() {
			$('.main-footer').addClass('twitter-bg');
			$("#socialMediaType").text("Twitter");
		},
		function() {
			$('.main-footer').removeClass('twitter-bg');
		},
	);
    $('#linkedin').hover(
		function() {
			$('.main-footer').addClass('linkedin-bg');
			$("#socialMediaType").text("Linkedin");
		},
		function() {
			$('.main-footer').removeClass('linkedin-bg');
		},
	);
    $('#insta').hover(
		function() {
			$('.main-footer').addClass('insta-bg');
			$("#socialMediaType").text("Intagram");
		},
		function() {
			$('.main-footer').removeClass('insta-bg');
		},
	);
    $('#behance').hover(
		function() {
			$('.main-footer').addClass('behance-bg');
			$("#socialMediaType").text("Behance");
		},
		function() {
			$('.main-footer').removeClass('behance-bg');
		},
	);
    $('#youtube').hover(
		function() {
			$('.main-footer').addClass('youtube-bg');
			$("#socialMediaType").text("YouTube");
		},
		function() {
			$('.main-footer').removeClass('youtube-bg');
		},
	);
    $('#whatsapp').hover(
		function() {
			$('.main-footer').addClass('whatsapp-bg');
			$("#socialMediaType").text("Whatsapp");
		},
		function() {
			$('.main-footer').removeClass('whatsapp-bg');
		},
	);
    $('#github').hover(
		function() {
			$('.main-footer').addClass('github-bg');
			$("#socialMediaType").text("Github");
		},
		function() {
			$('.main-footer').removeClass('github-bg');
		},
	);
});


//quote animation 
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let interval = null;
let x = 0;

function showDiv() {
	if (x < 2) {
		x = x + 1;
		// animation 
		let iteration = 0;

		clearInterval(interval);
		interval = setInterval(() => {
			document.querySelector('.qoute-animation').innerText = document.querySelector('.qoute-animation').innerText
			.split('')
			.map((letter, index) => {
				if (index < iteration) {
					return document.querySelector('.qoute-animation').dataset.value[index];
				}
				return letters[Math.floor(Math.random() * 26)];
			})
			.join('');
			if (iteration >= document.querySelector('.qoute-animation').dataset.value.length) {
				clearInterval(interval);
			}
			iteration += 1 / 3;
		}, 20);
	}
}
window.onload = showDiv;

//skills
function skillsLoader() {
	if($('#skill-bar-wrapper').isInViewport()){
		jQuery('.skillbar-container').each(function(){
			jQuery(this).find('.skills').animate({
				width:jQuery(this).attr('data-percent')
			}, 2000); 
		});
	}
	
}

//change nav bg color 
$(document).on('click','.slicknav_btn',function(){
		if ( $('#main-navbar').find('.slicknav_collapsed').length) {
			$('.navbar-expand-md').removeClass('navBackground');
		} else {
			$('.navbar-expand-md').addClass('navBackground');
		}	
});

//see magic line
function magicLine(){
	if((window.innerWidth > 755)){
		$('.footer-magic-line').show();
		
	}
	else{
		$('.footer-magic-line').hide();
	}
}

function showGototop(){
	if($('.main-footer').isInViewport()){
		$('.backtotop').show();
	}
	else{
		$('.backtotop').hide();
	}
}

window.onload = function() {
	sideSocialMedia();
	skillsLoader(); 
	viewFortpolioTitle();
	magicLine();
	showGototop();
  };
  window.onscroll = function() {
	if (window.innerWidth > 755) {
		sideSocialMedia();
		skillsLoader(); 
		viewFortpolioTitle();
		magicLine();
		showGototop();
	  }
  };



})(jQuery);


// <script>
//   $(function() {
//     $(".rslides").responsiveSlides();
//   });
// </script>
// $(".rslides").responsiveSlides({
// 	auto:true,
//     speed: 563,
//     timeout: 4000;
// });


// $(function() {
// 	//configuration
// 	var width= 100%;
// 	var animationSpeed =1000;
// 	var pause = 3000;
// 	var currentSlide =1;

// 	var $slider + $('#slider');
// 	var $slideContainer= $slider.find('.slides');
// 	var $slides = $slideContainer.find('.slide');

// 	var interval;

// 	function startSlider(){
// 		interval = setInterval(function (){
// 		$slideContainer.animate({'margin-left':'-=' +width}, animationSpeed,function(){
// 			currentSlide++;
// 			if(currentSlide===$slides.length){
// 				currentSlide=1;
// 				$slideContainer.css('margin-left',0);
// 			}
// 		});
// 		}, pause); 
// 	}
// 	function stopSlider(){
// 		clearInterval(interval);
// 	}	
// 	$slider.on('mouseenter', stopSlider).on('mouseleave',startSlider);
// 	// startSlider();
// });


$(function() {
	//configuration
	var height= 650;
	var animationSpeed =1000;
	var pause = 2000;
	var currentSlide =1;


	var $gallery = $('#gallery');
	var $slideContainer= $gallery.find('.slides');
	var $slides = $slideContainer.find('.slide');

	var interval;

	function startSlider(){
		interval = setInterval(function (){
		$slideContainer.animate({'margin-top':'-=' +height}, animationSpeed,function(){
			currentSlide++;
			if(currentSlide===$slides.length){
				currentSlide=1;
				$slideContainer.css('margin-top',0);
			}
		});
		}, pause);
	}
	function stopSlider(){
		clearInterval(interval);
	}	
	$gallery.on('mouseenter', stopSlider).on('mouseleave',startSlider);
	startSlider();
});




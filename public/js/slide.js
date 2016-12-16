// $(document).ready(function() {
//     $('#gallery').fullpage();
// });


$(function() {
	//configuration
	var height= 550;
	var animationSpeed =3000;
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




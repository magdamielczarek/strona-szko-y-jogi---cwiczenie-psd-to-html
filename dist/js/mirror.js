$(document).ready(function(){

/*-------------------------*
	   SMOOTH SCROLL
---------------------------*/

const $scroll_link = $('.smooth-scroll');
$scroll_link.click(function(event){
	event.preventDefault();
	$('body,html').animate({
		scrollTop: $(this.hash).offset().top
	},1000)
});


/*-------------------------*
	TESTIMONIALS SLIDER
---------------------------*/

/*


const $photo_slider = $('.photo-slider-container');
const $photo_slides = $('.photo-slide');
const $text_slider = $('.text-slider-container');
const $text_slides = $('.text-slide');
const $button_left = $('.fa fa-angle-left');
const $button_right = $('.fa fa-angle-right');
let current_index = 0;
let timeout;

function move(new_index) {
	advance();

	if(current_index === new_index){
		return;
	}
	else {
		$slides.eq(current_index).fadeOut();
		$slides.eq(new_index).fadeIn();
	}
	
	current_index = new_index;
};

function advance() {
	clearTimeout(timeout);
	timeout = setTimeout(function(){
		if(current_index<($slides.length-1)){
			move(current_index+1);
		} else {
			move(0)
		}
	}, 5000);
}

$.each($buttons, function(index){
	if(index==current_index){
		$buttons.eq(index).addClass('show-button');
	}
	$(this).on('click', function(){
		move(index)});
	});	

advance(); 

*/

}); // end of document ready function


	

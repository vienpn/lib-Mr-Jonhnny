$(function(){
	 new WOW().init();
  $('.loop').owlCarousel({
			center: true,
			animateOut: 'slideOutDown',
			animateIn: 'flipInX',
			items:3,
			dots:false,
			margin:10,
			stopOnHover:false,
			autoplay:true,
			autoplayTimeout:3000,
			slideSpeed : 2000,
			mouseDrag:false,
			touchDrag:false,
			loop:true,
  });
  $('.loop').on('translate.owl.carousel', function(e){
      idx = e.item.index;
      $('.owl-item.custom-center').removeClass('custom-center');
			$('.owl-item').find('.icon-fly').removeClass('fadeInUp');
      $('.owl-item.medium').removeClass('medium');
      $('.owl-item').eq(idx).addClass('custom-center');
			$('.owl-item').eq(idx).find('.icon-fly').addClass('fadeInUp');
      $('.owl-item').eq(idx-1).addClass('medium');
      $('.owl-item').eq(idx+1).addClass('medium');
  });
});

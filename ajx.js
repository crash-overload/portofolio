$(document).ready(function() {
	placeImages();
  
	$("#contact-button").on('click',function (e) {
	    e.preventDefault();

		autoScroll("#contact-button","#contact");
	});
	$("#about-button").on('click',function (e) {
	    e.preventDefault();

	    autoScroll("#about-button","#about");
	});
	$("#portofolio-button").on('click',function (e) {
	    e.preventDefault();

	    autoScroll("#portofolio-button","#portofolio");
	});
});

function autoScroll(butt,place) {
	$('html, body').stop().animate({
	    'scrollTop':$(place).offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = $(place);
	});
}

function placeImages() {
	var images = $(".images");
    var img_length = images.length;
  
    if(img_length <= 4) {
      var col = 12/img_length;
      images.each(function(i,obj) {
        $(obj).addClass("col-xs-12");
        $(obj).addClass("col-sm-"+col);
        $(obj).addClass("col-md-"+col);
        $(obj).addClass("col-lg-"+col);
      });
     }
     else {
      images.each(function(i,obj) {
        $(obj).addClass("col-md-6");
        $(obj).addClass("col-xs-12");
        $(obj).addClass("col-sm-4");
        $(obj).addClass("col-lg-4");
      }); 
    }
}
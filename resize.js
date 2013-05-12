$(document).ready(function () {
    updateContainer();
   
});

function updateContainer() {
  var phi = (1 + Math.sqrt(5))/2;

  $(window).resize(function() {
    var goldenWidth  = windowWidth  = $(this).width(),
        goldenHeight = windowHeight = $(this).height(),
		h1Size = $(this).width() / 40 ;

$("h1").css({
  fontSize: h1Size
});
$("h2").css({
  fontSize: h1Size * 0.62
});

$("p").css({
  fontSize: h1Size * 0.62 * 0.62
});

 $("#wayfinder_logo_dog").css({
	height: goldenWidth * 0.15 * 0.6, width: goldenWidth * 0.15
}); 

    if (windowWidth/windowHeight > phi) {
      // panoramic viewport - use full height
      goldenWidth  = windowHeight * phi;
    } else {
      // portrait viewport  - use full width
      goldenHeight = windowWidth / phi;
    };

    $("#container > div.cycle")
      .width(goldenWidth)
      .height(goldenHeight);
  }).resize();
 

	
  
};


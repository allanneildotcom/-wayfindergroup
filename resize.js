$(document).ready(function () {
    updateContainer();
   
});

function updateContainer() {
  var phi = (1 + Math.sqrt(5))/2;

  $(window).resize(function() {
    var goldenWidth  = windowWidth  = $(this).width(),
        goldenHeight = windowHeight = $(this).height(),
		h1Size = $(this).width() / 45 ;

$("h1").css({
  fontSize: h1Size
});
$("h3").css({
  fontSize: h1Size * 0.62
});

$("p").css({
  fontSize: h1Size * 0.62 * 0.62
});

 $("#wayfinder_eye_black").css({
	height: goldenWidth * 0.03 * 0.75, width: goldenWidth * 0.03
}); 

 $("#wayfinder_compass_black").css({
	height: goldenWidth * 0.025, width: goldenWidth * 0.025
}); 

 $("#wayfinder_gear_black").css({
	height: goldenWidth * 0.025, width: goldenWidth * 0.025
}); 


 $("#wayfinder_logo_dog").css({
	height: goldenWidth * 0.15 * 0.6, width: goldenWidth * 0.15
}); 

 $("#wayfinder_eye").css({
	height: goldenWidth * 0.023 * 0.75, width: goldenWidth * 0.023
}); 

$("#wayfinder_gear_green").css({
	height: goldenWidth * 0.07, width: goldenWidth * 0.07
}); 

$("#wayfinder_compass_purple").css({
	height: goldenWidth * 0.039, width: goldenWidth * 0.039
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


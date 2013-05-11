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
$("h3").css({
  fontSize: h1Size * 0.5
});
$("p").css({
  fontSize: h1Size * 0.2
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


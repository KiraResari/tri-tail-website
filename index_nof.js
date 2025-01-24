// Begin XHTML adjustment
$(document).ready(function(){
	if (jQuery.browser.msie && jQuery.browser.version.substr(0, 2) == "6.") {
		$(".nof-clearfix").each(function (i) {
			$(this).append("<div style='clear:both'/>");
			$(this).removeClass("nof-clearfix");
		});
	}
});

// End XHTML adjustment

// Begin Navigation Bars
var ButtonsImageMapping = [];
ButtonsImageMapping["NavigationBar2"] = {
	"NavigationButton1" : { image: "./Home_HNav-Bar-tri-Tail-Button-Down.png", rollover: "./Home_HRNav-Bar-tri-Tail-Button-Down.png", w: 120, h: 40 },
	"NavigationButton2" : { image: "./Team_NNav-Bar-tri-Tail-Button-Normal.png", rollover: "./Team_NRNav-Bar-tri-Tail-Button-Hover.png", w: 120, h: 40 },
	"NavigationButton3" : { image: "./Imprint_NNav-Bar-tri-Tail-Button-Normal.png", rollover: "./Imprint_NRNav-Bar-tri-Tail-Button-Hover.png", w: 120, h: 40 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar2", rollover: true, autoClose: false });
	$("#NavigationBar2").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar2 ul").hide();
});


// End Navigation Bars


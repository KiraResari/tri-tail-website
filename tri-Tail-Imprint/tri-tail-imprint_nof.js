// Begin Actions
function F_doLoaded() {
	document.main = new F_cMain();
	document.objectModel = new Object();
	F_OM('Layout','LayoutLYR', 'doc', '', new Array());
	F_OM('triTailIconNormal' , 'triTailIconNormalLYR', 'img', 'Layout',new Array(
	'Mouse Over','triTailIconNormal','Hide','',0,
	'Mouse Over','triTailIconHover','Show','',0,
	'Clicked','Layout','Go To','../index.html',0),'',0);
 	F_OM('triTailIconHover' , 'triTailIconHoverLYR', 'img', 'Layout',new Array(
	'Mouse Out','triTailIconHover','Hide','',0,
	'Mouse Out','triTailIconNormal','Show','',0,
	'Clicked','Layout','Go To','../index.html',0),'',0);
 	F_OM('NavigationBar2' , 'NavigationBar2LYR', 'nav', 'Layout',null,'',0);
 
	F_pageLoaded('Layout');
}
 
$(document).ready( function() {
F_onLoaded();
	$('#triTailIconNormalA').bind('click', function(__e) { return (F_e('triTailIconNormal', F_CL, __e)); } );
	$('#triTailIconNormalA').bind('mouseover', function(__e) { return (F_e('triTailIconNormal', F_MV, __e)); } );
	$('#triTailIconHoverA').bind('click', function(__e) { return (F_e('triTailIconHover', F_CL, __e)); } );
	$('#triTailIconHoverA').bind('mouseout', function(__e) { return (F_e('triTailIconHover', F_MT, __e)); } );
});
// End Actions

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
	"NavigationButton4" : { image: "../Home_NNav-Bar-tri-Tail-Button-Normal.png", rollover: "../Home_NRNav-Bar-tri-Tail-Button-Hover.png", w: 120, h: 40 },
	"NavigationButton5" : { image: "../Team_NNav-Bar-tri-Tail-Button-Normal.png", rollover: "../Team_NRNav-Bar-tri-Tail-Button-Hover.png", w: 120, h: 40 },
	"NavigationButton6" : { image: "../Imprint_HNav-Bar-tri-Tail-Button-Down.png", rollover: "../Imprint_HRNav-Bar-tri-Tail-Button-Down.png", w: 120, h: 40 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar2", rollover: true, autoClose: false });
	$("#NavigationBar2").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar2 ul").hide();
});


// End Navigation Bars


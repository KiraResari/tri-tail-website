// Begin Actions
function F_doLoaded() {
	document.main = new F_cMain();
	document.objectModel = new Object();
	F_OM('Layout','LayoutLYR', 'doc', '', new Array());
	F_OM('triTailIconNormal' , 'triTailIconNormalLYR', 'img', 'Layout',new Array(
	'Mouse Over','triTailIconNormal','Hide','',0,
	'Mouse Over','triTailIconHover','Show','',0,
	'Clicked','Layout','Go To','../../index.html',0),'',0);
 	F_OM('triTailIconHover' , 'triTailIconHoverLYR', 'img', 'Layout',new Array(
	'Mouse Out','triTailIconHover','Hide','',0,
	'Mouse Out','triTailIconNormal','Show','',0,
	'Clicked','Layout','Go To','../../index.html',0),'',0);
 	F_OM('NavigationBar1' , 'NavigationBar1LYR', 'nav', 'Layout',null,'',0);
 
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
ButtonsImageMapping["NavigationBar1"] = {
	"NavigationButton4" : { image: "../../Home_NNav-Bar-Zeal-Button-Normal.png", rollover: "../../Home_NRNav-Bar-Zeal-Button-Hover.png", w: 120, h: 40 },
	"NavigationButton5" : { image: "../../Tales_HNav-Bar-Zeal-Button-Down.png", rollover: "../../Tales_HRNav-Bar-Zeal-Button-Down.png", w: 120, h: 40 },
	"NavigationButton6" : { image: "../../Games_NNav-Bar-Zeal-Button-Normal.png", rollover: "../../Games_NRNav-Bar-Zeal-Button-Hover.png", w: 120, h: 40 },
	"NavigationButton7" : { image: "../../Species_NNav-Bar-Zeal-Button-Normal.png", rollover: "../../Species_NRNav-Bar-Zeal-Button-Hover.png", w: 120, h: 40 },
	"NavigationButton8" : { image: "../../World_NNav-Bar-Zeal-Button-Normal.png", rollover: "../../World_NRNav-Bar-Zeal-Button-Hover.png", w: 120, h: 40 },
	"NavigationButton9" : { image: "../../Imprint_NNav-Bar-Zeal-Button-Normal.png", rollover: "../../Imprint_NRNav-Bar-Zeal-Button-Hover.png", w: 120, h: 40 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar1", rollover: true, autoClose: false });
	$("#NavigationBar1").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar1 ul").hide();
});


// End Navigation Bars


(function ($) {
	 "use strict";

	 var AppModule = {
	     hamburger: {
	         Visible: function (side) {
	             return ($("body").hasClass("show-" + side + "-hamburger-menu"));
	         },
	         Show: function (side) {
	             if (!this.Visible(side)) {
	                 ($("body").addClass("show-" + side + "-hamburger-menu"));
	             }
	         },
	         Hide: function (side) {
	             if (this.Visible(side)) {
	                 ($("body").removeClass("show-" + side + "-hamburger-menu"));
	             }
	         },
	         Toggle: function (side) {
	             if (!this.Visible(side)) {
	                 this.Hide(side == "left" ? "right" : "left");
	                 this.Show(side);
	             }
	             else {
	                 this.Hide(side);
	             }
	         }
	     }, // hamburger
	     realign: function () {
             //hide hamburger menu
	         if ($(document).width() > 549) {
	             AppModule.hamburger.Hide("left");
	             AppModule.hamburger.Hide("right");
	         }
	         if (typeof HomeBanner !== 'undefined') {	             
	             HomeBanner.SetHeight(Math.floor(350 * $('#bannerContainer').width() / 960));
	         }
	     }
	 }

	 //initialization
	 window.App = AppModule;
	 $("*[data-navigate-action]").each(function () {
	     if ($(this).attr("data-navigate-action") === "toggle-hamburger-left") {
	         $(this).click(function () {
	             AppModule.hamburger.Toggle("left");
	         });
	     }
	     else if ($(this).attr("data-navigate-action") === "toggle-hamburger-right") {
	         $(this).click(function () {
	             AppModule.hamburger.Toggle("right");
	         });
	     }
	     else if ($(this).attr("data-navigate-action") === "toggle-dxhamburger-left") {
	         $(this).click(function () {
	             dxmenu.Toggle();
	         });
	     }

	 });
	 $(window).on('resize', function () {
	     AppModule.realign();
	 });
	 $(window).on('orientationchange', function (event) {
         // event.orientation = portrait | landscape
	     AppModule.realign();
	 });
	 AppModule.realign();
})(jQuery);
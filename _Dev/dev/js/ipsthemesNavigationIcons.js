;( function($, _, undefined){
	"use strict";
	
	ips.templates.set('core.autocomplete.ipsthemesNavigationIcons', " \
		<li class='ipsAutocompleteMenu_item ipsClearfix' data-value=\"{{value}}\" role='option' role='listitem'>\
			<strong>fa-{{{value}}}</strong><span class='ipsPos_right ipsBadge ipsBadge_icon ipsBadge_positive'><i class='fa fa-{{{value}}}'></i></span>\
		</li>\
	");

}(jQuery, _));
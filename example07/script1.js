/*jslint white: true, browser: true, undef: true, nomen: true, eqeqeq: true, plusplus: false, bitwise: true, regexp: true, strict: true, newcap: true, immed: true, maxerr: 14 */
/*global window: false, REDIPS: true */

/* enable strict mode */
"use strict";

// create redips container
var redips = {};


// redips initialization
redips.init = function () {
	// reference to the REDIPS.drag
	var rd = REDIPS.drag;
	// initialization
	rd.init();
	// set hover color
	rd.hover.colorTd = '#9BB3DA';
	// single element per cell
	rd.dropMode = 'single';
	// only DIV elements with class name "orange" can be dropped to TD with class name "last" (this is last row)
	rd.only.divClass.orange = 'last';
	// or elements can be defined one by one
	//rd.only.div.a = 'last';		// original
	//rd.only.div.ac0 = 'last';		// first clone
	//rd.only.div.b = 'last';		// original
	//rd.only.div.bc0 = 'last';		// first clone
	// uncomment this and "orange" elements could be placed to any TD
	//rd.only.other = 'allow';
};


// add onload event listener
if (window.addEventListener) {
	window.addEventListener('load', redips.init, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', redips.init);
}
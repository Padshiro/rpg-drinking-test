/*jslint devel: true, browser: true */
/*global $:true, window:true, $sd:true, jQuery:true, controller:true, model:true, view:true */

(function rpgDrinking_menu () {
	'use strict';

	var menu;
	view.menu = {};
	menu = view.menu;

	menu.change = function (menu) {
		var inventory = document.getElementById('inventory'),
			itemTotal = document.getElementById('itemTotal'),
			skill = document.getElementById('skill'),
			stats = document.getElementById('stats'),
			title = document.getElementById('title');

		switch (menu) {
		case 'information':
			title.className += ' hidden';
			stats.className = 'rpgMenu';
			skill.className = 'rpgMenu';
			inventory.className = 'rpgMenu';
			itemTotal.className = 'rpgMenu';
			break;
		}
	};
}());
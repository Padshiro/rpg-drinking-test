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
/*jslint devel: true, browser: true */
/*global $:true, window:true, $sd:true, jQuery:true, controller:true, model:true, view:true */

(function rpgDrinking_skillMenu () {
	'use strict';

	var skill;
	view.skill = {};
	skill = view.skill;

	skill.updateUse = function () {
		var skillUses = document.getElementById('skillUses').children[0],
			use = parseInt(skillUses.innerHTML, 10);

		//If it is not 0
		if (use !== 0) {
			skillUses.innerHTML = (use - 1).toString();
		}
	};

	skill.updateMenu = function (cooldown, info, uses) {
		document.getElementById('skillInfo').children[0].innerHTML = info;
		document.getElementById('skillUses').children[0].innerHTML = uses.toString();
		document.getElementById('skillCoolDown').children[0].innerHTML = cooldown.toString();
	};

}());
/*jslint devel: true, browser: true */
/*global $:true, window:true, $sd:true, jQuery:true, controller:true, model:true, view:true */

(function rpgDrinking_saveGame () {
	'use strict';

	var load;
	model.load = {};
	load = model.load;

	//Get our arrays and update the HTML
	load.getInfo = function () {
		var	i,
			stats = JSON.parse(localStorage.stats), 
			skill = JSON.parse(localStorage.skill),
			items = JSON.parse(localStorage.items),
			total = JSON.parse(localStorage.total),
			selItem = document.getElementById('itemList').children; //All list items

		//Stats
		document.getElementById('name').innerHTML = stats[0];
		document.getElementById('gender').innerHTML = stats[1];
		document.getElementById('level').children[0].innerHTML = stats[2];
		document.getElementById('job').innerHTML = stats[3];

		//Skill
		document.getElementById('skillInfo').children[0].innerHTML = skill[0];
		document.getElementById('skillUses').children[0].innerHTML = skill[1];
		document.getElementById('skillCoolDown').children[0].innerHTML = skill[2];

		//Items
		for (i = 0; i < selItem.length; i += 1) {
			selItem[i].children[2].innerHTML = items[i];
		}

		//Totals
		document.getElementById('drinkTotal').children[0].innerHTML = total[0];
		document.getElementById('drinkMil').children[0].innerHTML = total[1];

	};

}());

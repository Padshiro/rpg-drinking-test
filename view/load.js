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

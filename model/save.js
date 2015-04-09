/*jslint devel: true, browser: true */
/*global $:true, window:true, $sd:true, jQuery:true, controller:true, model:true, view:true */

(function rpgDrinking_saveGame () {
	'use strict';

	var save;
	model.save = {};
	save = model.save;

	save.stats = []; //Arrays store the info
	save.skill = [];
	save.items = [];
	save.total = [];

	//Store the information
	save.storeInfo = function () {
		var i,
			selItem = document.getElementById('itemList').children; //All list items

		//Stats
		this.stats.push(document.getElementById('name').innerHTML);
		this.stats.push(document.getElementById('gender').innerHTML);
		this.stats.push(document.getElementById('level').children[0].innerHTML);
		this.stats.push(document.getElementById('job').innerHTML);

		//Skill
		this.skill.push(document.getElementById('skillInfo').children[0].innerHTML);
		this.skill.push(document.getElementById('skillUses').children[0].innerHTML);
		this.skill.push(document.getElementById('skillCoolDown').children[0].innerHTML);

		//Items
		for (i = 0; i < selItem.length; i += 1) {
			this.items.push(selItem[i].children[2].innerHTML); //Push the quanity
		}

		//Totals
		this.total.push(document.getElementById('drinkTotal').children[0].innerHTML);
		this.total.push(document.getElementById('drinkMil').children[0].innerHTML);

		//Next store in local storage
		if (window.localStorage) {
			localStorage.stats = JSON.stringify(this.stats);
			localStorage.skill = JSON.stringify(this.skill);
			localStorage.items = JSON.stringify(this.items);
			localStorage.total = JSON.stringify(this.total);
		}
	};

}());
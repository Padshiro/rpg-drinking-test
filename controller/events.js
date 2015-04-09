/*jslint devel: true, browser: true */
/*global $:true, window:true, $sd:true, jQuery:true, controller:true, model:true, view:true */

(function rpgDrinking_events () {
	'use strict';

	var events,
		inventory = model.inventory;

	controller.events = {};
	events = controller.events;

	//Add event
	events.add = function (el) {
		el.onclick = function () {
			inventory.add(this);
			return false;
		};
	};

	//Remove event
	events.remove = function (el) {
		el.onclick = function () {
			inventory.remove(this);
			return false;
		};
	};

	events.addEvts = function () {
		var i,
			itemAdd = document.querySelectorAll('.itemAdd a'),
			itemRemove = document.querySelectorAll('.itemRemove a'),
			loadGame;

		//Start
		document.getElementById('gameStart').onclick = function () {
			model.information.validation();
		};

		//Load
		if (window.localStorage) {
			if (localStorage.items) {
				loadGame = document.getElementById('loadGame');
				loadGame.className = '';
				loadGame.onclick = function () {
					model.load.getInfo();
					view.menu.change('information'); //Update the menus
				};
			}
		}

		//Save
		document.getElementById('saveGame').onclick = function (e) {
			model.save.storeInfo();
			e.preventDefault();
		};

		//Use Skill
		document.getElementById('useSkill').onclick = function (e) {
			view.skill.updateUse();
			e.preventDefault();
		};

		//Add
		for (i = 0; i < itemAdd.length; i += 1) {
			this.add(itemAdd[i]);
		}

		//Remove
		for (i = 0; i < itemRemove.length; i += 1) {
			this.remove(itemRemove[i]);
		}		
	};

}());
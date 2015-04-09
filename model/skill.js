/*jslint devel: true, browser: true */
/*global $:true, window:true, $sd:true, jQuery:true, controller:true, model:true, view:true */

(function rpgDrinking_jobSkill () {
	'use strict';

	var skill;
	model.skill = {};
	skill = model.skill;

	skill.coolDown = 0; //Special cool down
	skill.uses = 0; //How many times they can be user per game

	//Set up the players skill and ability
	skill.set = function () {
		var job = document.getElementById('job').innerHTML.toLowerCase(),
			text = '';

		switch (job) {
		case 'black mage':
			this.coolDown = 60;
			text = 'Magic Missile (Choose a friend/ s to have 5 shots with.';
			this.uses = 3;
			break;
		case 'monk':
			this.coolDown = 60;
			text = 'Combo (Choose a friend/ s to consume 2 drinks (each or between)';
			this.uses = 3;
			break;
		case 'red mage':
			this.coolDown = 60;
			text = 'Refresh (Top up your friends drink).';
			this.uses = 3;
			break;
		case 'theif':
			this.coolDown = 60;
			text = 'Steal (Steal your friends drink (it is yours now).';
			this.uses = 3;
			break;
		case 'warrior':
			this.coolDown = 60;
			text = 'Warrior Cry (Everyone downs their drink.';
			this.uses = 3;
			break;
		case 'white mage':
			this.coolDown = 30;
			text = 'Cure - (Give yourself or friend a soft drink.';
			this.uses = 6;
			break;
		}

		view.skill.updateMenu(this.coolDown, text, this.uses);
	};

}());
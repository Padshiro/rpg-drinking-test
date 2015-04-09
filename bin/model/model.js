/*jslint devel: true, browser: true */
/*global $:true, window:true, $sd:true, jQuery:true, controller:true, model:true, view:true */

var controller,
	model,
	rpgDrinking = {},
	view;

rpgDrinking.controller = {};
rpgDrinking.model = {};
rpgDrinking.view = {};

controller = rpgDrinking.controller;
model = rpgDrinking.model;
view = rpgDrinking.view;
/*jslint devel: true, browser: true */
/*global $:true, window:true, $sd:true, jQuery:true, controller:true, model:true, view:true */

(function rpgDrinking_information () {
	'use strict';

	var info;
	model.information = {};
	info = model.information;

	info.validation = function () {
		var genderVal = document.getElementById('genderSel').value,
			jobVal = document.getElementById('jobSel').value,
			nameVal = document.getElementById('nameInput').value,
			errorMess = document.getElementById('errorMessage');

		if (genderVal !== '' && jobVal !== '' && nameVal !== '') {
			if (errorMess.innerHTML !== '') {
				errorMess.innerHTML = '';
			}
			view.menu.change('information');
			model.stats.updateInfo();
			model.skill.set(); //Update the skill information
		} else {
			if (errorMess.innerHTML === '') {
				errorMess.innerHTML = 'Wait Adventurer! Fill in everything.';
			}
		}

	};

}());
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
/*jslint devel: true, browser: true */
/*global $:true, window:true, $sd:true, jQuery:true, controller:true, model:true, view:true */

(function rpgDrinking_stats () {
	'use strict';

	var stats;
	model.stats = {};
	stats = model.stats;

	//Update the player level
	stats.updateLevel = function () {
		var drinkMil = parseInt(document.getElementById('drinkMil').children[0].innerHTML, 10),
			level = document.getElementById('level').children[0];

		if (drinkMil >= 500 && drinkMil < 1000) {
			level.innerHTML = '2';
		} else if (drinkMil >= 1000 && drinkMil < 2000) {
			level.innerHTML = '3';
		} else if (drinkMil >= 2000 && drinkMil < 3000) {
			level.innerHTML = '4';
		} else if (drinkMil >= 3000 && drinkMil < 4000) {
			level.innerHTML = '5';
		} else if (drinkMil >= 4000 && drinkMil < 5000) {
			level.innerHTML = '6';
		} else if (drinkMil >= 5000 && drinkMil < 6000) {
			level.innerHTML = '7';
		} else if (drinkMil >= 6000 && drinkMil < 7000) {
			level.innerHTML = '8';
		} else if (drinkMil >= 7000 && drinkMil < 8000) {
			level.innerHTML = '9';
		} else if (drinkMil >= 8000 && drinkMil < 9000) {
			level.innerHTML = '10';
		} else {
			level.innerHTML = '1';
		}
	};

	//Update the stat information
	stats.updateInfo = function () {
		var genderSel = document.getElementById('genderSel'),
			jobSel = document.getElementById('jobSel');

		document.getElementById('name').innerHTML = document.getElementById('nameInput').value;
		document.getElementById('job').innerHTML = jobSel[jobSel.selectedIndex].innerHTML;
		document.getElementById('gender').innerHTML = genderSel[genderSel.selectedIndex].innerHTML;
	};

}());
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
/*jslint devel: true, browser: true */
/*global $:true, window:true, $sd:true, jQuery:true, controller:true, model:true, view:true */

(function rpgDrinking_inventory () {
	'use strict';

	var inventory;
	model.inventory = {};
	inventory = model.inventory;

	//Work out the total
	inventory.total = function (type) {
		var drinkTotal = document.getElementById('drinkTotal').children[0],
			currTotal = parseInt(drinkTotal.innerHTML, 10);

		//If the type === 'add'
		if (type === 'add') {
			drinkTotal.innerHTML = (currTotal + 1).toString();
		} else {
			//Remove
			drinkTotal.innerHTML = (currTotal - 1).toString();
		}
	};

	inventory.points = function (el, type) {
		var drinkMil = document.getElementById('drinkMil').children[0],
			currMil = parseInt(drinkMil.innerHTML, 10),
			parent = el.parentNode.parentNode,
			parClassName = parent.className,
			ml = parseInt(parent.querySelector('.mil').innerHTML, 10);
	
		if (type === 'add') {
			if (parClassName.indexOf('softDrink') !== -1) {
				drinkMil.innerHTML = (currMil - ml).toString();
			} else {
				drinkMil.innerHTML = (currMil + ml).toString();
			}
		} else {
			if (parClassName.indexOf('softDrink') !== -1) {
				drinkMil.innerHTML = (currMil + ml).toString();
			} else {
				drinkMil.innerHTML = (currMil - ml).toString();
			}
		}

		model.stats.updateLevel(); //Update the player level
	};

	//Remove quantity
	inventory.remove = function (el) {
		var itemQuan = el.parentNode.parentNode.querySelector('.itemQuantity'),
			itemQuanHTML = parseInt(itemQuan.innerHTML, 10);
		
		//If the item quantity is not equal to 0
		if (itemQuanHTML !== 0) {
			itemQuanHTML = itemQuanHTML - 1;
			itemQuan.innerHTML = itemQuanHTML.toString();
			this.total('remove'); //We know it can only decrease by 1
			this.points(el, 'remove'); //Update the points (ml)
		}		
	};

	//Add quantity
	inventory.add = function (el) {
		var itemQuan = el.parentNode.parentNode.querySelector('.itemQuantity'),
			itemQuanHTML = parseInt(itemQuan.innerHTML, 10);
		
		if (itemQuanHTML !== 99) {
			itemQuanHTML = itemQuanHTML + 1;
			itemQuan.innerHTML = itemQuanHTML.toString();
			this.total('add'); //We know it can only increase by 1
			this.points(el, 'add'); //Update the points (ml)
		}
	};
}());
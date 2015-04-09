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
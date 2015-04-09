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
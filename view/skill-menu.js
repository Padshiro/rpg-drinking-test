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
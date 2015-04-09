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
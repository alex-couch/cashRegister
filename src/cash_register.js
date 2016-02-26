'use strict'

const registerList = [];
const firstRegister = {
	items: []
};

const secondRegister = {
	items: []
};

const addItem = (register, name, cost) => {
	const item = {
		name: name,
		cost: cost
	};

	register.items.push(item);
	console.log("Item: " + item.name + " | Cost: " + item.cost);
}

const removeItem = (register, itemName) => {
	without(register.items, 'name', itemName);
	console.log("Item: " + itemName);
}

function getTotal(register){
	return register.items.reduce((prev, curr) => {
		return prev + curr.cost;
	}, 0);
}

function without(arr, key, val){
	return arr.filter(item => item[key] !== val);
}

const trackRegister = (register, list, name) => {
	list.push(register);
	console.log(name);
}
const getTotalAll = (list) => {
	return list.reduce((prev, curr) => {
		return prev + getTotal(curr)
	}, 0);
}

addItem(firstRegister, 'shoes', 50);
addItem(firstRegister, 'shirt', 15);
addItem(secondRegister, 'pants', 15);
addItem(secondRegister, 'gum', 5);

console.log('----------------------------');

console.log('Total Register 1:', getTotal(firstRegister));
console.log('Total Register 2:', getTotal(secondRegister));
console.log('-----------------------------');

removeItem(firstRegister, 'shoes');
removeItem(secondRegister, 'gum');
console.log('-----------------------------');

console.log("Tracked Registers: ");
trackRegister(firstRegister, registerList, "First Register");
trackRegister(secondRegister, registerList, "Second Register");

console.log('------------------------------');

const totalAll = getTotalAll(registerList);
console.log('Total All: ', totalAll);
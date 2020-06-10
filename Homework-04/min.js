'use strict'
let array = [ 3, -27, 35, 48, -236, -459, 587, 555, -98, 78, 45,
			-87, -354, 256, -74, 852, 456, -987, 567, 200 ];

function compareNumbers(a, b) {
	return a - b;
}

array.sort(compareNumbers);
console.log('Ordering from smaller to larger:');
console.log(array);

array.reverse();
console.log('\n Ordering from larger to smaller:');
console.log(array);

let lessThanZero = [];
let moreThanZero = [];

for (let i = 0; i < array.length; i++) {

	if (array[i] < 0) {
		lessThanZero.push(array[i]);
	} else if (array[i] > 0) {
		moreThanZero.push(array[i]);
	}
}
console.log('\n Less than zero:');
console.log(lessThanZero);

console.log('\n More than zero:');
console.log(moreThanZero);

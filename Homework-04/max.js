'use strict'

function alert(array) {
	console.log(array);
	console.log('-----------------------------------');
}

let arrayOfStudents = [];

let student1 = {
	yearOfStuding : 5,
	facultyName : 'Economics'
};

let student2 = {
	yearOfStuding : 7,
	facultyName : 'Architecture'
};

let student3 = {
	yearOfStuding : 4,
	facultyName : 'Finance and banking'
};

let student4 = {
	yearOfStuding : 3,
	facultyName : 'Geodesy'
};

let student5 = {
	yearOfStuding : 6,
	facultyName : 'Energy'
};

let student6 = {
	yearOfStuding : 8,
	facultyName : 'Biology'
};

let student7 = {
	yearOfStuding : 5,
	facultyName : 'Math'
};

let student8 = {
	yearOfStuding : 4,
	facultyName : 'Physics'
};

let student9 = {
	yearOfStuding : 5,
	facultyName : 'History'
};

let student10 = {
	yearOfStuding : 4,
	facultyName : 'Geography'
};

arrayOfStudents.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);
alert(arrayOfStudents);

let facultyNameArray = [];
facultyNameArray.push(student1.facultyName, student2.facultyName, student3.facultyName, student4.facultyName, student5.facultyName, 
						student6.facultyName, student7.facultyName, student8.facultyName, student9.facultyName, student10.facultyName);
						
alert(facultyNameArray);

let yearOfStudingArray = [];
yearOfStudingArray.push(student1.yearOfStuding, student2.yearOfStuding, student3.yearOfStuding, student4.yearOfStuding, student5.yearOfStuding, 
		student6.yearOfStuding, student7.yearOfStuding, student8.yearOfStuding, student9.yearOfStuding, student10.yearOfStuding);

let sumOfYearOfStuding = yearOfStudingArray.reduce(function(sum, current) {
	return sum + current;
	}, 0);

alert(sumOfYearOfStuding);





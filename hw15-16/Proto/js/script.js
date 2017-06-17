
//the first sample
console.log('----------------');
console.log('the first sample');
console.log('----------------');

var human = {
	name: 'Jack',
	age: 22,
	gender: 'male',
	height: 183,
	weigt: 75
};

var student = {
	study: 'University',
	grant: 900,
	watchTV: function () {
		console.log('student watch TV')
	}
};

var worker = {
	job: 'CD Projekt RED',
	money: 3000,
	work: function () {
		console.log('worker working')
	}
};

student.__proto__ = human;
worker.__proto__ = human;

console.log('student.name', student.name);
console.log('student.age', student.age);
console.log('student.gender', student.gender);
console.log('student.height', student.height);
console.log('student.weigt', student.weigt);

console.log('----------------');

console.log('worker.name', worker.name);
console.log('worker.age', worker.age);
console.log('worker.gender', worker.gender);
console.log('worker.height', worker.height);
console.log('worker.weigt', worker.weigt);

//the second sample
console.log('----------------');
console.log('the second sample');
console.log('----------------');

function Human() {
	this.name = 'Jack';
	this.age = 22;
	this.gender = 'male';
	this.height = 183;
	this.weigt = 75;
}

function Student() {
	this.study = 'University';
	this.grant = 900;
	this.watchTV = function () {
		console.log('student watch TV')
	};
}

function Worker() {
	this.job = 'CD Projekt RED';
	this.money = 3000;
	this.work = function () {
		console.log('worker working')
	};
}

Student.prototype = new Human;
var newStudent = new Student;

console.log('newStudent.name', newStudent.name);
console.log('newStudent.age', newStudent.age);
console.log('newStudent.gender', newStudent.gender);
console.log('newStudent.height', newStudent.height);
console.log('newStudent.weigt', newStudent.weigt);

console.log('----------------');

Worker.prototype = new Human;
var newWorker = new Worker;

console.log('newWorker.name', newWorker.name);
console.log('newWorker.age', newWorker.age);
console.log('newWorker.gender', newWorker.gender);
console.log('newWorker.height', newWorker.height);
console.log('newWorker.weigt', newWorker.weigt);

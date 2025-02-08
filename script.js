"use strict";      // Этот режим заставляет браузер использовать все современные возможности языка.

class Employee {
    name;
    age;
    salary;
    constructor(){
        console.log(this)
    }
    salaryIncrease(){
        this.salary*=1.1
    }
}

let employee = new Employee;

employee.name = 'john';
employee.age = 25;
employee.salary = 1000000;
employee.status = 'billionare';


console.log(employee)
employee.salaryIncrease();
console.log(employee)

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa


class User {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}


class UsersCollection {
	#users;
	
	constructor() {
		this.#users = [];
	}
	add(user) {
		this.#users.push(user);
	}
	show() {
		for (let user of this.#users) {
			console.log(user.getName());
		}
	}
}

let uc = new UsersCollection;

uc.add(new User('john'));
uc.add(new User('eric'));
uc.add(new User('kyle'));

uc.show();

let date = new Date;

console.log(date);

console.dir(date);

let body = document.querySelector('input');
console.dir(body);
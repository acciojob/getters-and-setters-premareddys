//complete this code
class Person {
	constructor(name,age) {
    this.getter = name;
	this.setter = age;
  }
	get getter(){
		return this.getter;
	} 
	set setter(x){
		this.setter=x;
	}
}

class Student extends Person {
	study(){
		
	}
}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

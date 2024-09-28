function Student (name, Id, roll_no, age) {
    this.name = name;
    this.Id = Id;
    this.roll_no = roll_no;
    this.age = age;
}
let student1 = new Student("Nitesh", 4343, 807, 20);
console.log(student1)

// adding properties and methods in student1 object 
// student1.gender = "male";
// console.log(student1)

// student1.address = function(){
//     return this.name= "vill - Done, Ds - Siwan, St - Bihar";
// }
// console.log(student1.name)
// console.log(student1.address())
// console.log(student1)
// console.log(student1.name)

// Object prototype - use add and change the cunstructor properties and methods
Student.prototype.gender = "Male";
console.log(student1)
console.log(student1.gender)

Student.prototype.address = function(){
    return this.name= "vill - Done, Ds - Siwan, St - Bihar";
}
console.log(student1)
console.log(student1.address())
console.log(student1.name)

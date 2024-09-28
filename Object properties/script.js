let person = {
    firstName : "Nitesh",
    lastName : "Kumar",
    age : 20
};
console.log(person);
console.log(person.firstName);
console.log(person['age']);
person.firstName = "Rohit";
person.height = 6;
console.log(person);
delete person.height;
console.log(person);

//checking property present int object
console.log('height' in person);
 
//printing properties through for-in loop
for(let key in person){
    console.log(key);
}

//printing value of properties through for-in loop
for(let key in person){
    console.log(key+":"+person[key]);
}

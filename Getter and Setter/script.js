let person = {
    firstName : "Nitesh",
    lastName : "Kumar",
    age : 20,
    get upper(){
       return this.firstName.toUpperCase();
    },
    set setname(n){
        this.firstName = n.toUpperCase();
    }
};
console.log(person.upper);  
person.firstName = "Durgesh";
console.log(person);
let person = {
    name : "Nitesh Kumar",
    age : 20,
    hello () {
        console.log("Hello !...")
    }
};
person.weight = function () {
    let weight = 70;
    console.log(weight);
}
function value(){
    const height = 5.7;
    console.log(height);
}
person.height = value;
console.log(person);
person.hello();
person.height();
person.weight();
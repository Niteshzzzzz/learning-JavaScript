const user = {
    firstName: "Nitesh",
    lastName: "Kumar",
    age: 21,
    address: {
        city: "siwan",
        state: "Bihar"
    },
    fullName: function(){
       return this.firstName+' '+this.lastName;
    }
}

console.log(user)
console.log(user?.address)
console.log(user.address?.city)
console.log(user.address?.country)
console.log(user.fullName?.())
console.log(user.profession?.())
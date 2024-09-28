// Shalow copy --> when we copy a object and this object is a nested object then only top level object(properties and methods) is copied and nested objects are not copied only pointing it. Example - //
let obj = {
    name: "nitesh",
    age: 20,
    social: {
        facebook: {
            f_id: 12,
            f_name: 'nitesh@gmail.com'
        },
        youtube: {
            y_id: 12,
            y_name: 'nitesh@gmail.com'
        }
    },
    marks: {
        math: 90,
        pps: 80,
        english: 99
    }
};

console.log(obj);

// there are two method to create shalow copy 1) spread operator and 2) Object.assign()

let obj2 = {...obj};
console.log(obj2); // no changes occured in obj because we not change in nested objects of obj2

obj2.age = 34;
console.log(obj.age)
console.log(obj2.age)

obj2.social.facebook.f_name = "changed";
console.log(obj.social.facebook.f_name); //here when we change nested objects of obj2 then also changes occured in nested objects of obj 
console.log(obj2.social.facebook.f_name);

let obj3 = Object.assign(obj);
console.log(obj)

// Deep copy --> In this method we create a copy of an object and when we apply changes in copied object then no changes occured in original object no matter original object are nested or not. Example - //

let user = {
    name: "nitesh",
    age: 20,
    social: {
        facebook: {
            f_id: 12,
            f_name: 'nitesh@gmail.com'
        },
        youtube: {
            y_id: 12,
            y_name: 'nitesh@gmail.com'
        }
    },
    marks: {
        math: 90,
        pps: 80,
        english: 99
    }
};

function makeDeepCopy(obj){
    if(typeof obj !== 'object' || obj === 'null'){
        return obj;
    }

    let copiedObject = Array.isArray(obj)?[]:{};
    let objKeys = Object.keys(obj);

    for(let i = 0; i < objKeys.length; i++){
        copiedObject[objKeys[i]] = makeDeepCopy(obj[objKeys[i]])
    }
    return copiedObject;
}

let user2 = makeDeepCopy(user); // this function works as to generate deep copy of an object
console.log(user2);

user2.social.facebook.f_name = "changed";
console.log(user.social.facebook.f_name);
console.log(user2.social.facebook.f_name);
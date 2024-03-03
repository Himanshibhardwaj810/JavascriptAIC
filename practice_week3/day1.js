//Creating objects
//using object literal
const human={
    name:"Rahul",
    age:23,
    gender:"male",
   
};
console.log(human);
//using new keyword
const himanshi = new Object();
himanshi.firstName = "Himanshi";
himanshi.lastName = "Bhardwaj";
himanshi.age =19;
himanshi.eyeColor = " brown";
console.log(himanshi.firstName,himanshi.lastName);
//another way of showcasing object
let person=''
for(let u in himanshi){
    person=person+himanshi[u];
     console.log(person+" \n"); 
}
//adding properties in javascript
human.profession="Student at MMDU";
console.log(human);
//deleting properties
delete himanshi.eyeColor
console.log(himanshi);
//nested
const radhika={
    name:"Radhika",
    parents_name:{
        father_name:"Suraj",
        mother_name:"Shalini"
    },
    phone_no:{
        student_number:"878xxx",
        father_number:"57xx",
        mother_number:"726xxx"

    }

}
console.log(radhika.parents_name.mother_name);
console.log(radhika.phone_no);

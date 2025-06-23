// class App{
//     //!instance method of a class
//     sayHello(){
//         console.log("say Hello to me");
//     }
//     //!property ,,,,,we should not use the datatype
//     a=10
//     // console.log(a);//?we cannot access this ,,,,,can access in methods or instance reference variables
//     //!static method of a class
//     static uandMe(){
//         console.log("will go to ReactJs class");
//     }
// }
// //todo Instance Method: when we are calling the method using instance reference variable then those methods are known as instance methods.and those are declared without static keyword
// let app1=new App();
// app1.sayHello()
// console.log(app1.a);

// //? static Methood: when the method is declared using static keywod then these methods are static.And those we call with class name
// App.uandMe()

//!Constructor in js --->3 wayss
// class Employee{
//     constructor(eid,ename,role,salary){
//         this.eid=eid;
//         this.ename=ename;
//         this.role=role;
//         this.salary=salary;
//     }
// }
// let emp1=new Employee(10001,"Rekha","Java Fullstack Developer",100000)
// console.log(emp1);


//!Inheritence in js

class Animal{
    name="chintu"
    makeSound(){
        console.log("make the sound");
    }
}

class Dog extends Animal{
    constructor(name){
        super()
    }
    makeSound(){
        console.log("Bhow-Bhow");
    }
}

let animal=new Animal()
let nokia=new Dog()
nokia.makeSound()
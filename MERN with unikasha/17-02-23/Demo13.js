/*

*******OOPS(Object Oriented Programming Language)********8

	
Class	
•	it is nothing but the blueprint of an entity
•	class will contain all field of that particulaar entity

class Person{ 
    var name;
    var age;
    var gender;
    var email;
}
Object-
•	object is nothing but it is an instance of class
•	there are different ways to create object of a class

#Program:

Program1:

class Person{
    constructor(name,email,age,gender){
        this.name=name;
        this.email=email;
        this.age=age;
        this.gender=gender;

    }

print(){
    console.log("name: " +this.name,"email: " +this.email,"age : " +this.age,"gemder : "+this.gender)

}
}

var man=new Person("Ankit","vank@gmail.com",24,"male")   //create object of class
man.print();       //calling function of the class

program2

class vehicel{
    constructor(numberoftyre,numberofMirror,isEngineavailable,isBreakavailable){
        this.numberoftyre=numberoftyre;
        this.numberofMirror=numberofMirror;
        this.isEngineavailable=isEngineavailable;
        this.isBreakavailable=isBreakavailable;

    }
    PrintDetails(){

        console.log("number of tyres is " +this.numberoftyre,this.numberofMirror,this.isEngineavailable,this.isBreakavailable)
    }

}
var car=new vehicel(41,4,true,true)
car.PrintDetails();

program3

const person= {
    PrintValue:function PrintValue(name,gender,age,mail){
        console.log("name: "+name,"age : "+age,"gender : "+gender,"mail : "+mail)
    }
    

}
const person1=Object.create(person);    // create object of the variable person
person1.PrintValue("ANkit","Male",24,"vani@gmail.com");

Program 4

class MathematicalOperations {
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2
    }
    add(num1,num2){
        console.log("addition is : "+(this.num1+this.num2));
    }
    subtract(num1,num2){
        console.log("subtraction is : "+(this.num1-this.num2))
    }
    multiply(num1,num2){
        console.log("multiplication is : "+(this.num1*this.num2))
    }
    divide(num1,num2){
        console.log("division  is : "+(this.num1/this.num2))
    }

}
var operaition= new MathematicalOperations(10,5)
operaition.add();                   // in this we did the all thee operations with the same value
operaition.subtract();
operaition.multiply();
operaition.divide();

2nd method:
class MathematicalOperations {
    add(num1,num2){
        console.log("additiomn is : "+(num1+num2))
    }
    subtract(num1,num2){
        console.log("subtraction is : "+(num1-num2))
    }
    multiply(num1,num2){
        console.log("multiplication is : "+(num1*num2))
    }
    divide(num1,num2){
        console.log("division  is : "+(num1/num2))
    }
    MOD1(num1,num2){
        console.log("MOD is : " +(num1%num2))
    }
    
}
var operaition=new MathematicalOperations()
operaition.add(5,2);
operaition.subtract(15,2);
operaition.multiply(15,9);
operaition.divide(525,5)
operaition.MOD1(85,9)

---------------------------------------------

**********Constructor***********

 it will executed evry time when we create an object of the  class

class test {
    constructor(){
        this.a=10
        this.b=20
        this.c=30

    }
    dojob(){
        console.log("object has been create")
    }
}

var t= new test()
console.log(t.a,t.b,t.c)
t.dojob();




Note- function inside the class called as method.


*/

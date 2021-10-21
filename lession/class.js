"use strict";

//class: template
//object: instance of a class 인스탄스

//1. class declarations

class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 31);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. getter and sstters

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    //return 변경해줄 값
    return this._age;
  }

  set age(value) {
    //설정 value로 변경해준다.
    if (value < 0) {
      throw Error("age can not be negative");
    }
    this._age = value;
  }
}

const user1 = new User("steve", "job", -1);
console.log(user1.age);

// 상속

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
//extend 키워드로 상속한다.
class Triangle extends Shape {
  // 수정하고 싶은것만 수정할수 있습니다.
  draw() {
    super.draw(); // super 키워드 사용으로 부모의 draw() 사용 가능
    console.log(`❤`);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
const triangle = new Triangle(20, 20, "red");

rectangle.draw();
console.log(rectangle.getArea());

triangle.draw();
console.log(triangle.getArea());

//모든 class는 object를 상속한다.

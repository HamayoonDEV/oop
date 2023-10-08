class Parent {
  constructor(name) {
    this.name = name;
  }
  detail = () => console.log(`i am ${this.name}`);
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  completeDetail = () => console.log(`i am ${this.name} my age is ${this.age}`);
  detail = () => {
    console.log(`i am fucking ${this.name}`);
  };
}

const ob1 = new Child("abid", 10);

ob1.detail();

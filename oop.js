class Parent {
  #age;
  constructor(age, name) {
    this.#age = age;
    this.name = name;
  }
  detail = () => console.log(`this is my ${this.#age}`);
}

const ob = new Parent(10, "hamayoon");

console.log(ob);

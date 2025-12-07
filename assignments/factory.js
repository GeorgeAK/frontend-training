function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    getAge: function(){
        return (this.age) ;
    }
  };
}
const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);
console.log(person1.age)
person1.greet()
console.log("age = ",person1.getAge());
let persons = [person1,person2]
for(i = 0;i<2;i++)
  console.log("details",persons[i].getAge());
let persons1=[]
for(i = 0;i<2;i++)
  persons1.push(createPerson(persons[i].name,persons[i].getAge()))
for(i = 0;i<2;i++)
  console.log("Finally",persons1[i].name,persons1[i].getAge())
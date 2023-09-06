console.log(this)

const messageElement = document.getElementById('message')

this.name = "Bob"

function sayFunction(element){ //Chris
    console.log(element)
    messageElement.innerHTML = element.name
}

// ここよく出る ↓ テスト
const person = {
    name: "Jhon",
    sayHello1: function(){
        messageElement.innerHTML = this.name
    },

    sayHello2: () =>{
        messageElement.innerHTML = this.name
    },
}

function sayAnonymous(element){ // Jhon
    person.sayHello1()
}

function sayArrow(element){ // Bob
    person.sayHello2()
}

// コンストラクタのようなもの
function Person(name){ // Alice
    console.log(this) // Person
    this.name = name
    messageElement.innerHTML = this.name
}

function sayPerson(element){
    new Person("Alice")
}
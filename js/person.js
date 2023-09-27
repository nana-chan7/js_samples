// 2023-09-27 3.week2

// JavaScript のオブジェクト
console.log("--- JavaScript Object ---")
var person = {
    name: "Jhon",
    age: 30,
    city: "NY"
}
console.log(person)

// Object -> JSON(テキストフォーマット)
console.log("--- JSON (text-data) ---")
var jsonString = JSON.stringify(person)
console.log(jsonString)

document.body.innerHTML = jsonString  // body に表示


// JSON -> Object
console.log("--- JSON -> Object ---")
var newPerson = JSON.parse(jsonString)  // parse: 解析する
console.log(newPerson.name)
console.log(newPerson.age)
console.log(newPerson.city)

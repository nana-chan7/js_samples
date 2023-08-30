// 2023-08-30 2.week7

const person = {
    name: "Alice",
    age: 30,
    occupation: "Enginner",
}

// for-in
console.log("--- for-in ---")
for (const key in person) {
    // ※ ↓ 自動入力されたものを編集した
    if (person.hasOwnProperty(key)) 
        {
            const value = person[key];
            console.log(value)
        }
}


const drinks = ["コーヒー", "紅茶", "ほうじ茶"]

// for-of
console.log("--- for-of ---")
for (const value of drinks) {
    console.log(value)
}

// fori
console.log("--- for ---")
for (var index =0; index <drinks.length; index++){
    const drink = drinks[index];
    console.log(drink)
}
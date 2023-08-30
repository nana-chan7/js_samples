// 2023-08-30 2.week7
// 夏休み明け →

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


// コールバック関数 ※ 別ファイルに移動済み
function processArray(values, callback){
    // イテレータブルなデータを繰り返し
    for (const value of values) { // ※ in だと index が帰ってきてしまうので of (資料注意)
            // コールバック関数に引数を渡して実行
            callback(value)
        }
    }

const numbers = [1, 2, 3, 4, 5]

function calculate(value){
    var answer = value * 2
    console.log(answer)
}
processArray(numbers, calculate)


// anonymous function
console.log("--- anonymous function ---")
processArray(numbers, function(value)
    {
        var answer = value * 3
        console.log(answer)  
})


// arrow function
console.log("--- arrow function ---")
processArray(numbers, (value) =>{
    var answer = (value - 3) * 2
    console.log(answer)
})


// 授業>>>
// ・コールバック関数は無名関数やアロー関数などで使うことが多い
// ・function の引数にそのまま別の関数を入れてもよいが、callback にしておくことで、
//      同じ function の中で違う 関数を呼び出せる(大規模開発などはこれが多いらしい)
// ・開発ではあまり if文は使わないらしい 
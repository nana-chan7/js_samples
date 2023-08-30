// コールバック関数
function processArray(values, callback){
    // イテレータブルなデータを繰り返し
    for (const value of values) { // ※ in だと index が帰ってきてしまうので of (資料注意)
            // コールバック関数に引数を渡して実行
            callback(value)
        }
    }

const numbers = [1, 2, 3, 4, 5]

console.log("--- function ---")
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


const drinks = ["コーヒー", "紅茶", "ほうじ茶"]
// forEach ※ loopファイル
console.log("--- forEach ---")
drinks.forEach((drink) => {
    console.log(drink)
});
// ↑↓ どちらでも
drinks.forEach(function(drink){
    console.log(drink)
});

console.log("------")
var items = [
    {id: 1, name: "コーヒー", price: 300},
    {id: 2, name: "紅茶", price: 350},
    {id: 3, name: "ほうじ茶", price: 300},
]

items.forEach(item => {
    // ↓ リテラル式: `(バッククォート)で囲む
    var message = `${item.name}の価格は${item.price}円です`
    console.log(message)
});


// 授業>>>
// ・コールバック関数は無名関数やアロー関数などで使うことが多い
// ・function の引数にそのまま別の関数を入れてもよいが、callback にしておくことで、
//      同じ function の中で違う 関数を呼び出せる(大規模開発などはこれが多いらしい)
// ・開発ではあまり if文は使わないらしい  

// ` :バッククォート
// ' :シングルクォート
// " :ダブルクォート
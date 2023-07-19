// 2023-07-19 2.week6

var drinks = ["コーヒー", "紅茶", "ほうじ茶"]
console.log(drinks)

var selectDrink = drinks[1]
console.log(selectDrink)

// 個数
var count = drinks.length
console.log(count)

// push() 配列の最後に値を追加
console.log("--- push() ---")
drinks.push("炭酸水")
console.log(drinks)

// pop() 配列の最後の値を削除
console.log("--- pop() ---")
drinks.pop()
console.log(drinks)

// shift() 先頭を削除
console.log("--- shift() ---")
drinks.shift()
console.log(drinks)

// unshift() 先頭に追加
console.log("--- unshift() ---")
drinks.unshift("アイスコーヒー")
console.log(drinks)

// splice() 指定したインデックスから n番目の要素を削除または追加
// 第2引数を 0: 追加, 1: 削除 に指定
// 追加: splice(要素番号, 0, 値)
console.log("--- splice(): 追加 ---")
drinks.splice(1, 0, "オレンジジュース")
console.log(drinks)

// 削除: splice(要素番号, 1)
console.log("--- splice(): 削除 ---")
drinks.splice(2, 1)
console.log(drinks)

// 指定した値(インデックス)の要素番号を取得
console.log("--- indexOf ---")
var index = drinks.indexOf("ほうじ茶")
console.log(index)

// 配列の更新
// 要素番号を指定して値を更新する
console.log("--- 配列の更新 ---")
drinks[1] = "ウーロン茶"
console.log(drinks)
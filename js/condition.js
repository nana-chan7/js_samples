// 2023-07-12 2.week5

// If-Else
var message = ""
var price = 200
var money = 500

if (price <= 0) { // If-Else Statement
    message = "価格が間違っています"
} else if (money >= price){
    message = "購入できます"
} else {
    message = "お金が足りません"
}
console.log(message)

// 日付処理
// 現在の日付オブジェクト
var date = new Date()
console.log(date)
var year = date.getFullYear()
var month = date.getMonth() + 1 // 月は０始まりなので１を足す
var day = date.getDate()
// Sun:0 Mon:1 Tue:2 Wed:3 Thu:4 Fri:5 Sat:6
var weekIndex = date.getDay() // 日曜始まり:０～

var dateString = year + "/" + month + "/" + day
document.getElementById("today").innerHTML = dateString

// Switch
var weekday = "水"
var garbage = ""

// switch (weekday) { // Switch Statement
switch (weekIndex) { 
    case 1: // "月"
    case 5: // "金"
        garbage = "燃えるゴミ"
        break;
    case 3: // "水"
        garbage = "燃えないゴミ"
        break;
    default: // デフォルト ↑ 以外
        garbage = "回収なし"
        break;
}
document.getElementById("garbage").innerHTML = garbage
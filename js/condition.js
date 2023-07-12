// 2023-07-12 2.week5

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


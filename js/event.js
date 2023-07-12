// 2023-07-05 2.week4
// 2023-07-12 2.week5 

function inputUserName(){
    console.log("Change!!!")
    // console.log("userNameElement")
    var userName = userNameElement.value
    console.log(userName)
    var message = userName + "さん、ようこそ！"
    messageElement.innerHTML = message
}

function order() {
    console.log("Order!")
    var itemName = itemElement.innerHTML
    var price = priceElement.innerHTML
    var quantity = quantityElement.value
    console.log(itemName, price, quantity)

    var totalPrice = price * quantity

    // var message = itemName + "を" + quantity + "つでよろしいでしょうか？"
    var message = `${itemName}を${quantity}つでよろしいでしょうか？ ` // ← ※バッククォート
    message += totalPrice + "円になります"
    messageElement.innerHTML = message
}

var userNameElement = document.getElementById("user_name")
var messageElement = document.getElementById("message")

var itemElement = document.getElementById("item_name")
var priceElement = document.getElementById("price")
var quantityElement = document.getElementById("quantity")


// ' = シングルクォート
// " = ダブルクォート
// ` = バッククォート

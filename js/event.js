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

var userNameElement = document.getElementById("user_name")
var messageElement = document.getElementById("message")

var itemElement = document.getElementById("item_name")
var priceElement = document.getElementById("price")
var quantityElement = document.getElementById("quantity")

function order(params) {
    console.log("Order!")
}
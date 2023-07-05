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
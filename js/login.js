// 2023-09-13 2.week9

function auth(){
    var email = document.getElementsByName("email")[0].value
    var password = document.getElementsByName("password")[0].value

    console.log(email)
    console.log(password)

    if (email == "" || password == "") {
        document.getElementById("error-message").innerHTML = "Emailまたはパスワードを入力してください"
        return false
    } else {
        return true
    }
    
}
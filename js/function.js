// 2023-06-28 2.week3

function calculateTotalPrice(price, amount) { // function statment
    var result = price * amount;
    return result;
}

var totalPrice = calculateTotalPrice(200, 5);
console.log(totalPrice);


// 無名関数 (anonymous function)
const hello = function(name){
    var message = name + "さん、こんにちは！";
    return message;
}

var message = hello("YSE");
console.log(message);


// アロー関数 (arrow function)
const hello2 = (name) => {
    var message = name + "さん、こんにちは！";
    return message;
}

var message = hello2("東京 太郎");
console.log(message);


// html がすべて読み込まれてから実行される(誤動作がなくなる？)
// window.onload = function(){
//     console.log("東京");
// }
window.onload = () =>{
    console.log("東京");
    var message = hello2("YSE");
    console.log(message);
}
// ↑ アロー関数でも無名関数でもいい

console.log("横浜");
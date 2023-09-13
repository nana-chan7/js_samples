// 2023-09-13 2.week9

// <li> にクラス名
console.log("<<< class: city >>>")
var cities = document.getElementsByClassName("city")
console.log(cities)

// HTML Collection では for-in は使わない
// ↑ には余計なものが入っている？から
console.log("--- for in ---")
for (const index in cities) {
    console.log(cities[index].innerHTML) 
}

// Array.from() で配列に変換
console.log("--- Array.from() ---")
for (const index in Array.from(cities)){
    console.log(cities[index].innerHTML)
}

// for-of が一番無難
console.log("--- for of ---")
for (const city of cities) {
    console.log(city.innerHTML)
}

console.log("--- forEach ---")
Array.from(cities).forEach(city => {
    console.log(city.innerHTML)
});


// <ul> にクラス名
console.log("<<< class: menus >>>")
var menus = document.getElementsByClassName("menus")
console.log(menus)

console.log("--- for-of / children ---")
for (const menu of menus) {
    console.log(menu)
    for (const item of menu.children) {
        console.log(item.innerHTML)
    }
}
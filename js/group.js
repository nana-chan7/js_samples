// 2023-09-13 2.week9

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

console.log("--- for Each ---")
Array.from(cities).forEach(city => {
    console.log(city.innerHTML)
});
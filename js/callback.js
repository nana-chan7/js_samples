// コールバック関数
function processArray(values, callback){
    // イテレータブルなデータを繰り返し
    for (const value of values) { // ※ in だと index が帰ってきてしまうので of (資料注意)
            // コールバック関数に引数を渡して実行
            callback(value)
        }
    }

const numbers = [1, 2, 3, 4, 5]

function calculate(value){
    var answer = value * 2
    console.log(answer)
}
processArray(numbers, calculate)
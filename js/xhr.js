// 2023-09-27 3.week2

// APIのURL生成
function getApiURL() {
    const currentURL = location.href;
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    const baseURL = currentURL.replace(fileName, '');
    return baseURL + 'data/persons.json';
};
const API_URL = getApiURL();
console.log(API_URL);

// インスタンス生成
const xhr = new XMLHttpRequest()
// API に非同期通信設定(GET)
xhr.open("GET", API_URL, true)
// リクエスト後の処理
xhr.onload = function(){
    if (xhr.status === 200){ // status-code 200: OK 成功

    // JSONデータ取得
    const json = xhr.responseText
    console.log(json)
    // JSON -> Array & Object
    console.log("--- JSONデータをArrayデータに変換 ---")
    const persons = JSON.parse(json)
    console.log(persons)
    for (const person of persons) {
        console.log(person.name)
    }
    // status-code 
    // error 404: 現在存在しないページ
    // error 505: HTTPプロトコルのバージョンがウェブサーバーによってサポートされていない場合
    }
    else{
        console.log("error!!!")
    }
}

// 実行
xhr.send()  // send: 送る
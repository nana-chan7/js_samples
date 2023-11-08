// ・クエリセレクタ (js/selector.js)
// 資料： js_query selector
/*
DOM（Document Object Model）内の要素をCSSセレクタで検索し、最初に見つかった要素を返すメソッド
document.querySelector()を使用すると、指定されたCSSセレクタに一致するドキュメント内の最初のElementオブジェクトを返す
*/

document.querySelector('タグ名')
document.querySelector('.クラス名')
document.querySelector('#ID名') 

var id = document.querySelector('h1#id') 
// ↑ idは一つしかないのでタグを指定しなくていい(敢えて記述する場合もある)

// 似た動作をするやつ(IDのみ) ↓ 
document.getElementById('ID名')

// ☆ テストに出る↓
// クエリセレクタの親子関係
var elements = document.querySelectorAll('ul.item_list > li');  
// ↑ <ul class='item_list> 内の <li> のみを選択
console.log(elements);

// querySelectorAllメソッド、一致するすべての要素のNodeListを返す

/* -----------------------------------------------------------------------------------*/
// ・イベントリスナー (js/listener.js)
// 資料： 
/*
イベントをJavaScriptで登録
*/
addEventListener()

/* -----------------------------------------------------------------------------------*/
// ・JSON (JavaScript Object Notation)
// 資料： js_async_1
/*
データの交換フォーマットとして使用される軽量なテキストベースの構文
JSONはJavaScriptのオブジェクトリテラルの記法に基づいているが、
多くのプログラミング言語で読み書きが可能
JavaScriptでJSONを扱うには、JSON.parse()とJSON.stringify()メソッドを使用
*/

// オブジェクトをテキストに変換
// JavaScriptのオブジェクトや値をJSONフォーマットに変換するメソッド
JSON.stringifi()

// テキストをオブジェクトに変換
// JSONフォーマットをJavaScriptオブジェクトに変換するメソッド
JSON.parse()

/* -----------------------------------------------------------------------------------*/
// ・非同期処理 (js/search_address.js, xhr.js, promise.js)
// 資料： js_async_1, js_async_2

// ☆ テストに出る↓
// コールバック関数(callback)
// ☆ XMLHttpRequest(XHR)
// ☆ プロミス(Promise)
// ☆ 非同期/待機キーワード(async/await)

// async: 非同期

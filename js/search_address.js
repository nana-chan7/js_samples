// 2023-09-27 3.week2

// APIのURL生成
function getApiURL() {
    const currentURL = location.href
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1)
    const baseURL = currentURL.replace(fileName, '')
    return baseURL + 'data/prefectures.json'
}
const API_URL = getApiURL();
console.log(API_URL);

// 都道府県データ取得(非同期)
const loadPrefectures = async () =>{
    // Fetch API
    // サーバーにアクセスして、レスポンス取得(非同期)
    const response = await fetch(API_URL)
    console.log(response)
    // JSON -> Array & Object
    const prefectures = await response.json()
    console.log(prefectures)

    // プルダウン作成
    prefectures.forEach(prefecture => {
        var option = document.createElement('option')
        option.value = prefecture.code
        option.innerHTML = prefecture.name
        document.getElementById('prefecture').appendChild(option)
    });
}

const ZIPCLOUD_API_URL = "https://zipcloud.ibsnet.co.jp/api/search";
// 郵便番号検索処理 & データを返す（非同期）
const searchAPI = async (zipcode) => {
    if (!zipcode) return;
    // 郵便番号(zipcode)付きの API URL作成
    const query_param = new URLSearchParams({ zipcode: zipcode, })
    const uri = ZIPCLOUD_API_URL + "?" + query_param;
    console.log(uri);
    // データ取得
    const response = await fetch(uri)
    // JSON -> Array & Object
    const data = await response.json()
    return data
}

// クリックイベントハンドラ
const searchHandler = async () => {
    const zipcode = document.getElementById('zipcode').value;
    var data = await searchAPI(zipcode);
    console.log(data)
    var results = data.results[0]
    document.getElementById('prefecture').value = results.prefcode
    document.getElementById('city').value = results.address2 + results.address3
}

// 都道府県プルダウン生成メイン処理
loadPrefectures()
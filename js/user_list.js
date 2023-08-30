// 2023-07-19 2.week6
// 夏休み課題

// 2023-08-30 2.week7
// 解説

// Array
var users = [
    { id: 1, name: 'User1', email: 'user1@example.com', password: 'xxxxxx' },
    { id: 2, name: 'User2', email: 'user2@example.com', password: 'xxxxxx' },
    { id: 3, name: 'User3', email: 'user3@example.com', password: 'xxxxxx' },
];

function loadUsers() {
    var tableBody = document.getElementById('user_table_body');
    tableBody.innerHTML = ''; // テーブルの中身をクリア

    for (const user of users) {
        var row = document.createElement('tr');

        var idCell = document.createElement('td');
        idCell.textContent = user.id;
        row.appendChild(idCell);

        var nameCell = document.createElement('td');
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

        var emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        tableBody.appendChild(row);
    }
}

function regist(){
    console.log("Regist!");

    // Object
    var user = {};
    user.id = users.length + 1;
    user.name = document.getElementById('user_name').value;
    user.email = document.getElementById('email').value;

    users.push(user);

    // テーブルの表示を更新
    updateTable();
}

function updateTable() {
    var tableBody = document.getElementById('user_table_body');
    tableBody.innerHTML = ''; // テーブルの中身をクリア

    // 解説: for-of
    for (const user of users) {
        var row = document.createElement('tr');

        var idCell = document.createElement('td');
        idCell.textContent = user.id;
        row.appendChild(idCell);

        var nameCell = document.createElement('td');
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

        var emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        tableBody.appendChild(row);
    }
}

// 解説: なくてもいい
// ページロード時にデータを表示
// window.addEventListener('DOMContentLoaded', loadUsers);

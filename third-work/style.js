var left = document.getElementById('left');
var right = document.getElementById('right')
var one = document.querySelector('.small-box:nth-child(1) ');
var two = document.querySelector('.small-box:nth-child(2) ');
var three = document.querySelector('.small-box:nth-child(3) ');
var four = document.querySelector('.small-box:nth-child(4) ');
var users = JSON.parse(localStorage.getItem('users')) || [];//从本地获取用户名，密码数据

//覆盖动画实现
left.onclick = function () {
    one.style.opacity = "0";
    two.style.opacity = "0.7";
    three.style.opacity = '1';
    four.style.opacity = '0';
    /*setTimeout(() => {
        one.style.opacity = "0"; // 一秒钟后将透明度设置为1
    }, 1000); // 延迟1秒（1000毫秒）
    setTimeout(() => {
        two.style.opacity = "0.7"; // 一秒钟后将透明度设置为1
    }, 1000); // 延迟1秒（1000毫秒）
    setTimeout(() => {
        three.style.opacity = "1"; // 一秒钟后将透明度设置为1
    }, 1000); // 延迟1秒（1000毫秒）
    setTimeout(() => {
        four.style.opacity = "0"; // 一秒钟后将透明度设置为1
    }, 1000); // 延迟1秒（1000毫秒）*/



    one.style.zIndex = '0'
    two.style.zIndex = '1'
    three.style.zIndex = '1'
    four.style.zIndex = '0'


};

right.onclick = function () {
    one.style.opacity = "0.7";
    two.style.opacity = "0";
    three.style.opacity = '0';
    four.style.opacity = '1';

    /*setTimeout(() => {
        one.style.opacity = "0.7"; // 一秒钟后将透明度设置为1
    }, 0); // 延迟1秒（1000毫秒）
    setTimeout(() => {
        two.style.opacity = "0"; // 一秒钟后将透明度设置为1
    }, 0); // 延迟1秒（1000毫秒）
    setTimeout(() => {
        three.style.opacity = "0"; // 一秒钟后将透明度设置为1
    }, 0); // 延迟1秒（1000毫秒）
    setTimeout(() => {
        four.style.opacity = "1"; // 一秒钟后将透明度设置为1
    }, 0); // 延迟1秒（1000毫秒）*/
    one.style.zIndex = '1'
    two.style.zIndex = '0'
    three.style.zIndex = '0'
    four.style.zIndex = '1'

};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registerForm').addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表单默认提交行为
        var username = document.getElementById('regUsername').value; // 获取注册时输入的用户名
        var password = document.getElementById('regPassword').value; // 获取注册时输入的密码
        //var users = JSON.parse(localStorage.getItem('users')) || [];

        //验证当前输入用户名是否已经被占用
        let usernameFound = users.find(user => user.username === username);
        if (usernameFound) {
            alert('该用户名已被使用');
        } else {
            users.push({ username: username, password: password });
            localStorage.setItem('users', JSON.stringify(users)); // 将用户数据保存到本地存储
            alert('Registration successful');
        };
    });
});



// 为登录表单添加提交事件监听器
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表单默认提交行为
        var loginUsername = document.getElementById('loginUsername').value;
        var loginPassword = document.getElementById('loginPassword').value;
        //var users = JSON.parse(localStorage.getItem('users')) || [];

        //判断用户名，密码是否正确
        let userFound = users.find(user => user.username === loginUsername && user.password === loginPassword);
        if (userFound) {
            alert('登录成功')
        } else {
            alert("账号或密码错误");
        };
    });
});

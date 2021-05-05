
var dangKi = document.querySelector('.dangKi').addEventListener('click', dangKi);

var dangNhap = document.querySelector('.dangNhap').addEventListener('click', dangNhap);

var test = document.getElementById("dangNhap");

function dangNhap() {
    alert("Sai tài khoản hoặc mật khẩu");
}

function dangKi() {
    alert("Tính năng đang phát triển");
}

var course = [
     {
         id: 1,
         name: "JAVASCRIPT",
         coin: 250
     },
     {
        id: 2,
        name: "C++",
        coin: 0
    },
    {
        id: 3,
        name: "PHP",
        coin: 250
    }
 ]

function news(course) {
    return {
        name: course.name,
    }
}

var newCourse = course.map(news);
console.log(newCourse);
let myClass = [];
let classLength = +prompt("Nhap so luong hoc sinh");

for(let i = 1; i <= classLength; i++) {
    myClass.push(prompt("Nhap ho va ten"));
}
myClass.sort();
document.write("<h1> Danh sách đã sắp xếp là </h1>");
for(let i in myClass) {
    document.write( myClass[i] );
    document.write("<br>");
}
let D = new Date();
document.title = 'Bây giờ là ' + D.getHours() +' giờ ' + D.getMinutes() + ' phút';
let enterAge;
do {
    enterAge = prompt('Enter your birthday: ');
} while(parseInt(enterAge) > D.getFullYear());
alert('Tuổi của bạn là: ' + (D.getFullYear() -(enterAge)));
// function getSum(a, b) {
//     //a, b: biến cục bộ
//     return a+b;
// }
// // biến toàn cục
// let a = 100;

//Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?
//1. Tên hàm checkPrime
//2. Tham số (a)
//3. Phần thân
//4. Trả về boolean

function checkPrime(number) {
//number: bien cuc bo
    let check = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number%i==0){
            check = false;
            break;
        }
    }
    return check;
}
function checkPrime1(number) {
//number: bien cuc bo
//     let check = true;
    if(number <2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number%i==0){
            return false;
        }
    }
    return true;
}
// trung ten bien cuc bo va bien toan cuc: khong nen dung
//bien toan cuc
let a = Number(prompt("moi ban nhap so"));
if (checkPrime(a)==true) alert(a + " la so nguyen to");
else alert(a + " khong la so nguyen to");
console.log(a);



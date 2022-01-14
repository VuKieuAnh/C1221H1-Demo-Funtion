function checkEven() {
    let number = Number(prompt("Moi ban nhap vao so"));
    if (number%2==0) return true;
    else return false;
}
function checkEven1() {
    let number = Number(prompt("Moi ban nhap vao so"));
    if (number%2==0) alert("so chan");
    else alert("so le");
}
//1. ten ham: getSquared
//2. tham so: khong co
//3. phan than: nhan 2 lan
//4. du lieu tra ve: so nguyen
// khai bao
function getSquared() {
    let number = Number(prompt("Nhap so ban muon tinh"));
    let result = number*number;
    return result;
}

// loi goi ham: goi ten ham ()

function getSquared1() {
    let number = Number(prompt("Nhap so ban muon tinh"));
    let result = number*number;
    alert(result);
}

//1. tên hàm: getSum
//2. tham so: a, b
//3. phânf thân:
//4: dữ liệu trả về: số nguyên

// khuyến khích:
// độc lập: nhập xuất dữ liệu, làm ở đâu kệ, làm thế nào cũng kệ.
//a và b được gọi là tham số
function getSum(a, b) {
    //không quan tâm dữ liệu vào được lấy từ đâu
    return a+b;
//    .....
}
function getSum1() {
    //lấy dữ liệu
    let a = Number(prompt("Nhap vao so a"));
    let b = Number(prompt("Nhap vao so b"));
    //tính toán
    return a+b;
}
function demo(a, b){
    return a-b;
}

//số 3, số 4 được gọi là đối số
// let a = getSum(3, 4)
// let a = demo(7, 3);

//tên hàm: increase
// tham số: 1 số nguyên
//phần thân: tăng giá trị của số đó lên 2
//trả về: 1 số nguyên khác
function increase(a){
    a= a+2;
    return a;
}
let a = 5;
increase(a);

//tên hàm: pushArray
// tham số: 1 mảng array, 1 số mới number
// phần thân: thêm số number vào cuối mảng
// trả về: không trả về kết quả (void)
function pushArray(array, number) {
    array.push(number);
}
let newArray=[2, 3, 4];
let b = 5;
pushArray(newArray, b);


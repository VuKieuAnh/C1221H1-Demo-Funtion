//1 tên hàm: addNewElement
//2 tham số: (value, index)
//3 cách thực thi:
//4 kiểu dữ liệu trả về: không có void


// biến array phạm vi của nó là toàn cục
let array1 = [3, 4, 5, 6];
// value, và index thì được gọi là tham số
// biến toàn cục (sử dụng toàn bộ chương trình, giá trị của nó sẽ được thay đổi)
function addNewElement(value, index) {
    //value, index chi su dung trong ham
    //neu ma mo rong do dai cua phan tu tenmang[length]
    for (let i = array1.length; i >index ; i--) {
        //bien in chi su dung trong for
        array1[i] = array1[i-1];
    }
    array1[index] = value;

    // value, index, in dc goi la bien cục bộ
}
//số -1, số 2 được gọi là đối số
// addNewElement(-1, 2);

//1 tên hàm: addNewElement1
//2 tham số: (array, value, index)
//3 cách thực thi:
//4 kiểu dữ liệu trả về: không có void
function addNewElement1(array, value, index) {
    //value, index chi su dung trong ham
    //neu ma mo rong do dai cua phan tu tenmang[length]
    for (let i = array.length; i >index ; i--) {
        //bien in chi su dung trong for
        array[i] = array[i-1];
    }
    array[index] = value;

    // value, index, in dc goi la bien cục bộ
}

//1 tên hàm: deleteElement1
//2 tham số: (index)
//3 cách thực thi:
//4 kiểu dữ liệu trả về: không có void

function deleteElement1(array, index) {
    // tạo ra 1 mảng mới
    let newArray=[];
    for (let i = 0; i < index; i++) {
        newArray[i] = array[i]
    }
    for (let i = index; i < array.length -1; i++) {
        newArray[i] = array[i+1];
    }
    return  newArray;

}

let products = ["Iphone 11", "Iphone 11 pro max", "Iphone 12 pro max", "Samsung Galaxy S"];
//hàm để hiển thị danh sách sản phẩm từ mảng vào table
//1. tên hàm: showAllProduct
//2. tham số: không
//3. Thực thi:
// duyệt mảng.
//4. Trả về: void
function showAllProduct() {
    let content = "<table border=\"\">\n" +
        "  <tr>\n" +
        "    <th>ten san pham</th>\n" +
        "    <th></th>\n" +
        "    <th></th>\n" +
        "  </tr>";
    //duyet mang
    for (let i = 0; i < products.length; i++) {
        let temp = "<tr>" +
            "      <td>"+ products[i]+"</td>" +
            "      <td><button onclick='editProduct("+i+")'>Edit</button></td>" +
            "      <td><button onclick='deleteProduct("+i+")'>Xoa</button></td>" +
            "    </tr>";
        content+=temp;
    }

    content += "</table>";
    document.getElementById("content").innerHTML = content;
}
showAllProduct();

// tao moi san pham
//1. tên hàm: createProdcut
//2. tham số: không
//3. Thực thi:
// lay ten san pham tu o input
// push phan tu moi vao mang
//hien thi danh sach lai
//4. Trả về: void
function createNewProduct() {
    let name = document.getElementById("newProduct").value;
    products.push(name);
    showAllProduct();
    document.getElementById("newProduct").value = "";
}
//1. tên hàm: deleteProductById
//2. tham số: index
//3. Thực thi:
// xoa phan tu
// hien thi danh sach lai
//4. Trả về: void
function deleteProduct(index) {
    products.splice(index, 1);
    showAllProduct();
}

function editProduct(index) {
    let newName = prompt("Moi ban nhap ten sp", products[index]);
    products[index] = newName;
    showAllProduct();
}




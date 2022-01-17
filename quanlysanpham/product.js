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
        let temp = "<tr>\n" +
            "      <td>"+ products[i]+"</td>\n" +
            "      <td><button>Edit</button></td>\n" +
            "      <td><button>Xoa</button></td>\n" +
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
}

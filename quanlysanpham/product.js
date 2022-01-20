class Product {
    constructor(name, price, number, color) {
        this.name= name;
        this.price = price;
        this.number = number;
        this.color = color
    }

}
let products =[
    new Product("But thien long", 5000, 20, "xanh"),
    new Product("So ghi chep", 25000, 100, "Hong")
];
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
        "    <th>Gia san pham</th>\n" +
        "    <th>So luong sp</th>\n" +
        "    <th>Mau sac</th>\n" +
        "    <th></th>\n" +
        "    <th></th>\n" +
        "  </tr>";
    //duyet mang
    for (let i = 0; i < products.length; i++) {
        let temp = "<tr>" +
            "      <td>"+ products[i].name+"</td>" +
            "      <td>"+ products[i].price+"</td>" +
            "      <td>"+ products[i].number+"</td>" +
            "      <td>"+ products[i].color+"</td>" +
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
    let price = document.getElementById("price").value;
    let number = document.getElementById("number").value;
    let color = document.getElementById("color").value;
    let newP = new Product(name, price, number, color);
    products.push(newP);
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

function findByName(){
    let newProducts=[];
    //b1: lay du lieu tu o input
    let name = document.getElementById("name").value;
    // tim kiem -> mang
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.includes(name))
            newProducts.push(products[i]);
    }
    // in ra mang do
    let content = "<table border=\"\">\n" +
        "  <tr>\n" +
        "    <th>ten san pham</th>\n" +
        "    <th>Gia san pham</th>\n" +
        "    <th>So luong sp</th>\n" +
        "    <th>Mau sac</th>\n" +
        "    <th></th>\n" +
        "    <th></th>\n" +
        "  </tr>";
    //duyet mang
    for (let i = 0; i < newProducts.length; i++) {
        let temp = "<tr>" +
            "      <td>"+ newProducts[i].name+"</td>" +
            "      <td>"+ newProducts[i].price+"</td>" +
            "      <td>"+ newProducts[i].number+"</td>" +
            "      <td>"+ newProducts[i].color+"</td>" +
            "      <td><button onclick='editProduct("+i+")'>Edit</button></td>" +
            "      <td><button onclick='deleteProduct("+i+")'>Xoa</button></td>" +
            "    </tr>";
        content+=temp;
    }

    content += "</table>";
    document.getElementById("content").innerHTML = content;
}






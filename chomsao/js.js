let ngoisao = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let chomsao = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function findStars(name) {
    for (let i = 0; i < ngoisao.length; i++) {
        if (ngoisao[i]==name) {
            return i;
        }
    }
    return -1;
}

function displayConstellation(){
// b1: Cho nhap vao ten ngoi sao
    let start = prompt("Moi ban nhap vao ten ngoi sao");
// B2: Đưa ra chỉ sổ
    let index = findStars(start);
// B3: Kết luận chòm sao tương ứng
    if (index != -1) {
        alert("Ngoi sao " + start + " thuoc chom sao " + chomsao[index]);
    }
    else {
        alert("Khong tim thay ngoi sao tuong ung");
    }
}
displayConstellation();

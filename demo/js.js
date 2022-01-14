//1. ten ham: temperatureConverter
//2. tham so: 1 tham so (valueNum)
//3. phan than: (valueNum -32)/1.8
//4. tra ve: so thuc
function temperatureConverter(valueNum) {
    let result = (valueNum-32)/1.8;
    return result;
}
function convert() {
    // lay du lieu
    let a = parseFloat(document.getElementById("inputFahrenheit").value);
    // tinh toan
    let result = temperatureConverter(a);
    // in du lieu ra
    document.getElementById("outputCelsius").innerText = result;
}

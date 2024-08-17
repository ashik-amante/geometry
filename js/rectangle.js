function rectangleCalculator(){
    const widthInput = document.getElementById('width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);

    // length

    const lengthInput = document.getElementById('length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);

    // area
    const area = width * length;

    // show result

    const areaResult = document.getElementById('recArea');
    areaResult.innerText = area;
}
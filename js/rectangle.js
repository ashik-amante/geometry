function rectangleCalculator(){
    // const widthInput = document.getElementById('width');
    // const widthText = widthInput.value;
    // const width = parseFloat(widthText);
    const width = getInputValueById('width')
    const length = getInputValueById('length')

    // length

    // const lengthInput = document.getElementById('length');
    // const lengthText = lengthInput.value;
    // const length = parseFloat(lengthText);

    // area
    const area = width * length;

    // show result

    // const areaResult = document.getElementById('recArea');
    // areaResult.innerText = area;
    setInnertext('recArea',area)
}

function getInputValueById(id){
    const inputField = document.getElementById(id);
    const inputfieldText = inputField.value;
    const inputValue = parseFloat(inputfieldText);
    return inputValue
}

function setInnertext(id, value){
    const setValue = document.getElementById(id);
    setValue.innerText = value;
}
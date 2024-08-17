function calculateRhombus(){
    const d1ainput = document.getElementById('d1');
    const d1Text = d1ainput.value;
    const d1 = parseFloat(d1Text)

    // d2

    const d2ainput = document.getElementById('d2');
    const d2Text = d2ainput.value;
    const d2 = parseFloat(d2Text)

    const area = d1 * d2 * 0.5;

    // set valuee
    const RhombusArea = document.getElementById('RhombusArea');
    RhombusArea.innerText = area
}
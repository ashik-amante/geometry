function triangleCalculator(){
    const baseInput = document.getElementById('baseInput');
    const basetext = baseInput.value;
    const base = parseFloat(basetext)
    
    // triangle height
    const heightInput = document.getElementById('heightInput');
    const heightText = heightInput.value;
    const height = parseFloat(heightText)
    
    
    // calculate

    const area = .5 * base * height
    

    const areaspan = document.getElementById('area');
    areaspan.innerText = area
}
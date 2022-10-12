function areaAndVolumeCalc(areaIn, volIn, input) {
    const data = JSON.parse(input);
    const cube = data[0];
    const result = [];
    for(let cube of data) {  
        const current =   {
        area: areaIn.call(cube),
        volume: volIn.call(cube)
    };
    result.push(current);
}
return result;


}
//convert from one distance unit to another by adding a click event listener to a button
//read the value from the input field and get the selected option from the input and output units dropdowns
//calculate and display the converted value in the disabled 

function attachEventsListeners() {
   let buttonConvert =document.getElementById('convert');
   buttonConvert.addEventListener('click', onClick);

   let metricUnits = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254
   }

   function onClick(ev) {
    let fromValue = document.getElementById('inputUnits').value;
    let toValue = document.getElementById('outputUnits').value;
    let inputDistance = Number(document.getElementById('inputDistance').value);
    let outputDistance = document.getElementById('outputDistance');
    let valueInM = inputDistance * metricUnits[fromValue];
    let convertedValue = valueInM / metricUnits[toValue];
    outputDistance.value = convertedValue;
   }
}
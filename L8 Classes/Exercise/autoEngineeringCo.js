function company(arr) {
    let carRegister = {};

    arr.forEach(element => {
        let [brand, model, qty] = element.split(' | ');
        if(!carRegister.hasOwnProperty(brand)) {
            carRegister[brand] = {};
        }
        if(!carRegister[brand].hasOwnProperty(model)) {
            carRegister[brand][model] = 0;
        }
        carRegister[brand][model] += Number(qty);
        
    });
    for(let brand in carRegister) {
        console.log(brand);
        Object.entries(carRegister[brand]).forEach(el => console.log('###' + el[0] +' -> ' + el[1]));
         
    }
}
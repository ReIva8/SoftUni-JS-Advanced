function heroicInventoryTut(array) {
//Create a function that creates a register for the heroes, with their names, level, and items
//The output is a JSON representation of the data for all the heroes you’ve stored. 
//The data must be an array of all the heroes.
let result = [];
    for (let element of array) {
        let tokens = element.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2];
        items = items ? items.split(', ') : [];
        result.push({name, level, items});
    }
    console.log(JSON.stringify(result));
}
heroicInventoryTut(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
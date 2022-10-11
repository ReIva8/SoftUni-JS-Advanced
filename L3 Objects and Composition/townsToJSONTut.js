function townsToJSONTut(arr) {
    let result = [];
    class Town {
        constructor(name, latitude, longitude) {
            this.Town = name;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }
    for (let index = 1; index < arr.length; index++) { //in this case we dont need the headers so we start from 1
        let array = arr[index].split('|').map(t => t.trim()).filter(x => x.length != 0); //trim removes all whitespaces front and back
        let townName = array[0];
        let townLatitude = Number(array[1]).toFixed(2);
        let townLogtitude = Number(array[2]).toFixed(2);
        let town = new Town(townName, townLatitude, townLogtitude);
        result.push(town);
    }
    return JSON.stringify(result);
}
console.log(townsToJSONTut(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));
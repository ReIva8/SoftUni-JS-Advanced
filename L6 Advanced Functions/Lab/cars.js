function solve(input) {
    let cars = [];
    let inheritance = [];

    for (i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        if (command[0] == 'create' && command.length == 2) {
            let car = {
                name: command[1]
            };
            cars.push(car);
        }
        else if (command[0] == 'create' && command.length > 2) {
            let car = {
                name: command[1]
            };
            cars.push(car);
            inheritance.push(`${command[1]} ${command[3]}`);
        }

        else if (command[0] == 'set') {
            for (let car of cars) {
                if (car['name'] == command[1]) { car[command[2]] = command[3]; }
            }
        }

        else if (command[0] == "print") {
            let carToPrint = command[1];
            for (j = 0; j < inheritance.length; j++) {
                let car1 = {};
                let car1name = inheritance[j].split(" ")[0];

                for (let car of cars) {
                    if (car['name'] == car1name) { car1 = car; }
                }
                let car2 = {};
                let car2name = inheritance[j].split(" ")[1];
                for (let car of cars) {
                    if (car['name'] == car2name) { car2 = car; }
                }
                car1 = Object.assign(car1, car2);
                car1['name'] = car1name;
            }

            for (let car of cars) {
                if (car['name'] == carToPrint) {
                    let carStr = JSON.stringify(car);
                    let pr = carStr.split(',');
                    pr.shift();
                    let str = pr.join(',');
                    let resultpr = '';
                    for (t = 0; t < str.length; t++) {
                        if (str[t] !== '"' && str[t] !== "}") { resultpr += str[t]; } }
                    console.log(resultpr);}
            }
        }
    }
}

function townPopulation(list) {
const result = {};

for(const town of list) {
    const tokens = town.split(' <-> ');
    const name = tokens[0];
    const pop = Number(tokens[1]);

    if(result[name] == undefined) {
        result[name] = pop;
    } else {
        result[name] += pop;

    }
}
for(let town in result) {
    console.log(`${town} : ${result[town]}`);
}
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);

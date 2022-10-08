//first table in a document and sums the values in the last column. 
//The result is then displayed in an element with ID "sum".


function sumTable() {
const rows = Array.from(document.querySelectorAll('tr')).slice(1, -1);
let sum = 0;
for(let row of rows) {
    const value = Number(row.lastElementChild.textContent);
    sum+= value;
};
document.getElementById('sum').textContent = sum;
}
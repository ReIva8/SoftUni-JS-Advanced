//must generate a JSON report from the data inside the table, by only taking the columns, which are selected.
//If the checkbox is checked, then the data from this column must be included
// Unchecked columns must be omitted. 
//Create an object with properties for each of its columns
//Store the result in an array and output it as a JSON string 

function generateReport() {

    const output = document.querySelector('#output');
    let checkboxes = Array.from(document.querySelectorAll('input'));
    let tableRows = Array.from(document.querySelectorAll('tbody tr'));
    let result = [];

    for (i = 0; i < tableRows.length; i++) {
        let columns = Array.from(tableRows[i].querySelectorAll('td'));
        let entry = {};
        for (j = 0; j < columns.length; j++) {
            if (checkboxes[j].checked) {
                entry[checkboxes[j].name] = columns[j].textContent;
                result.push(entry);
            }
        }
    }

    result = result.filter((item,
        index) => result.indexOf(item) === index);

    output.value = JSON.stringify(result);
}


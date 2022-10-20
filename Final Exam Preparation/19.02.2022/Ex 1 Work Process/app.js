function solve() {
    //getting the input
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let arr = [firstName, lastName, email, birth, position, salary];
 
    //getting reference to the button in the input section and adding event listener to it
    let btnHire = document.getElementById('add-worker');
    btnHire.addEventListener('click', onHire);
    let tbody = document.getElementById('tbody');
    //let sum = document.getElementById('sum');
 
    function onHire(event) {
        event.preventDefault();
        //validating the input data
        if (firstName.value.length > 0 && lastName.value.length > 0 && email.value.length > 0 && birth.value.length > 0 && position.value.length > 0 && salary.value.length > 0) {
 
            //creating tr, appending it to the tbody
            let tr = document.createElement('tr');
            tbody.appendChild(tr);
 
            //creating td-s and appending them to the newly created tr element
            tr.appendChild(createElements(firstName.value));
            tr.appendChild(createElements(lastName.value));
            tr.appendChild(createElements(email.value));
            tr.appendChild(createElements(birth.value));
            tr.appendChild(createElements(position.value));
            tr.appendChild(createElements(salary.value));
            tr.appendChild(createElements('', 'button'));
 
            //increasing the sum with the corresponding amount of salary
            let temp = Number(document.getElementById('sum').textContent);
            temp += Number(salary.value);
            document.getElementById('sum').textContent = temp.toFixed(2);
 
            //clearing the input fields
            for (let i = 0; i < arr.length; i++) {
                arr[i].value = '';
            }
 
            //getting reference to the buttons inside the table
            let btnFired = Array.from(document.getElementsByClassName('fired'));
            let btnEdit = Array.from(document.getElementsByClassName('edit'));
            btnFired.forEach(x => x.addEventListener('click', onFire));
            btnEdit.forEach(x => x.addEventListener('click', onEdit));
        }
    }
    //function to help in the creation of td-s 
    function createElements(str, indicator) {
        let child = document.createElement('td');
        child.textContent = str;
        if (indicator === 'button') {
            child.innerHTML = `<button class="fired">Fired</button>
            <button class="edit">Edit</button>`
        }
        return child;
    }
 
    function onFire(event) {
        //removing the table data and subtracting the salary from the total budget
        let tr = event.target.parentElement.parentElement;
        tr.remove();
        let salary = Number(event.target.parentElement.parentElement.children[5].textContent);
        let temp = Number(document.getElementById('sum').textContent);
        temp -= Number(salary);
        document.getElementById('sum').textContent = temp.toFixed(2);
 
    }
 
 
    function onEdit(event) {
        //removing the table data
        let tr = event.target.parentElement.parentElement;
        tr.remove();
        //subtracting the salary from the total budget
        let salary = Number(event.target.parentElement.parentElement.children[5].textContent);
 
 
        let temp = Number(document.getElementById('sum').textContent);
        temp -= Number(salary);
        document.getElementById('sum').textContent = temp.toFixed(2);
 
 
        //returning the input data to the initial input section
        let inputData = Array.from(event.target.parentElement.parentElement.children);
        for (let i = 0; i < arr.length; i++) {
            arr[i].value = inputData[i].textContent;
        }
 
    }
}
solve()
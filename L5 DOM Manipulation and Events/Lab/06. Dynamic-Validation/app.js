//dynamically validates an email input field when it is changed
// /If the input is invalid, apply the class "error". 
//Only lowercase Latin characters are allowed 

function validate() {
    const field = document.getElementById('email');
    field.addEventListener('change', onChange);

    function onChange(ev) {
        const mail = field.value.toLowerCase();
        if(!field.value.includes('@') || !field.value.includes('.') || mail !== field.value) {
            ev.target.classList.add('error');
        } else {
            ev.target.classList.remove('error');
        }
    } 
}


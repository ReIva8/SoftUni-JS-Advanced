//changes the color of all even rows when the user clicks a button. 
//Apply the color "Teal" to the target rows.

function colorize() {
    const rows = document.querySelectorAll('tr');
    for (let index = 1; index < rows.length; index+=2) {
        rows[index].style.background = 'teal';        
    }
}
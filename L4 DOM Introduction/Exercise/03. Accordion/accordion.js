//to show more/less information
//When link is clicked again (now reading Less), hide the div and change the text of the link to More

function toggle() {
    let textElement = document.getElementById('extra');
    let buttonElement = document.getElementsByClassName('button')[0];

    if(buttonElement.textContent == 'More') {
        buttonElement.textContent = 'Less';
        textElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        textElement.style.display = 'none';
    }
}
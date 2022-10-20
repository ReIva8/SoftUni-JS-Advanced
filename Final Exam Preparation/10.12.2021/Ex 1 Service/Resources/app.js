window.addEventListener('load', solve);

function solve() {
    let type = document.getElementById("type-product");
    let description = document.getElementById('description');
    let name = document.getElementById('client-name');
    let phone = document.getElementById('client-phone');
    let sendBtn = document.querySelector('button');
    sendBtn.addEventListener('click', sendForm);
    let receivedSection = document.getElementById('received-orders');
    let completedSection = document.getElementById('completed-orders');

    function sendForm(event) {
        event.preventDefault();

        if(description.value.trim().length > 0 && name.value.trim().length > 0 && phone.value.trim().length > 0) {
            receivedSection.innerHTML += `<div class="container">
            <h2>Product type for repair: ${type.value}</h2>
            <h3>Client information: ${name.value}, ${phone.value}</h3>
            <h4>Description of the problem: ${description.value}</h4>
            <button class="start-btn">Start repair</button>
            <button class="finish-btn" disabled>Finish repair</button>`
            description.value = '';
            name.value = '';
            phone.value = '';

            Array.from(receivedSection.getElementsByClassName('start-btn')).forEach(e => e.addEventListener('click', startOrder));
            Array.from(receivedSection.getElementsByClassName('finish-btn')).forEach(e => e.addEventListener('click', finishOrder));

            function startOrder(event) {
                event.preventDefault(event);
                event.target.disabled = true;
                event.target.nextElementSibling.disabled = false;
            }
            function finishOrder(event) {
                event.preventDefault(event);
                let articleToMove = event.target.parentNode;
                articleToMove.remove();
                let buttons = articleToMove.querySelectorAll('button');
                Array.from(buttons).forEach(e => e.remove());
                completedSection.innerHTML += `<div class='container'>${articleToMove.innerHTML}</div>`;
                let clearBtn = document.getElementsByClassName('clear-btn')[0];
                clearBtn.addEventListener('click', clearSection);

                function clearSection(event) {
                    event.preventDefault(event);
                    let divs = completedSection.getElementsByClassName('container');
                    Array.from(divs).forEach(e => e.remove());
                }
            }
        }
    }
}
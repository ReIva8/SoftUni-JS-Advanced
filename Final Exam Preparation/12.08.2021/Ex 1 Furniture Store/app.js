window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let addBTN = document.getElementById('add');
    let furnitureList = document.getElementById("furniture-list");
    let total = document.getElementsByClassName("total-price")[0];
    addBTN.addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        let allInputCorrect = true;
        if (model.value.trim() == ''
            || description.value.trim() == ''
            || Number(year.value) <= 0
            || Number(price.value) <= 0) {
            allInputCorrect = false;
        }
        let rounded = Number(price.value).toFixed(2);
        if (allInputCorrect) {
            furnitureList.innerHTML += `<tr class="info">
            <td>${model.value}</td>
            <td>${rounded}</td>
            <td>
            <button class="moreBtn">More Info</button>
            <button class="buyBtn">Buy it</button>
            </td>
            </tr>
            <tr class="hide">
            <td>Year: ${year.value}</td>
            <td colspan="3">Description: ${description.value}</td>
            </tr>`
            model.value = ""; description.value = ""; year.value = ""; price.value = "";
            let toggle = document.getElementsByClassName('moreBtn');
            for (let i = 0; i < toggle.length; i++) {
                toggle[i].addEventListener('click', showHide);
            }

            let buyBTN = document.getElementsByClassName('buyBtn');
            for (let i = 0; i < buyBTN.length; i++) {
                buyBTN[i].addEventListener('click', buyFurniture);
            }

            function showHide(event) {
                event.preventDefault();
                if (event.target.textContent == 'More Info') {
                    event.target.textContent = 'Less Info';
                    event.target.parentNode.parentNode.nextElementSibling.style = 'display: contents'
                }
                else {
                    event.target.textContent = 'More Info';
                    event.target.parentNode.parentNode.nextElementSibling.style = 'display: none'
                }
            }

            function buyFurniture(event) {
                event.preventDefault();
                let price = Number(event.target.parentNode.parentNode.children[1].textContent);
                let totalPrice = price + Number(total.textContent);
                total.textContent = totalPrice.toFixed(2);
                let tr1 = event.target.parentNode.parentNode;
                let tr2 = tr1.nextElementSibling;
                tr1.remove();
                tr2.remove();
            }
        }
    }
}

window.addEventListener('load', solution);

function solution() {
  let fullName = document.getElementById('fname');
  let mail = document.getElementById('email');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');
  let postalCode = document.getElementById('code');
  let preview = document.getElementById('infoPreview');
  let submitBTN = document.getElementById('submitBTN');
  let editBTN = document.getElementById('editBTN');
  let continueBTN = document.getElementById('continueBTN');
  let divBlock = document.getElementById('block');

  submitBTN.addEventListener('click', validateAndPreview);
  editBTN.addEventListener('click', editInfo);
  continueBTN.addEventListener('click', continueReservation);

  function validateAndPreview(event) {
    if (mail.value.length > 0 && fullName.value.length > 0) {
      preview.innerHTML=`<li>Full Name: ${fullName.value}</li>
      <li>Email: ${mail.value}</li>
      <li>Phone Number: ${phone.value}</li>
      <li>Address: ${address.value}</li>
      <li>Postal Code: ${postalCode.value}</li>`
     
      fullName.value = ''; mail.value = ''; address.value = ''; 
      phone.value = ''; postalCode.value = '';
      submitBTN.disabled = true;
      editBTN.disabled = false;
      continueBTN.disabled = false;
    }}

    function editInfo(event) {
      let elements = preview.children;
      fullName.value = elements[0].textContent.replace('Full Name: ', '');
      mail.value = elements[1].textContent.replace('Email: ', '');
      phone.value = elements[2].textContent.replace('Phone Number: ', '');
      address.value = elements[3].textContent.replace('Address: ', '');
      postalCode.value = elements[4].textContent.replace('Postal Code: ', '');
      preview.innerHTML = '';
      submitBTN.disabled = false;
      editBTN.disabled = true;
      continueBTN.disabled = true;
    }

    function continueReservation(event) {
      divBlock.innerHTML = '<h3>Thank you for your reservation!</h3>';
    }
  }

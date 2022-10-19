function solve() {
  let recipientName = document.getElementById(`recipientName`);
  let titleField = document.getElementById(`title`);
  let messageField = document.getElementById(`message`);
  let addbtn = document.getElementById(`add`);
  let resetBtn = document.getElementById(`reset`);

  resetBtn.addEventListener(`click`, reset);

  let Listbox = document.getElementById(`list`);
  let sentBox = document.querySelector(`.sent-list`);
  let deleteBox = document.getElementsByClassName("delete-list")[0];

  addbtn.addEventListener(`click`, add);

  function add(ev) {
    ev.preventDefault();

    let recipient = recipientName.value;
    let title = titleField.value;
    let message = messageField.value;

    if (recipient != `` && title != `` && message != ``) {
      let li = document.createElement(`li`);
      li.innerHTML = `<h4>Title: ${title}</h4>
              <h4>Recipient Name: ${recipient}</h4>
              <span>${message}</span>
              <div id='list-action'>
                  <button type = "submit" id = "send">Send</button>
                  <button type = "submit" id = "delete">Delete</button>
              </div>`;

      Listbox.appendChild(li);

      recipientName.value = ``;
      titleField.value = ``;
      messageField.value = ``;

      let sendBtn = li.querySelector("#send");
      sendBtn.addEventListener("click", send);
      let deleteBtn = li.querySelector("#delete");
      deleteBtn.addEventListener("click", deletion);

      function send() {
        let sendLi = document.createElement("li");
        sendLi.innerHTML = `<span>To: ${recipient}</span>
                <span>Title: ${title}</span>
                <div> class = "btn">
                    <button type "submit" class= "delete">Delete</button>
                </div>`;
        sentBox.appendChild(sendLi);
        li.remove();

        sendLi.querySelector(".delete").addEventListener("click", deletion);
      }
      function deletion(ev) {
        let deleteLi = document.createElement("li");
        deleteLi.innerHTML = `<span>To: ${recipient}</span>
                <span>Title: ${title}</span>`;
        deleteBox.appendChild(deleteLi);
        ev.target.parentNode.parentNode.remove();
      }
    }
  }
  function reset(ev) {
    ev.preventDefault();
    recipientName.value = "";
    titleField.value = "";
    messageField.value = "";
  }
}
solve();

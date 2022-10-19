// /All fields (title, category, and content) are filled with the correct input
//Title, category, and content are non-empty strings. If empty, the program should not do anything.


window.addEventListener("load", solve);

function solve() {
  const input = {
    title: document.getElementById("post-title"),
    category: document.getElementById("post-category"),
    content: document.getElementById("post-content"),
  };
  const lists = {
    review: document.getElementById("review-list"),
    published: document.getElementById("published-list"),
  };
  document.getElementById("publish-btn").addEventListener("click", publish);
  document.getElementById("clear-btn").addEventListener("click", clear);

  function publish(event) {
    event.preventDefault();

    const title = input.title.value;
    const category = input.category.value;
    const content = input.content.value;
    if (title == '' || category == "" || content == "") {
      return;
    }
    const li = document.createElement('li');
    li.className = 'rpost';
    li.innerHTML = `<article>
        <h4>${title}</h4>
        <p>Category: ${category}</p>
        <p>Content: ${content}</p>
        </article>
        <button class="action-btn edit">Edit</button>
        <button class="action-btn approve">Approve</button>`;

    const editBtn = li.querySelector(".edit");
    const approveBtn = li.querySelector(".approve");
    editBtn.addEventListener("click", edit);
    approveBtn.addEventListener("click", approve);
    lists.review.appendChild(li);

    input.title.value = '';
    input.category.value = '';
    input.content.value = '';

    function edit() {
        input.title.value = title;
        input.category.value = category;
        input.content.value = content;

        li.remove();
    }
    function approve() {
        lists.published.appendChild(li);
        editBtn.remove();
        approveBtn.remove();
    }
  }

  function clear() {
    lists.published.innerHTML = '';
  }
}

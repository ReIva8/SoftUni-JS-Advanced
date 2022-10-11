// create a JS functionality that shows and hides the additional information about users
//When buttons is clicked, the hidden info inside the div should be shown, only if the profile is not locked
//If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working

function lockedProfile() {
    Array.from(document.querySelectorAll(".profile button"))
    .forEach(b => b.addEventListener('click', toggle));

    function toggle(e) {
        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if(isActive) {
            let div = profile.querySelector('div');

            if(e.target.textContent == 'Show more') {
                div.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                div.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}
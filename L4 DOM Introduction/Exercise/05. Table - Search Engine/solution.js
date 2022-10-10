//When the "Search" button is clicked, go through all cells in the table except for the first row
//check if the given input has a match (check for both full words and single letters).
//If rows contain the submitted string, add a class select to that row
//clear the input field and remove all already selected classes 
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rows = document.querySelectorAll('tbody tr');
   let input = document.getElementById('searchField')
   function onClick() {
      for(let row of rows) {
         row.classList.remove('select');
         if(row.innerHTML.includes(input.value)) {
            row.className = 'select';
         }
      }
      input.value = '';
   }
}
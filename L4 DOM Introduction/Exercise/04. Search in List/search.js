//Implement the search function to bold and underline the items from the list which include the text from the search box
//print the number of items the current search matches 
//clear the results of the previous search.
function search() {
   let listElements = document.querySelectorAll('ul#towns li');
   let resultElement = document.getElementById('result');
   let searchText = document.getElementById('searchText').value;
   let matched = 0;

   for(let element of listElements) {
      element.style.fontWeight = 'normal';
      element.style.textDecoration = '';
   }
   for(let element of listElements) {
      let text = element.textContent;

      if(text.match(searchText)) {
         matched++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }
   }
   resultElement.textContent = `${matched} matches found`;
}

//gets a text from textarea, formats the given text
//Generate HTML paragraphs as a string 
//`<p> {text} </p>`) and append it to the div with an id = "output".
//When the [Format] button is clicked, get the text inside the textarea with an id="input" and format it
function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');

  let sentences = input.split('.').filter(s => s.length != 0);

  while(sentences.length > 0) {
    let textForParagraph = sentences.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = textForParagraph;
    output.appendChild(p);
  }

}

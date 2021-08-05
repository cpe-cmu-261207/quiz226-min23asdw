const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const reset = document.getElementById('reset')
const search = document.getElementById('search')
const text = document.getElementById('text')

// define more constants and variables here
const deflength = length.value;
const defcolor = color.value;
const deftext = text.innerHTML;

data = text.innerHTML

search.onclick = () => {
  const word = data.split(' ')
  console.log(word)
  console.log(word.length)
  for(let i =0; i< word.length ; i++){
    if(word[i].length >= length.value){
      word[i] = "<span style='color:"+ color.value+ "'>" + word[i] + "</span>";
    }
  }

  let result = ''
  for(let i =0; i< word.length ; i++){
    result += word[i] + " "
  }

  text.innerHTML = result
}

btn_toggle.onclick = () => {
  if(btn_toggle.innerHTML === "Show Calculation"){
    calculation.innerHTML = 630610749 - length.value;
    btn_toggle.innerHTML = "Show Author"
    author.innerHTML = ""
  }
  else{
      btn_toggle.innerHTML = "Show Calculation"
      author.innerHTML = "630610749 PONGSAKORN RATTANAPAN"
      calculation.innerHTML = "";
        }
  // your code here
}
reset.onclick = () => {
color.value = defcolor
length.value = deflength
text.innerHTML = deftext
  // your code here
}
// more codes for Search and Reset buttons here

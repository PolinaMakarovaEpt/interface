const interF = () => {
  const inputStr = document.getElementById('top-block').value; 
  const inputIndex = document.getElementById('index-block').value;
  const inputSubstr = document.getElementById('substr-block').value;
  const outputForm =document.getElementById('result').innerText = substr(inputStr, inputIndex, inputSubstr); 

}

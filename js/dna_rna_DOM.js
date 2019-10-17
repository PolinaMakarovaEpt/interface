const interF = () => {
  if (document.getElementById('radio-dna').checked) {
    const inputFormDna = document.getElementById('top-block').value,
      outputFormDna = document.getElementById('result').innerText = dna(inputFormDna);
  }
  if (document.getElementById('radio-rna').checked) {
    const inputFormRna = document.getElementById('top-block').value,
      outputFormRna = document.getElementById('result').innerText = rna(inputFormRna);
  }
}

const inform = () => {
  if (document.getElementById('radio-dna').checked) {
    const plHold = document.getElementById('top-block').placeholder = "Введите цепь ДНК, используя быквы G, C, T, A";
    const res = document.getElementById('res').innerText = 'Цепь РНК:';
  }
  if (document.getElementById('radio-rna').checked) {
    const plHold = document.getElementById('top-block').placeholder = "Введите цепь РНК, используя быквы G, C, A, U";
    const res = document.getElementById('res').innerText = 'Цепь ДНК:';
  }
}

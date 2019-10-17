function dna(DNA) {
    let RNA = "";
    DNA = DNA.replace(/[^A-Za-zА-яа-я0-9]/g, '');
  
    if (typeof DNA !== 'string') throw new TypeError("Данные некорректны");
    if (DNA.length === 0) return 'Введите последовательность ДНК';
    for (i = 0; i < DNA.length; i++) {
      if ((DNA[i] === "g") || (DNA[i] === "G")) {
        RNA += "C";
      }
      else if ((DNA[i] === "c") || (DNA[i] === "C")) {
        RNA += "G";
      }
      else if ((DNA[i] === "t") || (DNA[i] === "T")) {
        RNA += "A";
      }
      else if ((DNA[i] === "a") || (DNA[i] === "A")) {
        RNA += "U";
      }
      else {
        return `Некорректное значение "${DNA[i]}"`;
      }
    }
  
    return RNA;
  }
  
  function rna(RNA) {
    let DNA = "";
    RNA = RNA.replace(/[^A-Za-zА-яа-я0-9]/g, '');
  
    if (typeof RNA !== 'string') throw new TypeError("Данные некорректны");
    else if (RNA.length == 0) return 'Введите последовательность РНК';
    for (i = 0; i < RNA.length; i++) {
      if ((RNA[i] === "c") || (RNA[i] === "C")) {
        DNA += "G";
      }
      else if ((RNA[i] === "g") || (RNA[i] === "G")) {
        DNA += "C";
      }
      else if ((RNA[i] === "a") || (RNA[i] === "A")) {
        DNA += "T";
      }
      else if ((RNA[i] === "u") || (RNA[i] === "U")) {
        DNA += "A";
      }
      else {
        return `Некорректное значение "${RNA[i]}"`;
      }
    }
  
    return DNA;
  }
  
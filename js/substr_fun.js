const substr = (str, firstIndex, strLength) => {
    let a = '';
  
    if (firstIndex === '') firstIndex = 0;
    if (strLength === '') strLength = str.length;
  
    
  
    firstIndex = Number(firstIndex);
    strLength = Number(strLength);
  
    if (str.length === 0 || strLength === 0 || firstIndex > str.length) return '';
    if (strLength < 0) strLength = 1;
    if (firstIndex < 0) firstIndex = 0;
    if ((firstIndex + strLength) > str.length) strLength = str.length - firstIndex;
  
    for (let i = firstIndex; i < (firstIndex + strLength); i++) {
      a += str[i];
    }
  
    return a;
  };
  
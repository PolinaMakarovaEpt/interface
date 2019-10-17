const isPalindrome = (str) => {
    if ((typeof str !== 'string') && (typeof str !== 'number')) {
      throw new TypeError('Incorrect data');
    }
  
    str = String(str).toLowerCase();
    str = str.replace(/\s/g, '');
  
    if (str.length === 0) return'Введите корректные данные';
    if (str.length === 1) return 'Это палиндром';
  
    const result = (count) => {
      if (count.length < 2) return 'Это палиндром';
      if (count[0] !== count[count.length - 1]) return 'Это не палиндром';
  
      return result(count.slice(1, -1));
    };
  
    return result(str);
  };
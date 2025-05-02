class Validate {
  go(products) {
    const valid = [];
    console.log(`Начало валидации файла products.json...\n`)
    products.forEach((item, index) => {
      const isValid =
        typeof item === 'object' &&
        typeof item.id === 'number' &&
        typeof item.name === 'string' &&
        typeof item.price === 'number';

      if (isValid) {
        valid.push(item);
        return
      }
      console.warn(`Невалидный элемент на строке ${index + 2}:`, item);
      
    });
    if (products.length > valid.length){
      console.log(`Валидация закончена с ${[products.length - valid.length]} ошибками, подгружено ${valid.length} элементов\n`)
      return valid;
    }
    console.log(`Валидация прошла успешно, подгружено ${valid.length} элементов\n`)
    return valid;
  }

}

module.exports = {Validate}
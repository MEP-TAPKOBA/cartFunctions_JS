class Validate {
  go(products) {
    const valid = [];
    products.forEach((item, index) => {
      const isValid =
        typeof item === 'object' &&
        typeof item.id === 'number' &&
        typeof item.name === 'string' &&
        typeof item.price === 'number';

      if (isValid) {
        valid.push(item);
      } else {
        console.warn(`Невалидный элемент на строке ${index + 2}:`, item);
      }
    });

    return valid;
  }

}

module.exports = {Validate}
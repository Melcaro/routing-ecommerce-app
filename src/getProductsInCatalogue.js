import isArray from 'lodash.isarray';
import isPlainObject from 'lodash.isplainobject';

function getProductsInCatalogue(catalogue) {
  if (isArray(catalogue)) {
    return catalogue;
  } else if (isPlainObject(catalogue)) {
    return Object.values(catalogue).reduce((acc, value) => {
      if (isArray(value)) {
        return [...acc, ...value];
      }
      return [...acc, ...getProductsInCatalogue(value)];
    }, []);
  }
}

export { getProductsInCatalogue };

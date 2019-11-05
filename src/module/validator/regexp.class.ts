export const RegExpValidator = {
  'lowerCase': RegExp(/^(?=.*?[a-z])/),
  'upperCase': RegExp(/^(?=.*?[A-Z])/),
  'digit': RegExp(/^(?=.*?[0-9])/),
  'specialChar': RegExp(/^(?=.*?[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])/),
  'upperCaseOnly': RegExp(/[^A-Z]/g),
  'lowerCaseOnly': RegExp(/[^a-z]/g),
  'digitOnly': RegExp(/[^0-9]/g),
  'specialCharOnly': RegExp(/[^" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/g)
};

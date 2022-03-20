
/**
 * Return wether the given string is numeric or not.
 */
export const isNumericString = (string: string) => {
  if (typeof string !== 'string') {
    return false
  }
  if (string === '') {
    return false
  }
  return !Number.isNaN(parseFloat(string))
}
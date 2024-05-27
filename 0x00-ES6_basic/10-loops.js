export default function appendToEachArrayValue(array, appendString) {
  const Arr = [];
  for (const val of array) {
    Arr.push(appendString + val);
  }

  return Arr;
}

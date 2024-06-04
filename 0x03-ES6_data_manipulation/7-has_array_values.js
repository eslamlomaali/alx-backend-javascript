export default function hasValuesFromArray(set, list) {
  let dict = true;
  list.map((x) => {
    if (!set.has(x)) {
      dict = false;
    }
  });

  return dict;
}

export default function getStudentIdsSum(list) {
  return list.reduce((acc, currV) => acc + currV.id, 0);
}

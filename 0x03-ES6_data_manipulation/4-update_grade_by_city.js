export default function updateStudentGradeByCity(comb, city, newGrades) {
  return comb
    .filter((element) => element.location === city)
    .map((p) => {
      const gs = newGrades.filter((element) => element.studentId === p.id);
      const g = gs.length ? gs[0].g : 'N/A';
      return {
        ...p,
        g,
      };
    });
}

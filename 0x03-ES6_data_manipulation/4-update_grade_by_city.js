export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const newS = student;
    newS.grade = 'N/A';
    for (const grade of newGrades) {
      if (newS.id === grade.studentId) {
        newS.grade = grade.grade;
      }
    }
    return newS;
  });
}

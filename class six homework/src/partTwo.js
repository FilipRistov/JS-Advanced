$.ajax({
  url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
  success: function (response) {
    response = JSON.parse(response);
    avgGradeHigherThanThree(response);
    femaleStudentsWithGradeFive(response);
    malesWhoLivesInSkopje(response);
    averageGradesOfFemales(response);
    maleStudentsWithB(response);
  },
});
let avgGradeHigherThanThree = (students) => {
  console.log("==Average Grade==");
  students
    .filter((s) => s.averageGrade > 3)
    .forEach((s) =>
      console.log(`${s.firstName} ${s.lastName} ${s.averageGrade}`)
    );
};
let femaleStudentsWithGradeFive = (students) => {
  console.log("==Female students with average grade==");
  students
    .filter((s) => s.averageGrade == 5 && s.gender == "Female")
    .forEach((s) => console.log(`${s.firstName} ${s.lastName}`));
};
let malesWhoLivesInSkopje = (students) => {
  console.log("==Males over 18 who lives in Skopje==");
  students
    .filter((s) => s.age > 18 && s.city == "Skopje")
    .forEach((s) => console.log(`${s.firstName} ${s.lastName}`));
};
let averageGradesOfFemales = (students) => {
  console.log("==Average grades of all female students over the age of 24==");
  function sum(currentSum, grade) {
    return (currentSum += grade);
  }
  let femaleAverageGrades = students
    .filter((s) => s.age > 24 && s.gender == "Female")
    .map((s) => s.averageGrade);
  console.log(femaleAverageGrades);
  let avgGrade =
    femaleAverageGrades.reduce(sum, 0) / femaleAverageGrades.length;
  console.log(parseInt(avgGrade));
};
let maleStudentsWithB = (students) => {
  console.log("==Male students with first letter B==");
  students
    .filter((s) => s.firstName[0] == "B" && s.averageGrade > 2)
    .forEach((s) =>
      console.log(`${s.firstName} ${s.lastName} ${s.averageGrade}`)
    );
};

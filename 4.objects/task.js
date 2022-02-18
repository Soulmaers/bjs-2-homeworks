function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;

}

let student01 = new Student('Jonh', 'male', 30);
let student02 = new Student('Viky', 'female', 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;


}
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);

  }
}

Student.prototype.addMarks = function (...mark) {
  this.marks = [];
  mark.forEach(el => this.marks.push(el));

}

Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.forEach(el => sum += el);
  return sum / this.marks.length;

}

Student.prototype.exclude = function (reason) {

  delete this.subjectName;
  delete this.marks;
  this.excluded = reason;
}



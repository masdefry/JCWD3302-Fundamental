// name, role, totalWorkingHour, totalSalary
class Employee {
  name = '';
  role = '';
  totalWorkingHour = 0;
  totalSalary = 0;

  constructor(_name, _role, _totalWorkingHour) {
    this.name = _name;
    this.role = _role;
  }
}

class FullTimeEmployee extends Employee {
  #baseSalary = 100000;
  #overTimeSalary = 75000;

  addWorkingHour(workingHour) {
    this.totalWorkingHour = workingHour;

    return this.calculateTotalSalary();
  }

  calculateTotalSalary() {
    const totalBaseSalary = this.#baseSalary * 6;
    const totalOverTimeSalary =
      (this.totalWorkingHour - 6) * this.#overTimeSalary;

    this.totalSalary = totalBaseSalary + totalOverTimeSalary;
  }
}

const employee01 = new FullTimeEmployee('Defryan', 'FULLTIME');
employee01.addWorkingHour(13);
console.log(employee01);

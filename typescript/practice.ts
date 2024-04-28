/*
class Employee {
  name: string;
  age: number;
  salary: number;
  department: string;

  constructor(name: string, age: number, salary: number, department: string) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.department = department;
  }

  work(hoursWorked: number = 0) {
    console.log(`${this.name} worked for ${hoursWorked} hours.`);
  }
}

class Manager extends Employee {
  teamMembers: Employee[];

  constructor(name: string, age: number, salary: number, department: string, teamMembers: Employee[]) {
    super(name, age, salary, department);
    this.teamMembers = teamMembers;
  }

  conductMeeting() {
    console.log(`${this.name} is conducting a team meeting.`);
  }

  giveRaise(employee: Employee, raiseAmount: number) {
    employee.salary += raiseAmount;
    console.log(`${this.name} gave a raise of $${raiseAmount} to ${employee.name}.`);
  }
}


const employee1 = new Employee("Raina", 32, 50000, "Marketing");
const employee2 = new Employee("Samson", 28, 45000, "Sales");
const employee3 = new Employee("Raja", 40, 65000, "IT");


const manager = new Manager("Abisheik", 45, 80000, "IT", [employee1, employee2, employee3]);


employee1.work(8);
employee2.work(6);
employee3.work(7);

manager.conductMeeting();


manager.giveRaise(employee2, 5000);*/

//polymorphism

class Employee {
  name: string;
  age: number;
  salary: number;
  department: string;

  constructor(name: string, age: number, salary: number, department: string) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.department = department;
  }

  startWork(): void {
    console.log(`${this.name} has started work.`);
  }
}

class Manager extends Employee {
  teamMembers: Employee[];

  constructor(name: string, age: number, salary: number, department: string, teamMembers: Employee[]) {
    super(name, age, salary, department);
    this.teamMembers = teamMembers;
  }

  manageTeam(): void {
    console.log(`${this.name} is managing the team.`);
  }
}

class Intern extends Employee {
  constructor(name: string, age: number, salary: number, department: string) {
    super(name, age, salary, department);
  }

  doInternWork(): void {
    console.log(`${this.name} is doing intern work.`);
  }
}


const employee1 = new Employee('Raina', 32, 50000, 'Marketing');
const employee2 = new Employee('Samson', 28, 45000, 'Sales');


const manager = new Manager('Abisheik', 45, 80000, 'IT', [employee1, employee2]);


const intern = new Intern('Sandeep', 22, 25000, 'IT');

employee1.startWork();
employee2.startWork();


manager.manageTeam();


intern.doInternWork();
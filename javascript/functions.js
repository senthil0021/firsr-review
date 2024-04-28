/*

function ispositive(num)
    {
     return num>0;
    }
    console.log(ispositive(5));
 function findproduct(num1,num2)
 {
    return num1*num2;
 }
 console.log(findproduct(4,5));
 console.log(findproduct);
 let volume=(l,b,h)=>
 {return l*b*h}
 console.log(volume(3,4,5));
 const names=["Ravi","Raina","Suresh","parag","dhoni"];
 const lengthofstring=names.map(function (a)//normal function.
 {
   return a.length;
 });
 console.log(lengthofstring);
 //arrow function;
 const lengthofnames=names.map((s)=>s.length);
 console.log(lengthofnames);
 
 const inventory = [
   { name: "apples", quantity: 2 },
   { name: "bananas", quantity: 0 },
   { name: "cherries", quantity: 5 },
 ];
 
 const result = inventory.find(({name}) => name === "cherries");
 
 console.log(result);
 function isCherries(fruit) {
   return fruit.name === "cherries";
 }
 
 console.log(inventory.find(isCherries));
 const a=[1,2,3,4,5];
 const a2=a.filter((b)=>b>4);
 console.log(a2);
 function greater4(number)
 {
   return number>4;
 }
 console.log(a.filter(greater4));

 function getData(callback) {
  setTimeout(function() {
      callback("hello world");
  }, 2000);
}

function putData(data) {
  console.log(data);
}

getData(putData);

let promise = new Promise(function (resolve, reject) {
    const x = "senthil";
    const y = "senthil";
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});
 
promise.
    then(function () {
        console.log('Success');
    })
    .catch(function () {
        console.log('Error');
    });


*/

    class Employee {
      constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
      }
    
      issalarygreaterthan30(num) {
        return num > 30;
      }
    
      calculateIncome(hours, rate) {
        return hours * rate;
      }
    
      getNameLengths(namesArray) {
        return namesArray.map((name) => name.length);
      }
    
      findManagerEmployee(employeesArray) {
        return employeesArray.find(({ role }) => role === "manager");
      }
    
      filterEmployeesWithSalaryGreaterThan(employeesArray, minSalary) {
        return employeesArray.filter((employee) => employee.salary > minSalary);
      }
    
      Callback(callback) {
        setTimeout(function () {
          callback("Employee data loaded");
        }, 2000);
      }
    
      logData(data) {
        console.log(data);
      }
    
      checkingPassword() {
        let promise = new Promise(function (resolve, reject) {
          const password = "senthil";
          const confirm_password= "senthil";
          if (password === confirm_password) {
            resolve();
          } else {
            reject();
          }
        });
    
        promise
          .then(function () {
            console.log('CORRECT PASWORD');
          })
          .catch(function () {
            console.log('WRONG PASSWORD');
          });
      }
    }
    
    
    const employee1 = new Employee("Sundar", 35, 60000);
    const employee2 = new Employee("Ravi Kumar", 28, 45000);
    const employee3 = new Employee("Suresh", 42, 70000);
    const employee4 = new Employee("Samson", 30, 55000);
    const employee5 = new Employee("Raina", 38, 80000);
    
    
    const employees = [employee1, employee2, employee3, employee4, employee5];
    
    const manager = employee1.findManagerEmployee(employees);
    console.log("Manager:", manager);
    
    
    const highPaidEmployees = employee1.filterEmployeesWithSalaryGreaterThan(employees, 60000);
    console.log("High-paid employees:", highPaidEmployees);
    
    
    const income = employee1.calculateIncome(160, 50); // 160 hours, $50 per hour
    console.log(`${employee1.name}'s income: $${income}`);
    
    
    const nameLengths = employee1.getNameLengths(employees.map((employee) => employee.name));
    console.log("Name lengths:", nameLengths);
    
    
    employee1.Callback(employee1.logData);
    
    
    employee1.checkingPassword() ;
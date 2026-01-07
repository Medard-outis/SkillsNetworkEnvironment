// Sample data representing employee details
const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      { id: 4, name: 'medard', age: 25, department: 'CEO', salary: 160000 },
      //... More employee records can be added here
    ];

// Function to display all employees
// This function generates HTML content for each employee and inserts it into the DOM
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        // Joining the array of strings into a single string
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Function to calculate and display total salaries of all employees
function calculateTotalSalaries() {
    // Using reduce to sum up all salaries
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
}

// Function to filter and display employees from the HR department
function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to find and display an employee by their ID
function findEmployeeById(employeeId) {
    // Using find to locate the employee with the specified ID
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
       }
}
app.service("EmployeeService", function(){

    var employees = [
        {id:1, name:"Dara", position:"Manager"},
        {id:2, name:"Sokha", position:"Developer"}
    ];

    this.getEmployees = function(){
        return employees;
    };

    this.addEmployee = function(emp){
        emp.id = employees.length + 1;
        employees.push(angular.copy(emp));
    };

    this.deleteEmployee = function(index){
        employees.splice(index,1);
    };

    this.getEmployee = function(index){
        return employees[index];
    };

    this.updateEmployee = function(index, emp){
        employees[index] = angular.copy(emp);
    };

});
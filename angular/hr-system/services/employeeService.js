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
        employees.push(emp);
    };

    this.deleteEmployee = function(index){
        employees.splice(index,1);
    };
});

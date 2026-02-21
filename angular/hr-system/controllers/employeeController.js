app.controller("EmployeeController", function($scope, EmployeeService){

    $scope.employees = EmployeeService.getEmployees();

    $scope.newEmployee = {};

    $scope.addEmployee = function(){
        EmployeeService.addEmployee($scope.newEmployee);
        $scope.newEmployee = {};
    };

    $scope.deleteEmployee = function(index){
        if (window.confirm("Do you want to delete this employee?")) {
            EmployeeService.deleteEmployee(index);
        }
    };
});

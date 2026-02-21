app.controller("EmployeeController", function($scope, EmployeeService){

    $scope.employees = EmployeeService.getEmployees();

    $scope.newEmployee = {};

    $scope.addEmployee = function(){
        EmployeeService.addEmployee($scope.newEmployee);
        $scope.newEmployee = {};
    };

    $scope.deleteEmployee = function(index){
        if (window.confirm("តើអ្នកចង់លុបទិន្នន័យនេះមែនទេ?")) {
            EmployeeService.deleteEmployee(index);
        }
    };
});

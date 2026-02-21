app.controller("EmployeeController", function($scope, EmployeeService){

    $scope.employees = EmployeeService.getEmployees();
    $scope.newEmployee = {};
    $scope.editIndex = -1;

    $scope.addEmployee = function(){
        EmployeeService.addEmployee($scope.newEmployee);
        $scope.newEmployee = {};
    };

    $scope.deleteEmployee = function(index){
        EmployeeService.deleteEmployee(index);
    };

    $scope.editEmployee = function(index){
        $scope.editIndex = index;
        $scope.newEmployee = angular.copy(EmployeeService.getEmployee(index));
    };

    $scope.updateEmployee = function(){
        EmployeeService.updateEmployee($scope.editIndex, $scope.newEmployee);
        $scope.newEmployee = {};
        $scope.editIndex = -1;
    };

});
var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/employees", {
        templateUrl: "views/employee-list.html",
        controller: "EmployeeController"
    })
    .when("/add", {
        templateUrl: "views/employee-add.html",
        controller: "EmployeeController"
    })
    .otherwise({
        redirectTo: "/employees"
    });
});

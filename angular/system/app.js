var app = angular.module("hrApp", ["ngRoute"]);

app.config(function($routeProvider){

    $routeProvider
    .when("/employees", {
        templateUrl: "views/list.html?v=20260221",
        controller: "EmployeeController"
    })
    .when("/add", {
        templateUrl: "views/add.html?v=20260221",
        controller: "EmployeeController"
    })
    .otherwise({
        redirectTo: "/employees"
    });

});

app.run(function($rootScope, $templateCache){
    $rootScope.$on("$routeChangeStart", function(){
        $templateCache.removeAll();
    });
});

app.directive("fileModel", ["$parse", function($parse){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind("change", function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0] || null);
                });
            });
        }
    };
}]);

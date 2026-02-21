var app = angular.module("hrApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/list");

    $stateProvider
    .state("list", {
        url: "/list",
        templateUrl: "views/list.html"
    })
    .state("add", {
        url: "/add",
        templateUrl: "views/add.html"
    });

});
"use strict";

angular
  .module("pfapp", ["ngRoute"])
  .config(($routeProvider) =>{
    $routeProvider
    .when("/home", {
      template: "<home></home>"
    })
    .when("/projects", {
      template: "<projects></projects>"
    })
    .when("/resume", {
      template: "<resume></resume>"
    })
    .otherwise("/home", {
      template: "<home></home>"
    })
  });

"use strict";

angular
  .module("pfapp", ["ngRoute"])
  .config(($routeProvider) =>{
    $routeProvider
    .when("/main", {
      template: "<main></main>"
    })
    .when("/projects", {
      template: "<projects></projects>"
    })
    .when("/resume", {
      template: "<resume></resume>"
    })
    .otherwise("/main", {
      template: "<main></main>"
    })
  });

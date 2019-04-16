"use strict";
const projects = {
template: `
<header class="projtop" name="projtop" role="banner">
  <h1>Projects</h1>
</header>

<nav role="navigation">
  <a href="#!/home">About Me</a>
  <a href="#!/projects">Projects</a>
  <a href="#!/resume">Resumé</a>
  <a href="https://www.linkedin.com/in/nicholas-dufour">LinkedIn</a>
  <a href="https://github.com/NicholasDuFour">GitHub</a>
</nav>

<section class="projectlinks" role="main">
    <input type="text" class="proj-filter" placeholder="Filter projects by name, technology used, etc." 
    ng-model="searchText" aria-label="project filter">

  <div class="projectlinks" ng-repeat="item in $ctrl.projectList | filter: searchText">
      <a href="{{ item.link }}">
      <h2 class="proj-name">{{ item.name }}</h2></a>
      <p>{{ item.description }}</p>
      <p class="proj-tech">{{ item.tech }}</p>
  </div>
  
</section>
`,
controller: ["PFService", function(PFService) {
  const vm = this;
  vm.projectList = PFService.returnProjectList();
 }]
}

angular
  .module("pfapp")
  .component("projects", projects)

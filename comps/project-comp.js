"use strict";
const projects = {
template: `
<div class="projtop" name="projtop">
  <h1>Projects</h1>
</div>

<nav>
  <a href="#!/main">About Me</a>
  <a href="#!/projects">Projects</a>
  <a href="#!/resume">Resumé</a>
  <a href="https://www.linkedin.com/in/nicholas-dufour">LinkedIn</a>
  <a href="https://github.com/NicholasDuFour">GitHub</a>
</nav>

<section class="projectlinks">
<a name="top"></a>
    <input type="text" class="proj-filter" placeholder="Filter projects by name, technology used, etc." 
    ng-model="searchText">

  <ul class="projectlinks" ng-repeat="item in $ctrl.projectList | filter: searchText">
   <a href="{{ item.link }}">
      <h3>{{ item.name }}</h3></a>
      <p>{{ item.description }}</p>
    <h5>{{ item.tech }}</h5>
  </ul>
  
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

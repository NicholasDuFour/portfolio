"use strict";
const projects = {
template: `
<header class="proj-top" name="proj-top" role="banner">
  <h1>Projects</h1>
</header>

<navbar></navbar>

<main role="main">
  <section class="proj-intro">
    <p>Here are some of my favorite or notable projects.  For more, check out my 
    <a href="https://github.com/NicholasDuFour">GitHub</a> page.</p>
  </section>

  <section class="proj-links">
      <input type="text" class="proj-filter" placeholder="Filter projects by name, technology used, etc." 
      ng-model="searchText" aria-label="project filter">

    <div class="proj-links" ng-repeat="item in $ctrl.projectList | filter: searchText">
        <a href="{{ item.link }}">
        <h2 class="proj-name">{{ item.name }}</h2></a>
        <p>{{ item.description }}</p>
        <p class="proj-tech">{{ item.tech }}</p>
    </div>
  </section>
</main>

<footer role="contentinfo">
  <p>created by Nicholas DuFour, 2018-2019.</p>
</footer> 
`,
controller: ["PFService", function(PFService) {
  const vm = this;
  vm.projectList = PFService.returnProjectList();
 }]
}

angular
  .module("pfapp")
  .component("projects", projects)

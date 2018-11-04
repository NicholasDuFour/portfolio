"use strict";
const projects = {
template: `
<div class="projtop">
  <h1>Projects</h1>
</div>

<nav>
  <a href="#!/main">About Me</a>
  <a href="#!/projects">Projects</a>
  <a href="#!/resume">Resumé</a>
  <a href="https://www.linkedin.com/in/nicholas-dufour" class="mdi mdi-24px mdi-linkedin">LinkedIn</a>
  <a href="https://github.com/NicholasDuFour" class="mdi mdi-24px mdi-github-circle">GitHub</a>
</nav>

<section class="projectlinks">

    <a href="https://charcard.github.io/FinalProject/">
      <h3>Blank Canvas (made with team of three)</h3></a>
      <p>An art discovery app using the Harvard Art Museums API.</p>
      <h5>Made with HTML, CSS and AngularJS.</h5>

    <a href="https://nicholasdufour.github.io/Midterm-WichHunt/">
      <h3>Sandwich Shop: 'Wich Hunt (made with team of three)</h3></a>
      <p>A point of sale site for a sandwich shop with a witch theme.</p>
      <h5>Made with HTML, CSS and jQuery.</h5>

    <a href="https://nicholasdufour.github.io/angularproject/">
      <h3>Flick Finder (made with team of two)</h3></a>
      <p>A site to assist users with finding a movie to watch, importing data
        from TheMovieDB API.</p>
      <h5>Made with HTML, CSS and AngularJS.</h5>

    <a href="https://nicholasdufour.github.io/todo-lab-p2/">
      <h3>To-Do App</h3></a>
      <p>An app allowing users to manage their to-do list.</p>
      <h5>Made with HTML, CSS and AngularJS.</h5>

    <a href=" https://nicholasdufour.github.io/jq-lab1-p2/">
      <h3>Table Finder</h3></a>
      <p>A simple app in which the user can reserve a table at a restaurant.</p>
      <h5>Made with HTML, CSS and jQuery.</h5>

    <a href="https://nicholasdufour.github.io/js-lab1-p4/">
        <h3>Address Book</h3></a>
      <p>A site enabling the user to add and delete contacts with a stylish layout.</p>
      <h5>Made with HTML, CSS and JavaScript.</h5>
</section>
`
}

angular
  .module("pfapp")
  .component("projects", projects)

"use strict";

const main = {
  template: `
  <header class="top">
    <h1>Nicholas DuFour</h1>
      <h3>Front-End Web Developer</h3>
  </header>

  <nav>
    <a href="#!/main">About Me</a>
    <a href="#!/projects">Projects</a>
    <a href="#!/resume">Resumé</a>
    <a href="https://www.linkedin.com/in/nicholas-dufour">LinkedIn</a>
    <a href="https://github.com/NicholasDuFour">GitHub</a>
  </nav>

    <section class="intro">
      <p>Hello! I'm Nick.  I'm currently a student at the
        Front-End Web Development Bootcamp at Grand Circus in Detroit.
        Check out some of my projects and <a href="#!/resume">resumé</a>, and feel free to reach out if
        you're interested in working together.  Thanks for visiting!
      </p>
    </section>`
}

angular
  .module("pfapp")
  .component("main", main);

"use strict";
const resume = {
  template:`
  <header class="projtop" role="banner">
    <h1>Resumé</h1>
  </header>

  <nav role="navigation">
    <a href="#!/home">About Me</a>
    <a href="#!/projects">Projects</a>
    <a href="#!/resume">Resumé</a>
    <a href="https://www.linkedin.com/in/nicholas-dufour">LinkedIn</a>
    <a href="https://github.com/NicholasDuFour">GitHub</a>
  </nav>
    <section class="resume" role="main">
      <object data="docs/ndresume2019.pdf" alt="my resumé" aria-label="my resumé" type="application/pdf"></object>
    </section>
  `

}
angular
  .module("pfapp")
  .component("resume", resume)

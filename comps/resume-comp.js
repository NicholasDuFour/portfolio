"use strict";
const resume = {
  template:`
  <div class="projtop" role="banner">
    <h1>Resumé</h1>
  </div>

  <nav role="navigation">
    <a href="#!/main">About Me</a>
    <a href="#!/projects">Projects</a>
    <a href="#!/resume">Resumé</a>
    <a href="https://www.linkedin.com/in/nicholas-dufour">LinkedIn</a>
    <a href="https://github.com/NicholasDuFour">GitHub</a>
  </nav>
    <section class="resume" role="main">
      <object data="ndresume2019.pdf" alt="my resumé" type="application/pdf"></object>
    </section>
  `

}
angular
  .module("pfapp")
  .component("resume", resume)

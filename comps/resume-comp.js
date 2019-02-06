"use strict";
const resume = {
  template:`
  <div class="projtop">
    <h1>Resumé</h1>
  </div>

  <nav>
    <a href="#!/main">About Me</a>
    <a href="#!/projects">Projects</a>
    <a href="#!/resume">Resumé</a>
    <a href="https://www.linkedin.com/in/nicholas-dufour">LinkedIn</a>
    <a href="https://github.com/NicholasDuFour">GitHub</a>
  </nav>
    <section class="resume">
      <object data="2019ndresume.pdf" type="application/pdf"></object>
    </section>
  `

}
angular
  .module("pfapp")
  .component("resume", resume)

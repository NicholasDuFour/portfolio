"use strict";

const navbar = {
    template: `  
    <nav role="navigation">
      <a href="#!/home">Home</a>
      <a href="#!/projects">Projects</a>
      <a href="#!/resume">Resumé</a>
      <a href="https://www.linkedin.com/in/nicholas-dufour">LinkedIn</a>
      <a href="https://github.com/NicholasDuFour">GitHub</a>
    </nav>`
}

angular
  .module("pfapp")
  .component("navbar", navbar)
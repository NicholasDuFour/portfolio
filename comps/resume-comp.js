"use strict";

const resume = {
  template:`
  <header class="proj-top" role="banner">
    <h1>Resumé</h1>
  </header>

  <navbar></navbar>
    <section class="resume" role="main">
      <object data="docs/ndresume2019.pdf" alt="my resumé" aria-label="my resumé" type="application/pdf"></object>
    </section>
  `

}
angular
  .module("pfapp")
  .component("resume", resume)

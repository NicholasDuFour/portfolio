"use strict";

const resume = {
  template:`
  <header class="proj-top" role="banner">
    <h1>Resumé</h1>
  </header>

  <navbar></navbar>
  <main role="main">
    <section class="resume">
      <object data="docs/ndresume2019.pdf" alt="my resumé" aria-label="my resumé" type="application/pdf"></object>
    </section>
  </main>
  `

}
angular
  .module("pfapp")
  .component("resume", resume)

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
      <p>Hello! I'm Nick.  I'm a recent graduate of the
        Front-End Web Development Bootcamp at Grand Circus in Detroit.
        Check out some of my projects and <a href="#!/resume">resumé</a>, and feel free to reach out if
        you're interested in working together.  Thanks for visiting!
      </p>
    </section>

    <section class="mob-slideshow">

    <section class="prev" ng-hide="$ctrl.count === 0;">
      <i class="material-icons md-36 prev" ng-click="$ctrl.goBack();">arrow_back_ios</i>
    </section>

      <section class="proj-img-container">
        <a href="{{ $ctrl.mobileDisplay[$ctrl.count].link }}">
          <img class="proj-img" ng-src="{{ $ctrl.mobileDisplay[$ctrl.count].image }}" alt="Screencap of a project I worked on">
        </a>
      </section>

      <section class="next">
        <i class="material-icons md-36 next" ng-click="$ctrl.goForward();">arrow_forward_ios</i>
      </section>

    </section>

    <section class="desk-slideshow">

    <section class="prev" ng-hide="$ctrl.count === 0;">
      <i class="material-icons md-36 prev" ng-click="$ctrl.goBackDesk();">arrow_back_ios</i>
    </section>

      <section class="desk-img-container">
        <a href="{{ $ctrl.deskDisplay[$ctrl.count].link }}">
          <img class="desk-proj-img" ng-src="{{ $ctrl.deskDisplay[$ctrl.count].image }}">
        </a>
      </section>

      <section class="next">
        <i class="material-icons md-36 next" ng-click="$ctrl.goForwardDesk();">arrow_forward_ios</i>
      </section>

    </section>

    `,
    controller: ["PFService", function(PFService){
      const vm = this;
      //Images are imported from the service
      vm.mobileDisplay = PFService.returnMobileImages();
      vm.deskDisplay = PFService.returnDeskImages();
      //Declare counter and functions to go back and forth in the slideshow
      vm.count = 0;
      vm.goForward = () => {
        vm.count++;
        console.log(vm.count);
        if (vm.count > vm.mobileDisplay.length - 1) {
          vm.count = 0;
          console.log("reset");
        }
      }
      vm.goBack = () => {
        vm.count--;
        console.log(vm.count);
      }
  // The mobile and desktop slidehows are different lengths so I made functions to handle both cases
      vm.goForwardDesk = () => {
        vm.count++;
        console.log(vm.count);
        if (vm.count > vm.deskDisplay.length - 1) {
          vm.count = 0;
          console.log("reset");
        }
      }
      vm.goBackDesk = () => {
        vm.count--;
        console.log(vm.count);
      }
    }
  ]
}

angular
  .module("pfapp")
  .component("main", main);
"use strict";

const home = {
  template: `
  <header class="top" role="banner">
    <h1>Nicholas DuFour</h1>
      <h2>Front-End Web Developer</h2>
  </header>

  <navbar></navbar>
  
  <main role="main">
    <section class="intro">
      <p class="intro-part1">Hello! I'm Nick.  I'm a graduate of the
        Front-End Web Development Bootcamp at Grand Circus in Detroit.
      </p>  
      <p class="intro-part2">  I am currently working in the 
        analytics field and learning more all the time about code, data and user experience.
      </p>
      <p class="intro-part3">
        Check out some of my <a href="#!/projects">projects</a> and <a href="#!/resume">resumé</a>, 
        and feel free to reach out if you're interested in working together.  Thanks for visiting!
      </p>
    </section>

    <section class="mob-slideshow">

    <section class="prev">
      <i class="material-icons md-36 prev" ng-click="$ctrl.goBack();">arrow_back_ios</i>
    </section>

      <section class="proj-img-container">
        <a href="{{ $ctrl.mobileDisplay[$ctrl.count].link }}">
          <img class="proj-img" ng-src="{{ $ctrl.mobileDisplay[$ctrl.count].image }}" 
          alt="{{ $ctrl.mobileDisplay[$ctrl.count].alt  }}">
        </a>
      </section>

      <section class="next">
        <i class="material-icons md-36 next" ng-click="$ctrl.goForward();">arrow_forward_ios</i>
      </section>

    </section>

    <section class="desk-slideshow">
    
    <section class="prev">
      <i class="material-icons md-36 prev" ng-click="$ctrl.goBackDesk();">arrow_back_ios</i>
    </section>

      <section class="desk-img-container">
        <a href="{{ $ctrl.deskDisplay[$ctrl.count].link }}">
          <img class="desk-proj-img" ng-src="{{ $ctrl.deskDisplay[$ctrl.count].image }}" 
          alt="{{ $ctrl.deskDisplay[$ctrl.count].alt  }}">
        </a>
      </section>

      <section class="next">
        <i class="material-icons md-36 next" ng-click="$ctrl.goForwardDesk();">arrow_forward_ios</i>
      </section>

    </section>
  </main>
  <footer role="contentinfo"></footer>
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
        if (vm.count < 0 ){
          vm.count = vm.mobileDisplay.length - 1;
        }
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
        if (vm.count < 0 ){
          vm.count = vm.deskDisplay.length - 1;
        }
      }
    }
  ]
}

angular
  .module("pfapp")
  .component("home", home);

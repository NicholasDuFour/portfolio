"use strict";

function PFService() {
  const mobileImages = [
    {
      image: "images/bc-mob1.png",
      link: "https://nicholasdufour.github.io/FinalProject/"
    },
    {
      image: "images/bc-mob2.png",
      link: "https://nicholasdufour.github.io/FinalProject/"
    },
    {
      image: "images/bc-mob3.png",
      link: "https://nicholasdufour.github.io/FinalProject/"
    },
    {
      image: "images/wh-mob1.png",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/"
    },
    {
      image: "images/wh-mob2.png",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/"
    },
    {
      image: "images/wh-mob3.png",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/"
    },
    {
      image: "images/todo-mob1.png",
      link: "https://nicholasdufour.github.io/todo-lab-p2/"
    }
  ];

  const deskImages = [
    {
      image: "images/bc-desk1.png",
      link: "https://nicholasdufour.github.io/FinalProject/"
    },
    {
      image: "images/bc-desk2.png",
      link: "https://nicholasdufour.github.io/FinalProject/"
    },
    {
      image: "images/wh-desk1.png",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/"
    },
    {
      image: "images/wh-desk2.png",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/"
    },
    {
      image: "images/wh-desk3.png",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/"
    },
    {
      image: "images/ff-desk1.png",
      link: "https://nicholasdufour.github.io/angularproject/"
    },
    {
      image: "images/ff-desk2.png",
      link: "https://nicholasdufour.github.io/angularproject/"
    },
    {
      image: "images/ff-desk3.png",
      link: "https://nicholasdufour.github.io/angularproject/"
    },
    {
      image: "images/todo-desk.png",
      link: "https://nicholasdufour.github.io/todo-lab-p2/"
    },
    {
      image: "images/tf-desk.png",
      link: "https://nicholasdufour.github.io/todo-lab-p2/"
    }
  ];

  const returnMobileImages = () =>{
    return mobileImages;
  }

  const returnDeskImages = () =>{
    return deskImages;
  }

  return {
    returnMobileImages,
    returnDeskImages
  }
}
angular
  .module("pfapp")
  .factory("PFService", PFService);

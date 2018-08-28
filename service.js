"use strict";

function PFService() {
  const mobileImages = [
    {
      image: "images/bc-mob1.png",
      link: "https://charcard.github.io/FinalProject/"
    },
    {
      image: "images/bc-mob2.png",
      link: "https://charcard.github.io/FinalProject/"
    },
    {
      image: "images/bc-mob3.png",
      link: "https://charcard.github.io/FinalProject/"
    },
    {
      image: "images/wh-mob1.png",
      link: "https://rawgit.com/iamkevinw/Midterm/master/index.html"
    },
    {
      image: "images/wh-mob2.png",
      link: "https://rawgit.com/iamkevinw/Midterm/master/index.html"
    },
    {
      image: "images/wh-mob3.png",
      link: "https://rawgit.com/iamkevinw/Midterm/master/index.html"
    },
    {
      image: "images/todo-mob1.png",
      link: "https://rawgit.com/NicholasDuFour/todo-lab-p2/master/index.html"
    }
  ];

  const deskImages = [
    {
      image: "images/bc-desk1.png",
      link: "https://charcard.github.io/FinalProject/"
    },
    {
      image: "images/bc-desk2.png",
      link: "https://charcard.github.io/FinalProject/"
    },
    {
      image: "images/wh-desk1.png",
      link: "https://rawgit.com/iamkevinw/Midterm/master/index.html"
    },
    {
      image: "images/wh-desk2.png",
      link: "https://rawgit.com/iamkevinw/Midterm/master/index.html"
    },
    {
      image: "images/wh-desk3.png",
      link: "https://rawgit.com/iamkevinw/Midterm/master/index.html"
    },
    {
      image: "images/ff-desk1.png",
      link: "https://rawgit.com/NicholasDuFour/angularproject/master/index.html"
    },
    {
      image: "images/ff-desk2.png",
      link: "https://rawgit.com/NicholasDuFour/angularproject/master/index.html"
    },
    {
      image: "images/ff-desk3.png",
      link: "https://rawgit.com/NicholasDuFour/angularproject/master/index.html"
    },
    {
      image: "images/todo-desk.png",
      link: "https://rawgit.com/NicholasDuFour/todo-lab-p2/master/index.html"
    },
    {
      image: "images/tf-desk.png",
      link: "https://rawgit.com/NicholasDuFour/jq-lab1-p2/master/jq-lab1-p2-index.html"
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
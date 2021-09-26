"use strict";

function PFService() {
  const mobileImages = [
    {
      name: "Blank Canvas (made with team of three)",
      image: "images/jpegs/bc-mob1.jpg",
      link: "https://nicholasdufour.github.io/FinalProject/",
      alt: "A shot from behind of a man staring at a painting in a museum",
    },
    {
      name: "Blank Canvas (made with team of three)",
      image: "images/jpegs/bc-mob2.jpg",
      link: "https://nicholasdufour.github.io/FinalProject/",
      alt: "A silver jewelry piece with info underneath",
    },
    {
      name: "Blank Canvas (made with team of three)",
      image: "images/jpegs/bc-mob3.jpg",
      link: "https://nicholasdufour.github.io/FinalProject/",
      alt: "A blue and white piece of jewelry with info underneath",
    },
    {
      name: "'Wich Hunt (made with team of three)",
      image: "images/jpegs/wh-mob1.jpg",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/",
      alt: "A witch on a broom with a header and small cauldron",
    },
    {
      name: "'Wich Hunt (made with team of three)",
      image: "images/jpegs/wh-mob2.jpg",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/",
      alt: "A burger with description and 'Add' button underneath",
    },
    {
      name: "'Wich Hunt (made with team of three)",
      image: "images/jpegs/wh-mob3.jpg",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/",
      alt: "A popup box listing an example user's order info and total bill",
    },
    {
      name: "To Do App",
      image: "images/jpegs/todo-mob1.jpg",
      link: "https://nicholasdufour.github.io/todo-lab-p2/",
      alt: "A list of tasks such as 'Get groceries' with some tasks crossed out",
    }
  ];

  const deskImages = [
    {
      name: "Blank Canvas (made with team of three)",
      image: "images/jpegs/bc-desk1.jpg",
      link: "https://nicholasdufour.github.io/FinalProject/",
      alt: "A shot from behind of a man staring at a painting in a museum"
    },
    {
      name: "'Wich Hunt (made with team of three)",
      image: "images/jpegs/wh-desk1.jpg",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/",
      alt: "A header reading ' 'Wich Hunt' above 3 slices of bread with toppings",
    },
    {
      name: "Flick Finder (made with team of two)",
      image: "images/jpegs/ff-desk1.jpg",
      link: "https://nicholasdufour.github.io/angularproject/",
      alt: "Three images from popular movies plus a search bar and link to a user's watchlist",
    },
    {
      name: "To-Do App",
      image: "images/jpegs/todo-desk.jpg",
      link: "https://nicholasdufour.github.io/todo-lab-p2/",
      alt: "A list of tasks such as 'Get groceries' with some tasks crossed out",
    }
  ];

  const returnMobileImages = () =>{
    return mobileImages;
  }

  const returnDeskImages = () =>{
    return deskImages;
  }

  const projectList = [
    {
      link: "https://nicholasdufour.github.io/FinalProject/",
      name: "Blank Canvas (made with team of three)",
      description: "An art discovery app using the Harvard Art Museums API.",
      tech: "Made with HTML, CSS and AngularJS.",
    },
    {
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/",
      name: "Sandwich Shop: 'Wich Hunt (made with team of three)",
      description: "A point of sale site for a sandwich shop with a witch theme.",
      tech: "Made with HTML, CSS and jQuery.",
    },
    {
      link: "https://nicholasdufour.github.io/angularproject/",
      name: "Flick Finder (made with team of two)",
      description: "A site to assist users with finding a movie to watch, importing data from TheMovieDB API.",
      tech: "Made with HTML, CSS and AngularJS.",
    },
    {
      link: "https://nicholasdufour.github.io/todo-lab-p2/",
      name: "To-Do App",
      description: "An app allowing users to manage their to-do list.",
      tech: "Made with HTML, CSS and AngularJS.",
    }
  ];

  const returnProjectList = () =>{
    return projectList;
  }

  return {
    returnMobileImages,
    returnDeskImages,
    returnProjectList
  }
}
angular
  .module("pfapp")
  .factory("PFService", PFService);

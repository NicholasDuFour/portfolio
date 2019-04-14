"use strict";

function PFService() {
  const mobileImages = [
    {
      image: "images/jpegs/bc-mob1.jpg",
      link: "https://nicholasdufour.github.io/FinalProject/",
      alt: "A shot from behind of a man staring at a painting in a museum",
    },
    {
      image: "images/jpegs/bc-mob2.jpg",
      link: "https://nicholasdufour.github.io/FinalProject/",
      alt: "A silver jewelry piece with info underneath",
    },
    {
      image: "images/jpegs/bc-mob3.jpg",
      link: "https://nicholasdufour.github.io/FinalProject/",
      alt: "A blue and white piece of jewelry with info underneath",
    },
    {
      image: "images/jpegs/wh-mob1.jpg",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/",
      alt: "A witch on a broom with a header and small cauldron",
    },
    {
      image: "images/jpegs/wh-mob2.jpg",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/",
      alt: "A burger with description and 'Add' button underneath",
    },
    {
      image: "images/jpegs/wh-mob3.jpg",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/",
      alt: "A popup box listing an example user's order info and total bill",
    },
    {
      image: "images/jpegs/todo-mob1.jpg",
      link: "https://nicholasdufour.github.io/todo-lab-p2/",
      alt: "A list of tasks such as 'Get groceries' with some tasks crossed out",
    }
  ];

  const deskImages = [
    {
      image: "images/jpegs/bc-desk1.jpg",
      link: "https://nicholasdufour.github.io/FinalProject/",
      alt: "A shot from behind of a man staring at a painting in a museum"
    },
    {
      image: "images/jpegs/bc-desk2.jpg",
      link: "https://nicholasdufour.github.io/FinalProject/",
      alt: "A popup box with a painting and information about the piece",
    },
    {
      image: "images/jpegs/wh-desk1.jpg",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/",
      alt: "A header reading ' 'Wich Hunt' above 3 slices of bread with toppings",
    },
    {
      image: "images/jpegs/wh-desk2.jpg",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/",
      alt: "2 sandwich items with images, descriptions and prices",
    },
    {
      image: "images/jpegs/wh-desk3.jpg",
      link: "https://nicholasdufour.github.io/Midterm-WichHunt/",
      alt: "A popup box listing an example user's order info and total bill",
    },
    {
      image: "images/jpegs/ff-desk1.jpg",
      link: "https://nicholasdufour.github.io/angularproject/",
      alt: "Three images from popular movies plus a search bar and link to a user's watchlist",
    },
    {
      image: "images/jpegs/ff-desk2.jpg",
      link: "https://nicholasdufour.github.io/angularproject/",
      alt: "A grid of boxes with movie titles, posters and more information",
    },
    {
      image: "images/jpegs/ff-desk3.jpg",
      link: "https://nicholasdufour.github.io/angularproject/",
      alt: "A popup box containing detailed information about a movie title",
    },
    {
      image: "images/jpegs/todo-desk.jpg",
      link: "https://nicholasdufour.github.io/todo-lab-p2/",
      alt: "A list of tasks such as 'Get groceries' with some tasks crossed out",
    },
    {
      image: "images/jpegs/tf-desk.jpg",
      link: "https://nicholasdufour.github.io/todo-lab-p2/",
      alt: "A grid of 9 numbered circles representing restaurant tables",
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
    },
    {
      link: "https://nicholasdufour.github.io/contact-cards/",
      name: "Contact Cards",
      description: "A React app allowing users to add or delete contacts.",
      tech: "Made with HTML, CSS and ReactJS.",
    },
    {
      link: "https://nicholasdufour.github.io/jq-lab1-p2/",
      name: "Table Finder",
      description: "An app in which the user can reserve a table at a restaurant.",
      tech: "Made with HTML, CSS and jQuery.",
    },
    {
      link: "https://nicholasdufour.github.io/api-lab/",
      name: "Simple Reddit",
      description: "Project using the Reddit API to retrieve & display the ten most popular posts on the 'aww' subReddit",
      tech: "Made with HTML, CSS and jQuery.",
    },
    {
      link: "https://nicholasdufour.github.io/js-lab1-p4/",
      name: "Address Book",
      description: "A site enabling the user to add and delete contacts with a stylish layout.",
      tech: "Made with HTML, CSS and JavaScript.",
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

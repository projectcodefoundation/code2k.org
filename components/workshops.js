import {
  faAppStoreIos,
  faDiscord,
  faPython,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faCode,
  faCubes,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

export const workshops = [
  {
    icon: faPython,
    title: "Introduction to Python",
    description: [
      "Python is a versatile and powerful programming language used everywhere from websites to machine learning. Known for its English-like syntax, it is also easy for beginners to learn. In this workshop, we'll go over the basics of the language and make some simple programs!",
      "We recommend this class for students who have little to no prior programming experience.",
    ],
    dates: [
      new Date("2021-06-27T17:00:00-0700"),
      new Date("2021-07-03T17:00:00-0700"),
      new Date("2021-07-11T17:00:00-0700"),
    ],
    links: [
      "https://us02web.zoom.us/meeting/register/tZIlcuGurz4uGtUifT4pEhO7Ci-IWgai6eTD",
      "https://us02web.zoom.us/meeting/register/tZ0tdeChpzgtEtatmOn2kKTzaZouwl1rlouD",
      "https://us02web.zoom.us/meeting/register/tZAoceytqDkqGdIl5fjI863SQojbWnyIA3RF",
    ],
    instructors: [
      "Franklin Wang",
      "Riley Kong",
      "Michael Song",
      "Raymond Shao",
    ],
  },
  {
    icon: faGamepad,
    title: "Making Simple Games with Pygame",
    description:
      "Finished learning basic Python and want to do more? In this course, we'll explore a library called Pygame, and how to create graphical user interfaces. We'll use Pygame to create more complicated games using graphics, movement, keyboard controls, mouse controls, and more. By the end of the course, students will have created a full-fledged, working game of their own.",
    dates: [],
    links: [],
    instructors: ["Oliver Ni", "Riley Kong", "Franklin Wang", "Jennifer Song"],
    prereqs: "Knowledge of Python, or Intro to Python",
    grades: "6-9",
  },
  {
    icon: faDiscord,
    title: "Making Discord Bots with Python",
    description: [
      "Already know Python and want to create something cool? In this workshop, you'll learn how to use the discord.py library to make bots for the chat platform Discord. We'll start with the basics and progress to make a simple game. You’ll also learn how to use the bot to create channels, kick or ban members, and more. In addition, you will be given a brief introduction on some good practices in making bots.",
      "Afterwards, our mentors will guide you to make your very own Discord bot that can do whatever you want, as well as help you host the bot 24/7 for your own use.",
    ],
    dates: [
      new Date("2021-07-25T17:00:00-0700"),
      new Date("2021-07-31T17:00:00-0700"),
    ],
    links: [
      "https://us02web.zoom.us/meeting/register/tZUudumrqTwqE9Mbq0scz5A6zUYiatbjDkjm",
      "https://us02web.zoom.us/meeting/register/tZcud-igrjgoHNWiQxS0Z1hO6LgxXpk-c5Pg",
    ],
    instructors: ["Oliver Ni", "Kyle He"],
    prereqs:
      "Learned Python before the event; know basics like data types, operators, functions, imports; comfortable with working on projects",
    grades: "7-9",
  },
  {
    icon: faUnity,
    title: "Unity 3D Game Development",
    description:
      "Have you ever wanted to make 3D games? At first, this may seem really complicated, but Unity’s 3D game engine makes it much easier to create all sorts of 3D games that you can share with your friends! In this workshop, we will walk you through the Unity Game Engine, showing you how to add a variety of features to your game, such as keeping track of score, moving the player, and doing physics simulations. In the end you will be able to create your own 3D game with the help of our mentors!",
    dates: [new Date("2021-07-18T13:00:00-0700")],
    links: [
      "https://us02web.zoom.us/meeting/register/tZEuf-GurzsoE9TqymdwLIciaXidgmD1wy-E",
    ],
    instructors: ["Oliver Ni", "Kyle He", "Franklin Wang"],
    prereqs:
      "Familiarity with languages like Java, C#, C++, and object-oriented programming.",
    grades: "7-10",
  },
  {
    icon: faCode,
    title: "Website Design",
    description:
      "Each day, millions of people use the Internet to access all sorts of different websites. All of these websites have a foundation built from HTML. In this workshop, you will learn how to code in HTML to design your own basic webpage! We’ll first guide you through the process of creating a simple website, and provide you with the tools to make your own website totally unique and yours.",
    dates: [new Date("2021-07-10T13:00:00-0700")],
    links: [
      "https://us02web.zoom.us/meeting/register/tZMrf-qhqz0rHdT1mk2jeAWq9kYzdx6ZnEPe",
    ],
    instructors: ["Riley Kong", "Michael Song", "Jocelyn Tao"],
  },
  {
    icon: faAppStoreIos,
    title: "iOS App Development",
    description:
      "Learn how to create a pomodoro timer and get introduced to the world of iOS app creation! By the end of the course, students will have created their own pomodoro timer app to help them with their studies. They will have gained a base knowledge that will help them towards creating their own iOS apps.",
    dates: [
      new Date("2021-07-03T13:00:00-0700"),
      new Date("2021-07-17T13:00:00-0700"),
    ],
    links: [
      "https://us02web.zoom.us/meeting/register/tZcucuihqT0jHdAh8j2YtNwc4i0Sqjw9lc2w",
      "https://us02web.zoom.us/meeting/register/tZAvcOyhqDIvH9D5flAP4-XCWk2QfIajieP2",
    ],
    instructors: ["Jeremy Tow", "Adelina"],
    prereqs:
      "Have a Mac with the latest version of Xcode downloaded, basic knowledge of programming in any language.",
    grades: "7–10",
  },
  {
    icon: faCubes,
    title: "3D Modeling",
    description:
      "In this workshop, you will learn how to create your own 3D object using the 3D modeling tools TinkerCAD and Blender. These models may also be used in animations or games. During this workshop, we will walk through some basic features of various modelling programs. Afterwards, our mentors will help you through the process of making your own model!",
    dates: [new Date("2021-08-07T17:00:00-0700")],
    links: [
      "https://us02web.zoom.us/meeting/register/tZwvceCgrjMiH9ycdqgLEWvH9ouKm_fdytyF",
    ],
    instructors: ["Raymond Shao"],
    prereqs: "Download Blender at https://www.blender.org/download/",
    grades: "7–9",
  },
  {
    icon: faBrain,
    title: "Machine Learning with Teachable Machine",
    description:
      "These days, lots of companies use buzzwords like “artificial intelligence” and “machine learning” to promote themselves, but have you ever wondered what exactly is machine learning? In this workshop, you will harness the power of machine learning by using Teachable Machine to recognize images, sound, and more! During this workshop, we will walk you through an example app to get you familiar with how machine learning works. Afterwards, our mentors will help guide you through making your own unique application of machine learning!",
    dates: [new Date("2021-07-30T17:00:00-0700")],
    links: [
      "https://us02web.zoom.us/meeting/register/tZUufuusqj8oHda9H5FKlDwwCye8UCVyIOJh",
    ],
    instructors: ["Franklin Wang"],
    prereqs: "Python knowledge or Intro to Python",
    grades: "7–10",
  },
];

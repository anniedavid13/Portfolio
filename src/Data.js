import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin, FaGithub, FaMobile } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.png"
import app1 from "./assets/app1.png"
import app2 from "./assets/app2.png";
import app3 from "./assets/app3.png";
import app4 from "./assets/app4.png";
import web1 from "./assets/web1.png";
import web2 from "./assets/web2.png";
import web3 from "./assets/web3.png";
import web4 from "./assets/web4.png";
import web5 from "./assets/web5.png";
import web6 from "./assets/web6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaGithub />,
  <FaInstagram />,
  <FaLinkedin />,
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Annie David"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+918826478935"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "anniedavid407@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma /> , <FaMobile />]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Flutter Developer",
    company: "Bennett University"
  },
  {
    di: 2,
    year: "2021",
    position: "HR Associate",
    company: "Homeflic WeGrow"
  },

]
export const finishes = [
  {
    id: 1,
    number: '8+',
    itemName: " Months of being Web Developer"
  },
  {
    id: 2,
    number: "1+",
    itemName: "Years of being App Developer"
  },
  {
    id: 3,
    number: "10+",
    itemName: "Designed Mobile Applications"
  },
  {
    id: 4,
    number: "8+",
    itemName: "Web Development Projects Completed"
  }
]
export const workImages = [
  {
    id: 1,
    img: web1,
    name: "Spotify Clone",
    category: "web",
    git: "https://github.com/anniedavid13/spotify-clone",
    link: ""
  },
  {
    id: 2,
    img: web4,
    name: "aMovies using TMDB Api",
    category: "web",
    git: "https://github.com/anniedavid13/aMovies",
    link: "https://amovies.netlify.app/"
  },
  {
    id: 3,
    img: web3,
    name: "Web Clock ",
    category: "web",
    git: "https://digitalclock-by-anna.netlify.app/",
    link: "https://github.com/anniedavid13/DigitalClock"
  },
  {
    id: 4,
    img: web6,
    name: "To-do list with FireBase",
    category: "web",
    git: "https://github.com/anniedavid13/React-to-do",
    link: ""

  },
  {
    id: 5,
    img: web5,
    name: "Weather Website using OpenWeatherAPI",
    category: "web",
    git: "https://github.com/anniedavid13/WeatherForecast",
    link: "https://weatherforecastbyanna.netlify.app/"
  },
  {
    id: 6,
    img: web2,
    name: "Simon Game",
    category: "web",
    git: "https://simongamebyanna.netlify.app/",
    link: "https://github.com/anniedavid13/SimonGame"
  },

  {
    id: 7,
    img: app1,
    name: "Weather App using OpenWeatherAPI",
    category: 'app',
    git: "https://github.com/anniedavid13/WeatherApp.git",
    link: " "
  },
  {
    id: 8,
    img: app2,
    name: "Book App",
    category: "app",
    git: "https://github.com/anniedavid13/BookApp",
    link: " "
  },
  {
    id: 9,
    img: app3,
    name: "NewsAPP UI",
    category: "app",
    git: "https://github.com/anniedavid13/NewsApp-UI",
    link: " "

  },
  {
    id: 10,
    img: app4,
    name: "MovieDate",
    category: "app",
    git: "https://github.com/anniedavid13/NewsApp-UI",
    link: " "
    
  },

]


export const workNavs = [
  "All", "Web", "App"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Noida, Uttar Pradesh, India"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "anniedavid407@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+918826478935"
  }
]
import cocktails from '../assets/images/cocktails.png';
import dragonBall from '../assets/images/dragon-ball.png';
import quickTrivia from '../assets/images/quick-trivia.png';
import portfolio from '../assets/images/portfolio.png';
import { techsData } from './TechsData.jsx';

export const projectsData = {
  cocktails: {
    name: 'Cocktails',
    image: cocktails,
    codeUrl: 'https://github.com/Tachi6/cocktails',
    viewUrl: 'https://cocktails-tachi6.netlify.app/',
    infoText: 'Busca inspiración y recetas de cocktails. Prueba y valora las creaciones.',
    technologies: [techsData.html, techsData.css, techsData.js],
  },
  dragonBall: {
    name: 'Dragon Ball Z',
    image: dragonBall,
    codeUrl: 'https://github.com/Tachi6/dragon-ball',
    viewUrl: 'https://dragon-ball-z-vue.netlify.app/',
    infoText: 'Descubre los personajes de Dragon Ball Z y lucha con ellos en un juego de cartas.',
    technologies: [techsData.vue, techsData.js],
  },
  quickTrivia: {
    name: 'Quick Trivia',
    image: quickTrivia,
    codeUrl: 'https://github.com/Tachi6/quick-trivia',
    viewUrl: 'https://quick-trivia-react.netlify.app/',
    infoText: 'Responde el mayor numero de preguntas en 30 o 60 segundos y bate tus records.',
    technologies: [techsData.react, techsData.js],
  },
  portfolio: {
    name: 'Portfolio',
    image: portfolio,
    codeUrl: 'https://github.com/Tachi6/portfolio',
    viewUrl: 'https://portfolio-david-gonzalez-de-la-rosa.netlify.app/',
    infoText: 'Mi portfolio con toda mi información realizado con React y Javascript.',
    technologies: [techsData.react, techsData.js],
  },
};

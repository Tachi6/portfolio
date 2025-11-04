import cocktails from '../assets/cocktails.png';
import dragonBall from '../assets/dragon-ball.png';
import quickTrivia from '../assets/quick-trivia.png';
import portfolio from '../assets/portfolio.png';
import { technologies } from './technologies';

export const Data = {
  cocktails: {
    image: cocktails,
    codeUrl: 'https://github.com/Tachi6/cocktails',
    viewUrl: 'https://cocktails-tachi6.netlify.app/',
    infoText: 'Busca inspiración y recetas de cocktails. Prueba y valora las creaciones.',
    technologies: [technologies.html, technologies.css, technologies.js],
  },
  dragonBall: {
    image: dragonBall,
    codeUrl: 'https://github.com/Tachi6/dragon-ball',
    viewUrl: 'https://dragon-ball-z-vue.netlify.app/',
    infoText: 'Descubre los personajes de Dragon Ball Z y lucha con ellos en un juego de cartas.',
    technologies: [technologies.vue, technologies.js],
  },
  quickTrivia: {
    image: quickTrivia,
    codeUrl: 'https://github.com/Tachi6/quick-trivia',
    viewUrl: 'https://quick-trivia-react.netlify.app/',
    infoText: 'Responde el mayor numero de preguntas en 30 o 60 segundos y bate tus records.',
    technologies: [technologies.react, technologies.js],
  },
  portfolio: {
    image: portfolio,
    codeUrl: 'https://github.com/Tachi6/portfolio',
    viewUrl: 'https://portfolio-david-gonzalez-de-la-rosa.netlify.app/',
    infoText: 'Mi portfolio con toda mi información realizado con React y Javascript.',
    technologies: [technologies.react, technologies.js],
  },
};

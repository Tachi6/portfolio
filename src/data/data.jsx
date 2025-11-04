import cocktails from '../assets/cocktails.png';
import dragonBall from '../assets/dragon-ball.png';
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
};

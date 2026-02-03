import cocktails from '../assets/images/cocktails.png';
import dragonBall from '../assets/images/dragon-ball.png';
import quickTrivia from '../assets/images/quick-trivia.png';
import portfolio from '../assets/images/portfolio.png';
import skiDayPlan from '../assets/images/ski-day-plan.png';
import tasteApp from '../assets/images/taste-app.png';
import pekeFilms from '../assets/images/peke-films.png';
import { techsData } from './techsData.jsx';

export const projectsData = {
  cocktails: {
    name: 'Cocktails',
    image: cocktails,
    codeUrl: 'https://github.com/Tachi6/cocktails',
    viewUrl: 'https://cocktails-tachi6.netlify.app/',
    infoText:
      'Recetas detalladas, novedades, mejores y populares. Incluye buscador, filtrado por ingredientes y sistema de valoraciones.',
    technologies: [techsData.html, techsData.css, techsData.js],
  },
  dragonBall: {
    name: 'Dragon Ball Z',
    image: dragonBall,
    codeUrl: 'https://github.com/Tachi6/dragon-ball',
    viewUrl: 'https://dragon-ball-z-vue.netlify.app/',
    infoText:
      'Descubre los personajes de Dragon Ball Z. Incluye buscador y un pequeño juego de cartas de lucha entre personajes.',
    technologies: [techsData.vue, techsData.js],
  },
  quickTrivia: {
    name: 'Quick Trivia',
    image: quickTrivia,
    codeUrl: 'https://github.com/Tachi6/quick-trivia',
    viewUrl: 'https://quick-trivia-react.netlify.app/',
    infoText:
      'Juego donde has de responder el mayor numero de preguntas en 30 o 60 segundos. Incluye ajustes de tematica y rankings',
    technologies: [techsData.react, techsData.js],
  },
  portfolio: {
    name: 'Portfolio',
    image: portfolio,
    codeUrl: 'https://github.com/Tachi6/portfolio',
    viewUrl: 'https://portfolio-david-gonzalez-de-la-rosa.netlify.app/',
    infoText:
      'Mi portfolio con toda mi información personal, mis proyectos y conocimientos. Realizado con React y Javascript.',
    technologies: [techsData.react, techsData.js],
  },
  planSkiDay: {
    name: 'Ski Day Plan',
    image: skiDayPlan,
    codeUrl: 'https://github.com/Tachi6/ski_day_plan',
    viewUrl: 'https://ski-day-plan.netlify.app/',
    infoText:
      'Planificador de rutas de ski con estaciones reales y exportación .gpx. Calcula tiempos y estadísticas en tiempo real según tu perfil.',
    technologies: [techsData.react, techsData.ts],
  },
  tasteApp: {
    name: 'TasteApp',
    image: tasteApp,
    codeUrl: 'https://github.com/Tachi6/puntuacion_tacher',
    infoText:
      'Cata, valora y consulta nuestra base de datos y nuestros rankings. Organiza catas divertidas con tus amigos. *Test PlayStore*',
    technologies: [techsData.flutter, techsData.dart],
  },
  pekeFilms: {
    name: 'PekeFilms',
    image: pekeFilms,
    codeUrl: 'https://github.com/Tachi6/pekefilms',
    infoText:
      'Consulta la cartelera y todas las películas infantiles. Incluye buscador, gestor de pendientes y de favoritas. *Test en apk*',
    technologies: [techsData.flutter, techsData.dart],
  },
};

import { centers } from './centersData';

export const formationData = {
  react: [
    {
      center: centers.cifo,
      course: 'Desarrollo web Front End (FSE32-25)',
      info: '300 horas - Julio 2025 / Octubre 2025',
      modules: [
        {
          module: 'Modulo 1 - HTML y CSS',
          themes: ['Configuración del entorno para HTML, CSS y JavaScript', 'HTML5', 'CSS', 'Bootstrap'],
        },
        {
          module: 'Modulo 2 - JavaScript',
          themes: [
            'Fundamentos de JavaScript',
            'Manipulación del DOM',
            'API, Fetch y asincronismo',
            'jQuery',
            'JavaScript avanzado y fundamentos de TypeScript',
          ],
        },
        {
          module: 'Modulo 3 - React',
          themes: [
            'Configuración del entorno para React',
            'Componentes, formularios y estado',
            'Rutas, Context y tests unitarios',
          ],
        },
        {
          module: 'Modulo 4 - React Native',
          themes: [
            'Configuración del entorno para React Native con Expo',
            "Componentes propios, API's y React Navigation",
          ],
        },
      ],
    },
  ],
  vue: [
    {
      center: centers.uoc,
      course: 'Front End Web Developer FOAP 2025',
      info: '240 horas - Junio 2025 / Julio 2025',
      modules: [
        {
          module: 'Modulo 1 - Desarrollo web y gestión de proyectos',
          themes: [
            'Identificación de los elementos de Internet.',
            'Aplicación del lenguaje de marcado HTML para maquetar web.',
            'Interpretación de los estándares y las directrices de accesibilidad web.',
            'Aplicación del lenguaje de hojas de estilo en cascada (CSS) para maquetar web.',
            'Análisis de diseños realizados con herramientas de diseño gráfico.',
            'Caracterización de los entornos, las fases y herramientas necesarias para realizar proyectos.',
            'Relación de los conocimientos de control de versiones y repositorios de código, como GitHub.',
          ],
        },
        {
          module: 'Modulo 2 - JavaScript (ES6)',
          themes: [
            'Caracterización de los fundamentos de la programación Front End: JavaScript.',
            'Aplicación de los elementos más avanzados de JavaScript.',
            'Interpretación y reescritura de llamadas, datos y código AJAX.',
            'Reproducción con código, de prototipos realizados con herramientas de diseño gráfico.',
            'Manipulación de código de terceros.',
            'Elaboración de documentación técnica y de usuario de lenguaje Javascript.',
          ],
        },
        {
          module: 'Modulo 3 - Framework de Front-End (Vue.js)',
          themes: [
            'Distinción de los frameworks de desarrollo Front End web.',
            'Identificación de los elementos comunes que aparecen en los diversos frameworks.',
            'Utilización de un framework de front-end, en particular, Vue.js.',
            'Reproducción con un framework, de prototipos realizados con herramientas de diseño gráfico.',
            'Manipulación de código de terceros.',
            'Elaboración de documentación técnica y de usuario de un framework.',
          ],
        },
      ],
    },
  ],
};

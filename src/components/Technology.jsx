import { ReactLogo } from '../logos/ReactLogo';
import cifo from '../assets/images/cifo.png';
import uoc from '../assets/images/uoc.png';
import { SmallButton } from './SmallButton';
import { AddIcon } from '../icons/AddIcon';

export const Technology = () => {
  return (
    <>
      <article className="tech-box">
        <h3 className="tech-label">
          <img src={cifo} alt="cifo-logo" />
          CIFO L'Hospitalet
        </h3>
        <div className="course-container">
          <h4 className="course">Desarrollo web Front End (FSE32-25)</h4>
          <p>300 horas / Julio 2025 - Octubre 2025</p>
        </div>
        <SmallButton content={<AddIcon />} />
        {/* <ul>
          <p>Modulo 1 - HTML y CSS</p>
            <li>Configuración del entorno para HTML, CSS y JavaScript</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
          <p>Modulo 2 - JavaScript</p>
          <ul>
            <li>Fundamentos de JavaScript</li>
            <li>Manipulación del DOM</li>
            <li>API, Fetch y asincronismo</li>
            <li>jQuery</li>
            <li>JavaScript avanzado i fundamentos de TypeScript</li>
          </ul>
          <p>Modulo 3 - React</p>
          <ul>
            <li>Configuración del entorno para React</li>
            <li>Componentes, formularios y estado</li>
            <li>Rutas, Context y tests unitarios</li>
          </ul>
          <p>Modulo 4 - React Native</p>
          <ul>
            <li>Configuración del entorno para React Native con Expo</li>
            <li>Componentes propios, API's y React Navigation</li>
          </ul> */}
      </article>
      <article className="tech-box">
        <h3 className="tech-label">
          <img src={uoc} alt="cifo-logo" />
          Universitat Oberta de Catalunya
        </h3>
        <div className="course-container">
          <h4 className="course">Front End Web Developer FOAP 2025</h4>
          <p>240 horas / Junio 2025 - Julio 2025</p>
        </div>
        {/* <p>Modulo 1 - DESARROLLO WEB Y GESTIÓN DE PROYECTOS</p>
        <ul>
          <li>Identificación de los elementos de Internet.</li>
          <li>Aplicación del lenguaje de marcado HTML para maquetar web.</li>
          <li>Interpretación de los estándares y las directrices de accesibilidad web.</li>
          <li>Aplicación del lenguaje de hojas de estilo en cascada (CSS) para maquetar web.</li>
          <li>Análisis de diseños realizados con herramientas de diseño gráfico.</li>
          <li>Caracterización de los entornos, las fases y herramientas necesarias para realizar proyectos.</li>
          <li>Relación de los conocimientos de control de versiones y repositorios de código, como GitHub.</li>
        </ul>
        <p>Modulo 2 - JAVASCRIPT (ES6)</p>
        <ul>
          <li>Caracterización de los fundamentos de la programación Front End: JavaScript.</li>
          <li>Aplicación de los elementos más avanzados de JavaScript.</li>
          <li>Interpretación y reescritura de llamadas, datos y código AJAX.</li>
          <li>Reproducción con código, de prototipos realizados con herramientas de diseño gráfico.</li>
          <li>Manipulación de código de terceros.</li>
          <li>Elaboración de documentación técnica y de usuario de lenguaje Javascript.</li>
        </ul>
        <p>Modulo 3 - FRAMEWORK DE FRONT-END (VUE.JS)</p>
        <ul>
          <li>Distinción de los frameworks de desarrollo Front End web.</li>
          <li>Identificación de los elementos comunes que aparecen en los diversos frameworks.</li>
          <li>Utilización de un framework de front-end, en particular, Vue.js.</li>
          <li>Reproducción con un framework, de prototipos realizados con herramientas de diseño gráfico.</li>
          <li>Manipulación de código de terceros.</li>
          <li>Elaboración de documentación técnica y de usuario de un framework.</li>
        </ul> */}
      </article>
    </>
  );
};

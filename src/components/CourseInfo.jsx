import { useEffect, useRef, useState } from 'react';
import { CourseInfoHeightContext } from '../context/TechHeightContext';

export const CourseInfo = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const refContainer = useRef();

  useEffect(() => setContainerHeight(refContainer.current.offsetHeight), []);

  return (
    <CourseInfoHeightContext value={containerHeight}>
      <div className="course-info" ref={refContainer}>
        <p>Modulo 1 - HTML y CSS</p>
        <ul>
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
        </ul>
      </div>
    </CourseInfoHeightContext>
  );
};

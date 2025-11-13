import { SmallButton } from './SmallButton';
import { AddIcon } from '../icons/AddIcon';
import { RemoveIcon } from '../icons/RemoveIcon';
import { Fragment, useEffect, useRef, useState } from 'react';

export const Technology = ({ course }) => {
  const baseHeight = useRef(window.innerWidth <= 960 ? 76 : 93);
  const bottomPadding = useRef(window.innerWidth <= 960 ? 5 : 10);
  const courseHeight = useRef();
  const courseInfoHeight = useRef();

  const [showCourseInfo, setShowCourseInfo] = useState(false);
  const [techBoxHeight, setTechBoxHeight] = useState(window.innerWidth <= 960 ? 100 : 125);
  const enableTransition = useRef(false);

  useEffect(() => {
    const initHeight = baseHeight.current + courseHeight.current.offsetHeight;
    const expandHeight = showCourseInfo ? courseInfoHeight.current.offsetHeight + bottomPadding.current : 0;

    setTechBoxHeight(initHeight + expandHeight);
  }, [showCourseInfo]);

  const expandTechBox = () => {
    enableTransition.current = true;
    setShowCourseInfo(!showCourseInfo);
  };

  return (
    <article className={`tech-box-container ${enableTransition.current ? 'do-transition' : ''}`}>
      <div
        className={`tech-box ${enableTransition.current ? 'do-transition' : ''}`}
        style={{ height: `${techBoxHeight}px` }}
      >
        <h3 className="course" ref={courseHeight}>
          {course.course}
        </h3>
        <div className="tech-label-container">
          <img src={course.center.logo} alt="cifo-logo" />
          <h4 className="tech-label">{course.center.name}</h4>
        </div>
        <p>{course.info}</p>
        <div className="course-info" ref={courseInfoHeight}>
          {course.modules.map((module) => (
            <Fragment key={course.course + module.module}>
              <p>{module.module}</p>
              <ul>
                {module.themes.map((theme) => (
                  <li key={course.course + theme}>{theme}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </div>
      </div>
      <SmallButton content={showCourseInfo ? <RemoveIcon /> : <AddIcon />} action={expandTechBox} />
    </article>
  );
};

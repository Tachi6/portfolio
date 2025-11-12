import { SmallButton } from './SmallButton';
import { AddIcon } from '../icons/AddIcon';
import { RemoveIcon } from '../icons/RemoveIcon';
import { Fragment, useEffect, useRef, useState } from 'react';
import { CourseInfo } from './CourseInfo';
import { CourseInfoHeightContext, TechHeightContext } from '../context/TechHeightContext';

export const Technology = ({ course }) => {
  const refCourseInfoHeight = useRef();
  const [showCourseInfo, setShowCourseInfo] = useState(false);
  const [courseHeight, setCourseHeight] = useState(127);

  useEffect(() => {
    setCourseHeight(127 + (showCourseInfo ? refCourseInfoHeight.current.offsetHeight + 5 : 0));
  }, [showCourseInfo]);

  return (
    <article className="tech-box-container">
      <div className="tech-box" style={{ height: `${courseHeight}px` }}>
        <h3 className="course">{course.course}</h3>
        <div className="tech-label-container">
          <img src={course.center.logo} alt="cifo-logo" />
          <h4 className="tech-label">{course.center.name}</h4>
        </div>
        <p>{course.info}</p>
        <div className="course-info" ref={refCourseInfoHeight}>
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
      <SmallButton
        content={showCourseInfo ? <RemoveIcon /> : <AddIcon />}
        action={() => setShowCourseInfo(!showCourseInfo)}
      />
    </article>
  );
};

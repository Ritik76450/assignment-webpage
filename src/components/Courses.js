import React from 'react';
import './styles/Courses.css';
import CourseCard from './CourseCard';

const courseList = [
  { title: 'Artificial Intelligence for Leaders', price: '$499', image: '/images/ai.png' },
  { title: 'Global Business Strategy', price: '$399', image: '/images/global-business.png' },
  { title: 'Entrepreneurship & Innovation', price: '$399', image: '/images/entrepreneurship.png' },
];

export default function Courses() {
  return (
    <section className="courses" id="courses">
      <h2>Featured Courses</h2>
      <div className="course-grid">
        {courseList.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
}

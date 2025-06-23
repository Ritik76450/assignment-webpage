import React from 'react';
import './styles/CourseCard.css';

export default function CourseCard({ title, price, image }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Upskill with insights from global experts and real-world experience.</p>
      <div className="course-footer">
        <span className="price">{price}</span>
        <button>Enroll</button>
      </div>
    </div>
  );
}

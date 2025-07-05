import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function SubjectList({ subjects, semester }) {
  const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    navigate(`/content/${semester}/${subject}`);
  };

  return (
    <div className="subject-list-container">
      {subjects.map((subject) => (
        <button
          key={subject}
          className="subject-button"
          onClick={() => handleSubjectClick(subject)}
        >
          {subject}
        </button>
      ))}
    </div>
  );
}

export default SubjectList;

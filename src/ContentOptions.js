import React from 'react';
import './App.css';

const contentOptions = ['Institute Material', 'Mid Papers', 'End Sem Papers', 'Notes'];

function ContentOptions({ selectedSubject, semester }) {
  return (
    <div className="content-options">
      {contentOptions.map((option, idx) => (
        <button
          key={idx}
          className="content-option-button"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default ContentOptions;

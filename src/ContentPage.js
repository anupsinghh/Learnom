import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';

// Define content options as needed
const contentOptions = [
  'Institute Material',
  'Mid Papers',
  'End Sem Papers',
  'Notes',
];

// Updated contentLinks to include new subjects and their options
const contentLinks = {
  'Basics of Electrical & Electronic Engineering': contentOptions,
  'Physics': contentOptions,
  'Computer Programming': contentOptions,
  'Biology': contentOptions,
  'English': contentOptions,
  'Computer Science': contentOptions,
  'Probability & Statistics': contentOptions,
  'Data Structures': contentOptions,
  'Database Management System': contentOptions,
  'Advance Java Technology': contentOptions,
  'Web Technology': contentOptions,
  'Database Systems': contentOptions,
  'Software Engineering': contentOptions,
  'Networks': contentOptions,
  'Fundamentals of Microprocessors': contentOptions,
  '.NET Technologies': contentOptions,
  'Design and Analysis of Algorithm': contentOptions,
  'Cloud Computing': contentOptions,
  'Cyber Security': contentOptions,
  'Web Development': contentOptions,
  'Mobile Apps': contentOptions,
  'AI': contentOptions,
  'Machine Learning': contentOptions,
  'Project': contentOptions,
  'Ethics': contentOptions,
  'Professional Practices': contentOptions,
};

const ContentPage = () => {
  const { semester, subject } = useParams();
  const content = contentLinks[subject] || [];

  return (
    <div className="content-page">
      <h1>Semester {semester} - {subject}</h1>
      <div className="content-options">
        {content.length > 0 ? (
          content.map((option, index) => (
            <Link
              key={index}
              to={`/content/${semester}/${subject}/${option}`}
              className="content-option-button"
            >
              {option}
            </Link>
          ))
        ) : (
          <p>No content options available for this subject it will be added soon.</p>
        )}
      </div>
    </div>
  );
};

export default ContentPage;

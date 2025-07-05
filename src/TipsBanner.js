import React from 'react';
import './TipsBanner.css';
import YouTubeLogo from './YoutubeLogo.js'; // Import the YouTube logo component

const TipsBanner = () => {
  return (
    <div className="tips-banner">
      <div className="tips-slider">
        <div className="tips-row">
          <div className="tip-category">
            <h3>Mid Exam Tips</h3>
            <div className="tip-box">📖 Must do Assignments of respective subjects.</div>
            <div className="tip-box">📝 Practice past year papers to identify common questions.</div>
            <div className="tip-box">📖 Also visit End Sem papers for questions of current Mid Syllabus.</div>
          </div>
          <div className="tip-category">
            <h3>Final Exam Tips</h3>
            <div className="tip-box">📚 Review all chapters, focusing on weak areas.</div>
            <div className="tip-box">🔍 Create a quick revision guide for last minute revision.</div>
            <div className="tip-box">💡 Take breaks and stay positive during your preparation.</div>
          </div>
        </div>
      </div>

      {/* Recommended YouTube Channels Section */}
      {/* The commented-out YouTube section remains unchanged */}
    </div>
  );
};

export default TipsBanner;

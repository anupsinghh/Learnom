import React, { useState } from 'react';
import './CgpaCalculator.css';

const CgpaCalculator = () => {
  const [currentSemester, setCurrentSemester] = useState('');
  const [sgpas, setSgpas] = useState(['', '', '', '', '', '', '', '']);
  const [desiredCgpa, setDesiredCgpa] = useState('');
  const [requiredSgpa, setRequiredSgpa] = useState(null);

  const handleCalculate = () => {
    const totalSemesters = 8; // Total number of semesters
    const semesterCount = parseInt(currentSemester);
    if (isNaN(semesterCount) || semesterCount < 1 || semesterCount > totalSemesters) {
      alert('Please enter a valid current semester number between 1 and 8.');
      return;
    }

    const semesters = sgpas.map(parseFloat);
    const sumOfSgpas = semesters.slice(0, semesterCount).reduce((a, b) => a + b, 0);
    const credits = totalSemesters - semesterCount + 1; // Assume equal credits for simplicity

    const currentCgpa = (sumOfSgpas / semesterCount);

    if (parseFloat(desiredCgpa) < 0 || parseFloat(desiredCgpa) > 10) {
      alert('Desired CGPA must be between 0 and 10.');
      return;
    }

    if (parseFloat(currentCgpa) > parseFloat(desiredCgpa)) {
      alert('Current CGPA is already higher than the desired CGPA.');
      return;
    }

    const requiredSgpa = (desiredCgpa * totalSemesters - sumOfSgpas) / credits;

    if (requiredSgpa < 0 || requiredSgpa > 10) {
      setRequiredSgpa('Not possible');
    } else {
      setRequiredSgpa(requiredSgpa.toFixed(2));
    }
  };

  const handleSemesterChange = (e) => {
    const semester = e.target.value;
    setCurrentSemester(semester);
    if (semester) {
      setSgpas(sgpas.slice(0, parseInt(semester)).concat(Array(8 - parseInt(semester)).fill('')));
    } else {
      setSgpas(Array(8).fill(''));
    }
  };

  return (
    <div className="cgpa-calculator">
      <h2>CGPA Calculator</h2>
      <label>
        Your Current Semester:
        <input
          type="number"
          min="1"
          max="8"
          value={currentSemester}
          onChange={handleSemesterChange}
        />
      </label>

      <label>
        SGPA of all previous Semesters  (comma-separated):
        <input
          type="text"
          value={sgpas.slice(0, parseInt(currentSemester)).join(',')}
          onChange={(e) => setSgpas(e.target.value.split(','))}
        />
      </label>

      <label>
        Desired CGPA:
        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={desiredCgpa}
          onChange={(e) => setDesiredCgpa(e.target.value)}
        />
      </label>

      <button onClick={handleCalculate}>Calculate Required SGPA</button>

      {requiredSgpa !== null && (
        <h3>Required SGPA for Next Semester: {requiredSgpa}</h3>
      )}
    </div>
  );
};

export default CgpaCalculator;

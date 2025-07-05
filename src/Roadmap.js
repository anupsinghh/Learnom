import React, { useState } from 'react';
import './Roadmap.css';

const professions = [
  {
    title: "Backend Developer",
    steps: [
      "Step 1: Learn basic programming (e.g., Variables, Loops, Conditionals).",
      "Step 2: Learn backend programming languages (Node.js, Python, Java).",
      "Step 3: Understand databases (SQL, NoSQL).",
      "Step 4: Learn about APIs (REST, GraphQL).",
      "Step 5: Focus on security (JWT, OAuth).",
      "Step 6: Master cloud services (AWS, Azure, GCP)."
    ]
  },
  {
    title: "Frontend Developer",
    steps: [
      "Step 1: Learn HTML, CSS, and JavaScript.",
      "Step 2: Master CSS frameworks (Bootstrap, Tailwind CSS).",
      "Step 3: Learn JavaScript frameworks (React, Angular, Vue).",
      "Step 4: Understand state management (Redux, MobX).",
      "Step 5: Learn version control (Git, GitHub).",
      "Step 6: Focus on responsive design."
    ]
  },
  {
    title: "Full-Stack Developer",
    steps: [
      "Step 1: Follow both Frontend and Backend roadmaps.",
      "Step 2: Learn DevOps basics (CI/CD, Docker).",
      "Step 3: Understand web servers (Nginx, Apache).",
      "Step 4: Learn about caching (Redis, Memcached)."
    ]
  },
  {
    title: "Data Scientist",
    steps: [
      "Step 1: Learn Python or R.",
      "Step 2: Master data manipulation libraries (Pandas, NumPy).",
      "Step 3: Understand statistics and probability.",
      "Step 4: Learn data visualization (Matplotlib, Seaborn).",
      "Step 5: Learn machine learning algorithms (SVM, Neural Networks)."
    ]
  },
  {
    title: "Mobile Developer",
    steps: [
      "Step 1: Learn Java/Kotlin for Android or Swift for iOS.",
      "Step 2: Understand mobile UI/UX design principles.",
      "Step 3: Learn frameworks like React Native or Flutter.",
      "Step 4: Master app deployment to Google Play Store or App Store."
    ]
  },
  {
    title: "DevOps Engineer",
    steps: [
      "Step 1: Learn Linux and basic scripting.",
      "Step 2: Master CI/CD pipelines (Jenkins, GitLab CI).",
      "Step 3: Learn containerization (Docker, Kubernetes).",
      "Step 4: Understand infrastructure as code (Terraform, Ansible)."
    ]
  },
  {
    title: "AI Engineer",
    steps: [
      "Step 1: Learn Python and machine learning libraries (TensorFlow, PyTorch).",
      "Step 2: Master deep learning algorithms.",
      "Step 3: Learn about NLP, computer vision, and AI ethics.",
      "Step 4: Work on AI projects and deploy models."
    ]
  },
  {
    title: "Cyber Security Specialist",
    steps: [
      "Step 1: Learn basic networking and security protocols.",
      "Step 2: Understand cryptography and encryption methods.",
      "Step 3: Master penetration testing tools (Metasploit, Wireshark).",
      "Step 4: Learn security frameworks (ISO, NIST)."
    ]
  }
];

const Roadmap = () => {
  const [selectedProfession, setSelectedProfession] = useState(null);

  const handleProfessionClick = (index) => {
    setSelectedProfession(index === selectedProfession ? null : index);
  };

  return (
    <div className="roadmap-container">
      <h1>Career Roadmap for Various Roles</h1>

      <div className="profession-grid">
        {professions.map((profession, index) => (
          <div 
            key={index} 
            className="profession-box"
            onClick={() => handleProfessionClick(index)}
          >
            <h3>{profession.title}</h3>
          </div>
        ))}
      </div>

      {selectedProfession !== null && (
        <div className="steps-container">
          <h2>{professions[selectedProfession].title} Roadmap</h2>
          <ul>
            {professions[selectedProfession].steps.map((step, stepIndex) => (
              <li key={stepIndex}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Roadmap;

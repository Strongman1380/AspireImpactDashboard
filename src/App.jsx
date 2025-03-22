import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProgramList from './components/ProgramList';
import testData from './data/testData';
import './style.css';

function App() {
  // Set initial state with test data
  const [programs, setPrograms] = useState(testData);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Function to add a new program
  const handleAddProgram = () => {
    if (newTitle.trim() === '' || newDescription.trim() === '') return;

    const newProgram = {
      id: Date.now(),
      title: newTitle,
      description: newDescription
    };

    setPrograms([...programs, newProgram]);
    setNewTitle('');
    setNewDescription('');
  };

  // Function to delete a program
  const handleDelete = (id) => {
    setPrograms(programs.filter(program => program.id !== id));
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main>
        <h1>Aspire Impact Dashboard</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Program Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Program Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleAddProgram}>+ Add Program</button>
        </div>
        <ProgramList programs={programs} handleDelete={handleDelete} />
      </main>
    </div>
  );
}

export default App;
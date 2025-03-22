import React from 'react';

// Display each program's title and description
// Includes delete button that calls back to parent handler
function ProgramCard({ title, description, id, handleDelete }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => handleDelete(id)}>🗑️ Delete</button>
    </div>
  );
}

export default ProgramCard;
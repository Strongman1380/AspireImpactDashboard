// Import React for building the component and JSX rendering
import React from 'react';

// Import the ProgramCard component to render individual program cards
import ProgramCard from './ProgramCard';

// Functional component that accepts the list of programs and delete handler as props
function ProgramList({ programs, handleDelete }) {
  return (
    // Render a container div to hold all the program cards
    <div className="program-list">
      {
        // Use .map to iterate through each program in the array
        programs.map((program) => (
          // Render a ProgramCard component for each program
          // Pass in the key (React optimization), title, description, id, and delete handler as props
          <ProgramCard
            key={program.id}
            title={program.title}
            description={program.description}
            id={program.id}
            handleDelete={handleDelete}
          />
        ))
      }
    </div>
  );
}

// Export the component so it can be used in other parts of the application
export default ProgramList;
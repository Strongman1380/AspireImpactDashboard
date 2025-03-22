## Aspire Impact Dashboard (Static CRUD Prototype)

Hey there! 👋 

This is a simple CRUD (Create, Read, Delete) dashboard app made with React. It's part of a learning project to help build comfort with React components, props, state, and file structure. Right now, it works with some test data (no real backend yet).

### What It Does
- ✅ Shows a dashboard of Aspire Impact programs
- ➕ Lets you add a new program with a title and optional description
- ❌ Lets you delete a program
- 📦 Organizes everything into separate React components for practice

### File Structure
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── ProgramList.jsx
│   │   └── ProgramCard.jsx
│   ├── App.jsx
│   ├── index.js
│   └── style.css
├── package.json
└── README.md

### Tech Used
- React (Create React App setup)
- Basic CSS

### How To Run It
1. Make sure you have Node and npm installed.
2. Clone the repo or download the code.
3. In your terminal, go to the project folder and run:
   ```bash
   npm install
   npm start
   
   	4.	Open http://localhost:3000 to see the app in action.

Notes
	•	This is only a front-end prototype. There’s no real database or API yet.
	•	It’s built for learning how to pass props and manage state.
	•	Feel free to add more features if you’re continuing this for a class project!
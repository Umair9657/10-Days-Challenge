// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Students from './pages/Students';
import AddStudent from './pages/AddStudent';
import Header from './components/Header';
import Footer from './components/Footer';
import EditStudent from './pages/EditStudent';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students students={students} />} />
            <Route path="/add-student" element={<AddStudent addStudent={addStudent} />} />
            <Route path="/edit-student/:id" element={<EditStudent students={students} updateStudent={(id, updatedStudent) => {
              const updatedStudents = [...students];
              updatedStudents[id] = updatedStudent;
              setStudents(updatedStudents);
                 }} />}
                    />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



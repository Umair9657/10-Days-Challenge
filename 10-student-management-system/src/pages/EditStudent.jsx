import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EditStudent = ({ students, updateStudent }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const studentIndex = parseInt(id, 10);
  const [student, setStudent] = useState({ ...students[studentIndex] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(studentIndex, student);
    navigate('/students'); // Redirect back to students list
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="grade"
          value={student.grade}
          onChange={handleChange}
          placeholder="Grade"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="mobile"
          value={student.mobile}
          onChange={handleChange}
          placeholder="mobile"
          className="w-full border p-2 rounded"
        />
          <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="email"
          className="w-full border p-2 rounded"
        />

<input
          type="text"
          name="address"
          value={student.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border p-2 rounded"
        />

<input
          type="text"
          name="Class"
          value={student.studentClass}
          onChange={handleChange}
          placeholder="Class"
          className="w-full border p-2 rounded"
        />

<input
          type="text"
          name="divison"
          value={student.divison}
          onChange={handleChange}
          placeholder="Division"
          className="w-full border p-2 rounded"
        />

<input
          type="text"
          name="college Name"
          value={student.collegeName}
          onChange={handleChange}
          placeholder="College Name"
          className="w-full border p-2 rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default EditStudent;




      
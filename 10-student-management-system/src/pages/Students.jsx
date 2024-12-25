import { Link } from 'react-router-dom';

const Students = ({ students }) => (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Students List</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <ul className="space-y-2">
          {students.map((student, index) => (
            <li key={index} className="border p-2 rounded">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Age:</strong> {student.age}</p>
              <p><strong>Grade:</strong> {student.grade}</p>
              <p><strong>Name:</strong> {student.mobile}</p>
              <p><strong>Name:</strong> {student.email}</p>
              <p><strong>Name:</strong> {student.address}</p>
              <p><strong>Name:</strong> {student.studentClass}</p>
              <p><strong>Name:</strong> {student.division}</p>
              <p><strong>Name:</strong> {student.collegeName}</p>
              <Link to={`/edit-student/${index}`} className="text-blue-600 underline">
              Edit
            </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
  export default Students;


 


 
import { useState } from 'react';

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    package: 'Basic Membership',
  });

  const packages = [
    { name: 'Basic Membership', price: 499 },
    { name: 'Standard Membership', price: 1399 },
    { name: 'Platinum Membership', price: 1999 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ name: '', email: '', phone: '', age: '', package: 'Basic Membership' });
  };

  return (
    <div className="bg-black py-16 px-8">
      <h2 className="text-3xl text-white font-bold text-center mb-6">Register</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-600 p-6 rounded shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded border focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded border focus:outline-none"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={userData.phone}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded border focus:outline-none"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={userData.age}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded border focus:outline-none"
          required
        />
        <div className="mb-4">
          <label htmlFor="package" className="block text-white mb-2">Choose Your Package</label>
          <select
            id="package"
            name="package"
            value={userData.package}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border focus:outline-none"
          >
            {packages.map((pkg) => (
              <option key={pkg.name} value={pkg.name}>
                {pkg.name} - ₹{pkg.price}
              </option>
            ))}
          </select>
        </div>
        <button 
          onClick={() => alert("You have Successfully Registered")}
        className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 w-full">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

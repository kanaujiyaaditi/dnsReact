// // DNSRecordForm.js
// import React, { useState } from 'react';

// const DNSRecordForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     type: '',
//     name: '',
//     value: '',
//     // Add other relevant fields
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Type:
//         <input type="text" name="type" value={formData.type} onChange={handleChange} />
//       </label>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//       </label>
//       <label>
//         Value:
//         <input type="text" name="value" value={formData.value} onChange={handleChange} />
//       </label>
//       {/* Add other relevant fields */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default DNSRecordForm;
// src/components/Dashboard/DNSRecordForm.js

import React, { useState } from 'react';
import api from '../../services/api';

const DNSRecordForm = ({ onSubmit }) => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await api.post('/dns-records', { type, name, value });
      onSubmit(response.data);
      // Clear form fields after successful submission
      setType('');
      setName('');
      setValue('');
    } catch (error) {
      console.error('Error adding DNS record:', error);
    }
  };

  return (
    <div>
      <h2>Add DNS Record</h2>
      <form onSubmit={handleSubmit}>
        <label>Type:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
        
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label>Value:</label>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} required />

        <button type="submit">Add Record</button>
      </form>
    </div>
  );
};

export default DNSRecordForm;


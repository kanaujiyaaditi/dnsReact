// DNSRecordForm.js
import React, { useState } from 'react';

const DNSRecordForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    value: '',
    // Add other relevant fields
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type:
        <input type="text" name="type" value={formData.type} onChange={handleChange} />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Value:
        <input type="text" name="value" value={formData.value} onChange={handleChange} />
      </label>
      {/* Add other relevant fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DNSRecordForm;

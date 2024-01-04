// // DNSRecordsTable.js
// import React from 'react';

// const DNSRecordsTable = ({ records }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Type</th>
          
//          <th>Name</th>
          

//           <th>Value</th></tr>
//           {/* Add other relevant columns */}
        
//       </thead>
//       <tbody>
//         {records.map(record => (
//           <tr key={record.id}>
//             <td>{record.type}</td>
//             <td>{record.name}</td>
//             <td>{record.value}</td>
//             {/* Add other relevant columns */}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default DNSRecordsTable;
// src/components/Dashboard/DNSRecordsTable.js

import React from 'react';
import api from '../../services/api';

const DNSRecordsTable = ({ records, onDelete }) => {
  const handleDelete = async (id) => {
    try {
      await api.delete(`/dns-records/${id}`);
      onDelete(id);
    } catch (error) {
      console.error('Error deleting DNS record:', error);
    }
  };
  

  return (
    <div>
      <h2>DNS Records</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record._id}>
              <td>{record.type}</td>
              <td>{record.name}</td>
              <td>{record.value}</td>
              <td>
                <button onClick={() => handleDelete(record._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DNSRecordsTable;

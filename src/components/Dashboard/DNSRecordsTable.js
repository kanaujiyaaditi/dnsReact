// DNSRecordsTable.js
import React from 'react';

const DNSRecordsTable = ({ records }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          </tr>
          <tr><th>Name</th></tr>
          

          <tr><th>Value</th></tr>
          {/* Add other relevant columns */}
        
      </thead>
      <tbody>
        {records.map(record => (
          <tr key={record.id}>
            <td>{record.type}</td>
            <td>{record.name}</td>
            <td>{record.value}</td>
            {/* Add other relevant columns */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DNSRecordsTable;

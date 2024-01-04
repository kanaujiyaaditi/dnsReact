// // Dashboard.js
// import React, { useState, useEffect } from 'react';
// import DNSRecordsTable from './DNSRecordsTable';
// import DNSRecordForm from './DNSRecordForm';
// import api from '../../services/api';

// const Dashboard = () => {
//   const [records, setRecords] = useState([]);

//   useEffect(() => {
//     // Fetch DNS records from the backend on component mount
//     const fetchRecords = async () => {
//       try {
//         const response = await api.get('/dns-records');
//         setRecords(response.data);
//       } catch (error) {
//         console.error('Error fetching DNS records:', error);
//       }
//     };

//     fetchRecords();
//   }, []);

//   const handleAddRecord = async (newRecord) => {
//     try {
//       // Send a POST request to add a new DNS record
//       await api.post('/dns-records', newRecord);
//       // Fetch and update the records after adding a new one
//       const response = await api.get('/dns-records');
//       setRecords(response.data);
//     } catch (error) {
//       console.error('Error adding DNS record:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>DNS Manager Dashboard</h1>
//       <DNSRecordsTable records={records} />
//       <DNSRecordForm onSubmit={handleAddRecord} />
//     </div>
//   );
// };

// export default Dashboard;
// src/components/Dashboard/Dashboard.js

import React, { useState, useEffect } from 'react';
import DNSRecordForm from './DNSRecordForm';
import DNSRecordsTable from './DNSRecordsTable';
import api from '../../services/api';

const Dashboard = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await api.get('/dns-records');
        setRecords(response.data);
      } catch (error) {
        console.error('Error fetching DNS records:', error);
      }
    };

    fetchRecords();
  }, []);

  const handleAddRecord = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  const handleDeleteRecord = (id) => {
    setRecords(records.filter(record => record._id !== id));
  };

  return (
    <div>
      <DNSRecordForm onSubmit={handleAddRecord} />
      <DNSRecordsTable records={records} onDelete={handleDeleteRecord} />
    </div>
  );
};

export default Dashboard;

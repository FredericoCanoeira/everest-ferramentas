import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userId, setUserId] = useState('');
  const [report, setReport] = useState(null);

  const fetchReport = async () => {
    try {
      const { data } = await axios.get(`/api/admin/report/${userId}`);
      setReport(data);
    } catch (error) {
      alert('Error fetching report');
    }
  };

  const updateReport = async () => {
    try {
      const updatedCategory = prompt('Update category:', report.category);
      const updatedScore = prompt('Update score:', report.score);

      const { data } = await axios.put(`/api/admin/report/${userId}`, {
        category: updatedCategory,
        score: updatedScore,
      });

      setReport(data.evaluation);
    } catch (error) {
      alert('Error updating report');
    }
  };

  const downloadPDF = async () => {
    try {
      const response = await axios.get(`/api/admin/report/download/${userId}`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `report-${userId}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      alert('Error downloading PDF');
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={fetchReport}>Generate Report</button>
      {report && (
        <div>
          <h2>Report</h2>
          <p>Name: {report.name}</p>
          <p>Email: {report.email}</p>
          <p>Category: {report.category}</p>
          <p>Score: {report.score}</p>
          <button onClick={updateReport}>Edit Report</button>
          <button onClick={downloadPDF}>Download PDF</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

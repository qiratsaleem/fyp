import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js"; 
import Sidebar from "./Sidebar"; 
import "./Dashboard.css"; 
Chart.register(...registerables);

function Dashboard() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [ipAddress, setIpAddress] = useState(""); 
  const iocSeverityData = {
    labels: ["Critical", "High", "Medium", "Low"],
    datasets: [
      {
        label: "IOC Severity Level",
        data: [40, 88, 60, 73],
        backgroundColor: ["#FF5C5C", "#FF8A33", "#E3E100", "#D47FFF"],
      },
    ],
  };

  const logsPerDayData = {
    labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Logs per Day",
        data: [10, 30, 80, 25, 10, 50, 70],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        pointBackgroundColor: "#4CAF50",
        pointBorderColor: "#4CAF50",
      },
    ],
  };

  const userProgressData = {
    labels: ["user1", "user2", "user3", "user4"],
    datasets: [
      {
        label: "User Progress Analysis",
        data: [60, 95, 40, 34],
        backgroundColor: ["#800080", "#007BFF", "#FFA500", "#4CAF50"],
      },
    ],
  };

  const logAnalysisData = {
    labels: ["Total Logs", "Reports Generated", "Block Logs"],
    datasets: [
      {
        label: "Log Analysis",
        data: [300, 200, 100],
        backgroundColor: ["#0000FF", "#4CAF50", "#FF5C5C"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} onLogout={() => { /* Add logout functionality here */ }} />
      
      <header>
        <button onClick={() => setMenuOpen(true)} className="menu-button">☰</button>
      </header>

      <div className="dashboard-content">
        <div className="stats-cards">
          <div className="stat-card">Total Users<br />12</div>
          <div className="stat-card">Resolved Logs<br />123</div>
          <div className="stat-card">Reports Generated<br />789</div>
          <div className="stat-card">Remaining Logs<br />456</div>
        </div>

        <div className="chart-container">
          <div className="chart">
            <h2>IOC Severity Level</h2>
            <Bar data={iocSeverityData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </div>
          <div className="chart">
            <h2>Logs per Day</h2>
            <Line data={logsPerDayData} options={{ responsive: true }} />
          </div>
          <div className="chart">
            <h2>User Progress Analysis</h2>
            <Bar data={userProgressData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </div>
          <div className="chart">
            <h2>Log Analysis</h2>
            <Pie data={logAnalysisData} options={{ responsive: true }} />
          </div>
        </div>

            <div className="ip-entry-section">
          <input
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            placeholder="Enter IP Address"
            className="ip-input"
          />
          <button
            className="investigate-button"
            onClick={() => navigate("/details", { state: { ipAddress } })}
          >
            Investigate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
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
        backgroundColor: [
          "rgba(255, 92, 92, 0.8)",
          "rgba(255, 138, 51, 0.8)",
          "rgba(227, 225, 0, 0.8)",
          "rgba(212, 127, 255, 0.8)"
        ],
        hoverBackgroundColor: [
          "rgba(255, 92, 92, 1)",
          "rgba(255, 138, 51, 1)",
          "rgba(227, 225, 0, 1)",
          "rgba(212, 127, 255, 1)"
        ],
        barPercentage: 0.6,
        borderRadius: 5,
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
        backgroundColor: "rgba(76, 175, 80, 0.5)",
        hoverBackgroundColor: "#3B873E",
        pointBackgroundColor: "#4CAF50",
        pointBorderColor: "#4CAF50",
        tension: 0.5,
        fill: true,
      },
    ],
  };

  const userProgressData = {
    labels: ["User1", "User2", "User3", "User4"],
    datasets: [
      {
        label: "User Progress Analysis",
        data: [60, 95, 40, 34],
        backgroundColor: [
          "rgba(128, 0, 128, 0.8)",
          "rgba(0, 123, 255, 0.8)",
          "rgba(255, 165, 0, 0.8)",
          "rgba(76, 175, 80, 0.8)"
        ],
        hoverBackgroundColor: [
          "rgba(90, 0, 90, 1)",
          "rgba(0, 86, 179, 1)",
          "rgba(204, 132, 0, 1)",
          "rgba(56, 124, 59, 1)"
        ],
        barPercentage: 0.6,
        borderRadius: 5,
      },
    ],
  };

  const logAnalysisData = {
    labels: ["Total Logs", "Reports Generated", "Block Logs"],
    datasets: [
      {
        label: "Log Analysis",
        data: [300, 200, 100],
        backgroundColor: [
          "rgba(0, 0, 255, 0.8)",
          "rgba(76, 175, 80, 0.8)",
          "rgba(255, 92, 92, 0.8)"
        ],
        hoverBackgroundColor: [
          "rgba(0, 0, 153, 1)",
          "rgba(40, 90, 38, 1)",
          "rgba(204, 0, 0, 1)"
        ],
        borderWidth: 1,
        borderColor: "#ffffff",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#FFFFFF",
          font: { size: 14, family: "Arial" },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#FFFFFF",
        bodyColor: "#CCCCCC",
        borderColor: "#4CAF50",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        ticks: { color: "#FFFFFF", font: { size: 12 } },
      },
      y: {
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        ticks: { color: "#FFFFFF", font: { size: 12 } },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <Sidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onLogout={() => {}}
      />
      <header>
        <button onClick={() => setMenuOpen(true)} className="menu-button">
          ☰
        </button>
      </header>
      <div className="dashboard-content">
        <div className="stats-cards">
          <div className="stat-card">Total Users<br />12</div>
          <div className="stat-card">Resolved Logs<br />123</div>
          <div className="stat-card">Reports Generated<br />789</div>
          <div className="stat-card">Remaining Logs<br />456</div>
        </div>

        <div className="chart-container">
          <div className="chart large-chart">
            <h2>IOC Severity Level</h2>
            <Bar data={iocSeverityData} options={chartOptions} />
          </div>
          <div className="chart large-chart">
            <h2>Logs per Day</h2>
            <Line data={logsPerDayData} options={chartOptions} />
          </div>
          <div className="chart small-chart">
            <h2>User Progress Analysis</h2>
            <Bar data={userProgressData} options={chartOptions} />
          </div>
          <div className="chart small-chart">
            <h2>Log Analysis</h2>
            <Pie data={logAnalysisData} options={chartOptions} />
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

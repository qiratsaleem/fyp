
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Sidebar from "./Sidebar";
import "./DetailsPage.css";

Chart.register(...registerables);

function DetailsPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const thresholdComparisonData = {
    labels: ["Threshold 1", "Threshold 2", "Threshold 3", "Threshold 4"],
    datasets: [
      {
        label: "Value",
        data: [30, 45, 60, 80],
        backgroundColor: ["#FF5C5C", "#FF8A33", "#E3E100", "#D47FFF"],
      },
    ],
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handlePlatformClick = () => {
    navigate("/threat-intelligence");
  };

  return (
    <div className="details-page-container">
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="details-page">
        <div className="header">
          <div className="back-arrow" onClick={handleBackClick}>
            &#8592;
          </div>
          <h1 className="output-heading">Threat Intelligence Output</h1>
          <button onClick={() => setMenuOpen(!menuOpen)} className="menu-button">☰</button>
        </div>

        <div className="main-content">
          <div className="predicted-outcome">
            <h2>Predicted Outcome</h2>
            <p>Highlight key features that influenced the decision (e.g., IP Reputation Score, Log Severity)</p>
            <ul>
              <li>IP Reputation</li>
              <li>Threat Type</li>
              <li>Severity</li>
            </ul>
            <p>The system has analyzed data from multiple platforms, providing a unified reputation score to indicate the overall security posture.</p>
          </div>

          <div className="ti-platforms">
            <h3>TI PLATFORMS</h3>
            <div className="platform-status">
              <h4>Responded:</h4>
              <ul>
                <li className="platform-item" onClick={handlePlatformClick}>Virus Total</li>
                <li className="platform-item" onClick={handlePlatformClick}>Platform 2</li>
                <li className="platform-item" onClick={handlePlatformClick}>Platform 5</li>
                <li className="platform-item" onClick={handlePlatformClick}>Platform 7</li>
              </ul>
              <h4>Not Responded:</h4>
              <ul>
                <li className="platform-item" onClick={handlePlatformClick}>Platform 3</li>
                <li className="platform-item" onClick={handlePlatformClick}>Platform 4</li>
                <li className="platform-item" onClick={handlePlatformClick}>Platform 6</li>
                <li className="platform-item" onClick={handlePlatformClick}>Platform 8</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="threshold-comparison">
          <h3>Threshold Comparison</h3>
          <Bar data={thresholdComparisonData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;

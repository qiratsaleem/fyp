import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./ThreatIntelligence.css";

const ThreatIntelligence = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="threat-intelligence-container">
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <span className="back-arrow" onClick={() => navigate("/details")}>&larr;</span>
         {/* Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-button">
          ☰
        </button>
        <h1 className="title">Threat Intelligence xx</h1>
      <main className="info-section">
        <h2>Detailed information about Platform 1.</h2>
        <div className="info-content">
          <div className="column">
            <div>
              <h3>1. IP Address:</h3>
              <p>- The queried IP (e.g., 192.168.1.1).</p>
            </div>
            <div>
              <h3>2. ISP (Internet Service Provider):</h3>
              <p>- Name of the ISP hosting the IP (e.g., Comcast, AT&T).</p>
            </div>
            <div>
              <h3>3. ASN (Autonomous System Number):</h3>
              <ul>
                <li>ASN Number (e.g., AS12345).</li>
                <li>ASN Name (e.g., Google LLC).</li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div>
              <h3>4. Location Information:</h3>
              <ul>
                <li>- Country (e.g., United States, Germany).</li>
                <li>- City (e.g., New York, Berlin).</li>
                <li>- Latitude/Longitude (e.g., 40.7128° N, 74.0060° W).</li>
              </ul>
            </div>
            <div>
              <h3>5. WHOIS Information:</h3>
              <ul>
                <li>- Domain Owner (if applicable).</li>
                <li>- Registrar Information (for domain-related IPs).</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThreatIntelligence;

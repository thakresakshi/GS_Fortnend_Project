import React, { useState, useEffect } from 'react';
import './NewsComponent.css'; // Import your CSS file for styling

const NewsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample news items
  const newsItems = [
    "Zilla Parishad Launches New Health Initiative to Combat COVID-19",
    "Education Boost: Zilla Parishad Announces Scholarships for Underprivileged Students",
    "Green Revolution: Zilla Parishad Introduces Sustainable Farming Practices",
    "Infrastructure Development: Zilla Parishad Unveils Road Expansion Project",
    "Empowering Women: Zilla Parishad Initiates Entrepreneurship Training Programs",
    "Zilla Parishad Implements Clean Water Project for Rural Communities",
    "Digital Transformation: Zilla Parishad Launches E-Governance Portal",
    "Youth Empowerment: Zilla Parishad Opens Sports Complexes Across District",
    "Zilla Parishad Takes Steps to Preserve Local Culture and Heritage",
    "Improving Healthcare Access: Zilla Parishad Sets Up Mobile Medical Units",
    "Skill Development Drive: Zilla Parishad Partners with Industries for Vocational Training",
    "Zilla Parishad Introduces Waste Management Program for Cleaner Environment",
    "Promoting Financial Inclusion: Zilla Parishad Opens Rural Banking Centers",
    "Emergency Response: Zilla Parishad Enhances Disaster Preparedness Measures",
    "Zilla Parishad Launches Awareness Campaign on Environmental Conservation",
    "Ensuring Quality Education: Zilla Parishad Upgrades School Infrastructure",
    "Zilla Parishad Implements Smart Street Lighting System for Safety",
    "Empowering Farmers: Zilla Parishad Distributes Modern Farming Equipment",
    "Promoting Tourism: Zilla Parishad Enhances Tourist Facilities",
    "Zilla Parishad Organizes Health Camps to Reach Underserved Communities"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 2000); // Adjust the interval time as needed (milliseconds)

    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="news-container">
      <h2>NEWS Section</h2>
      <div className="card-box">
        {/* Displaying 3 news items starting from the current index */}
        {newsItems.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div className="card" key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;

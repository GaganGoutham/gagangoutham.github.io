// client/src/Updates.js
import React from 'react';
import './Updates.css';
import bts1 from './bts1.jpg';
import bts2 from './bts2.jpg';
import bts3 from './bts3.jpg';
import talk1 from './talk1.jpg';
import talk2 from './talk2.jpg';
import talk3 from './talk3.jpg';
import r1 from './r1.jpg';
import r2 from './r2.jpg';
import r3 from './r3.jpg';
import d1 from './d1.jpg';
import d2 from './d2.jpg';
import d3 from './d3.jpg';

const updatesData = [
  {
    heading: 'Bengaluru Tech Summit 2023',
    date: 'Dec 1, 2023',
    content: 'ARTPARK proudly participated as an exhibitor at the Bengaluru Tech Summit 2023, which stands as Asia\'s Largest Tech Summit. During this event, I had the privilege of serving as a delegate, presenting our team\'s impactful work to numerous attendees. Over the course of the three-day summit, which drew thousands of visitors, including esteemed ministers and entrepreneurs, I, along with the team, showcased the innovative initiatives undertaken by our team at ARTPARK.',
    images: [bts2, bts1, bts3],
  },
  {
    heading: 'Padmashree School of Public Health students visit to ARTPARK',
    date: 'Oct 19, 2023',
    content: 'ARTPARK-IISc had the pleasure of hosting MPH & MHA students from Padmashree School of Public Health, RGUHS, Bengaluru on October 19th, 2023. We had an insightful discussion about data-driven healthcare decision-making and shared our work on addressing the challenges posed by Covid and Dengue. I had the opportunity to talk about the challenges that Data Scientists and Data Engineers face and solutions being developed for the same.',
    images: [talk1, talk2, talk3],
  },
  {
    heading: 'Rockefeller foundation visit to ARTPARK',
    date: 'Sep 30, 2023',
    content: 'I had the opportunity to attend a panel discussion with the Rockefeller Foundation that focused on sustainable measures towards OneHealth initiatives. The event was also attended by the Commissioner of Health and Family Welfare - D Randeep.',
    images: [r1, r2, r3]
  },
  {
    heading: 'Dengue Dashboard Launced by Health Minister of Karnataka',
    date: 'Sep 9, 2023',
    content: 'The near-realtime Dengue Dashboard developed by ARTPARK was lauched by the Health Minister of Karnataka - Dinesh Gundu Rao. It was a privilege to be a part of the team to on this project as a Data Engineering intern.',
    images: [d1, d2, d3]
  }
  // Repeat the structure for other headings
];

function Updates() {
  return (
    <div className="updates-container">
      <h2 className="updates-heading" style={{ textDecoration: 'underline' }}>Updates</h2>
   
      <p className="updates-content">Watchout for updates about my professional activities here!</p>
      {updatesData.map((update, index) => (
        <div key={index} className="updates-heading-container">
          <h3>{update.heading}</h3>
          <p>{update.date}</p>          
          <div className="updates-layout">
            <div className="updates-images-container">
              {update.images.map((image, i) => (
                <div key={i} className="updates-image-container">
                  <img src={image} alt={`Update ${index + 1}`} className="updates-image" />
                </div>
              ))}
            </div>
            <div className="updates-description">
              <p>{update.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Updates;

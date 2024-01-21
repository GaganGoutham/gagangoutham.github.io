// client/src/Publications.js

import React from 'react';
import './Publications.css';

function Publications() {
  return (
    <div className="publications-container">
      <h2 style={{ textDecoration: 'underline' }}>Publications</h2>      
      <ul>
        <li>
          <a className="publication-link">
            <div className="publication-container">
              <p>
                Advancements in AI for Mental Health: Exploring ASD, ADHD & Schizophrenia, Video Datasets, and Future Directions
              </p>
              <p className="publication-authors">
                Authors: Charvi Bannur, Chaitra Bhat, Gagan Goutham, Sada Kakarla, Mamatha HR
              </p>
              <p className="publication-info">
                Under Review - Taylor and Francis Book Series, 2023
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.researchsquare.com/article/rs-3782339/v1" className="publication-link">
            <div className="publication-container">
              <p>
                Leveraging VQA to analyze Autism Spectrum Disorder (ASD)
              </p>
              <p className="publication-authors">
                Authors: Charvi Bannur, Chaitra Bhat, Gagan Goutham, Sada Kakarla, Mamatha HR, Shankar Kumar, Abhishek
              </p>
              <p className="publication-info">
                Under Review - BMC Bioinformatics, 2024
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/10090902" className="publication-link">
            <div className="publication-container">
              <p>
                Traffic Congestion Prediction Based on Spatio-Temporal Graph Structure Learning
              </p>
              <p className="publication-authors">
                Authors: Charvi Bannur, Chaitra Bhat, Gagan Goutham, Mamatha HR
              </p>
              <p className="publication-info">
                Published in: IITCEE 2023, Venue: BNM Institute of Technology, Bengaluru
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/10037408" className="publication-link">
            <div className="publication-container">
              <p>
                General Transit Feed Specification Assisted Effective Traffic Congestion Prediction Using Decision Trees and Recurrent Neural Networks
              </p>
              <p className="publication-authors">
                Authors: Charvi Bannur, Chaitra Bhat, Gagan Goutham, Mamatha HR
              </p>
              <p className="publication-info">
                Published in: ICDDS 2022, Venue: BMS College of Engineering, Bengaluru
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/10054341" className="publication-link">
            <div className="publication-container">
              <p>
                Semantic Segmentation on Martian Terrain for Navigation using Transformers
              </p>
              <p className="publication-authors">
                Authors: Gagan Goutham, Hita Juneja, Ankita C, Badri Prasad VR
              </p>
              <p className="publication-info">
                Published in: ICRAIE 2022, Venue: National Institute of Technology, Surathkal
              </p>
            </div>
          </a>
        </li>        
      </ul>
    </div>
  );
}

export default Publications;

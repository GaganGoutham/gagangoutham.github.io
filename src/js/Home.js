// client/src/Home.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogleScholar, faInstagram, faLinkedin, faMedium, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../css/Home.css';
import profile from '../images/photo.jpg';

function Home() {
  return (
    <div className="home-section">
      <div className="profile-container">
        <img src={profile} alt="Profile Photo" className="profile-image" />
        <h1>Hii!!</h1>
        <p>If you've stumbled upon this, <br />
          it means you've found your way to a snippet about me. <br />
          Explore my work, experiences, stories, and more here!</p>      

        <div className="social-icons">                  
          <a href="https://scholar.google.com/citations?user=RQwvJBIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGoogleScholar} size="1x" />
          </a>
          <a href="https://github.com/GaganGoutham" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
          <a href="https://twitter.com/gagan_goutham" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a href="https://www.linkedin.com/in/gagan-goutham-242a641b1/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a href="https://www.youtube.com/channel/UCB3YqevpI14qzZLCGPYZIHw" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="1x" />
          </a>
          <a href="https://www.instagram.com/gagan_goutham/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
          <a href="https://medium.com/@gagangoutham.n03" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMedium} size="1x" />
          </a>
        </div>              
      </div>
      <div className="aboutme-container">
        <h2>About Me</h2>
        <p>
          &emsp; &emsp; I'm a final-year Computer Science and Engineering undergrad student at PES University.
          I have a specialization in Machine Learning-Data Science and my interests inlcude in the application of AI in the field of Computer Vision.                
          I am curious in exploring human emotions, climate patterns, geospatial intricacies, and the wonders of space science. 
          My projects and workexperience reflects my commitment to utilizing technology for meaningful impact, spanning areas such as image segmentation, video analytics, data science and exploratory topics like AI4Mars, Dengue Prediction, Bengaluru Traffic, Autism Spectrum Disorder, and Mental Health.        
        </p>
        <p>
        <br />  
          &emsp; &emsp; Away from the code, you'll often find me behind a camera, meticulously creating and editing videos that document the chapters of my life.         
        My versatility extends beyond the technical domain as I am equally adept at unleashing creativity and expression. 
        An avid reader and series-binger, I also find joy in playing tunes on the piano and sometimes journaling my thoughts!
        </p>
      </div>
    </div>
  );
}

export default Home;

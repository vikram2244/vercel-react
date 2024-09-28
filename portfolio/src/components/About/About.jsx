import React from 'react';

function About() {
  return (
    <div id="Abouts">
      <h1 className="big abouthead text-center mb-5">ABOUT ME</h1>
      <section id="about-section" className="ftco-about img ftco-section ftco-no-pb">
        <div className="container shadow-container my-5">
          <div className="row">
            {/* Left Side: Image and Skills */}
            <div className="col-md-12 col-lg-5 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay">
                  <div className="row no-gutters">
                    <div className="col-12 col-md-6">
                      <div className="about-img">
                        <img src="images/about-me.png" className="img-fluid rounded b-shadow-a" alt="About Me" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="about-info p-4">
                        <p><span className="title-s">Name:</span> <span>Vikram Tirumala Balaji</span></p>
                        <p><span className="title-s">Job Role:</span> <span>Fresher - React Native & MERN Stack Developer</span></p>
                        <p><span className="title-s">Experience:</span> <span>Fresher</span></p>
                        <p><span className="title-s">Address:</span> <span>Bhimavaram, Andhra Pradesh, 534204</span></p>
                        <div className="skill-mf mt-4">
                          <p className="title-s text-white">Skills</p>
                          <div className="progress mb-2">
                            <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                              React.js - 85%
                            </div>
                          </div>
                          <div className="progress mb-2">
                            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                              HTML/CSS - 90%
                            </div>
                          </div>
                          <div className="progress mb-2">
                            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                              JavaScript - 80%
                            </div>
                          </div>
                          <div className="progress mb-2">
                            <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                              Java - 75%
                            </div>
                          </div>
                          <div className="progress mb-2">
                            <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                              MongoDB - 70%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: About Me Information */}
            <div className="col-md-12 col-lg-7">
              <div className="heading-section ftco-animate">
                <p className='mt-3'>
                  Fresher with a passion for developing cross-platform mobile apps and web applications utilizing React Native and the MERN stack. 
                  Seeking a collaborative and growth-oriented workplace to utilize my technical knowledge.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="d-flex mb-3">
                    <div className="col-4 fw-bold">Profile:</div>
                    <div className="col-8">React Native & MERN Stack Developer</div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="col-4 fw-bold">Domain:</div>
                    <div className="col-8">Mobile Apps & Web Applications</div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="col-4 fw-bold">Education:</div>
                    <div className="col-8">Bachelor of Technology - Electronics and Communication Engineering</div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="col-4 fw-bold">Language:</div>
                    <div className="col-8">English, Hindi</div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="col-4 fw-bold">Technical Skills:</div>
                    <div className="col-8">React.js, HTML/CSS, JavaScript, Java, MongoDB, Bootstrap, Express.js, Node.js</div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="col-4 fw-bold">Internships:</div>
                    <div className="col-8">Henotic Solutions, MiniWorld, BharatIntern</div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="col-4 fw-bold">Certifications:</div>
                    <div className="col-8">Data Structures and Algorithms in Java, Computer Vision Workshop, Certificate of Appreciation for Organizing CampX Campus Drive</div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="col-4 fw-bold">Interest:</div>
                    <div className="col-8">Traveling, Travel Photography, Teaching</div>
                  </li>
                </ul>
              </div>
              <div className="counter-wrap ftco-animate d-flex flex-column flex-md-row mt-md-3">
                <div className="text mb-3 mb-md-0">
                  <p className="mb-4">
                    <span className="number" data-number="30">0</span> <span>+</span>
                    <span>&nbsp; Projects completed</span>
                  </p>
                  <p>
                    <a href="https://www.linkedin.com/in/vikramtirumala/" className="btn btn-primary py-3 px-3 me-2">LinkedIn</a>
                    <a href="https://github.com/vikramtirumala" className="btn btn-secondary py-3 px-3">GitHub</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

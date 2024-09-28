import React from 'react';

function Resume() {
  return (
    <>
      <div className="container" id='Resumes'>
        <h1 className='Big abouthead text-center'>RESUME</h1>
        <section className="ftco-section ftco-no-pb" id="resume-section">
          <div className="container">
            <div className="resume-section-container">
              {/* Experience Section */}
              <div className="resume-wrap">
                <h2>Experience</h2>
                <div className="underline"></div>
                <p><strong>Java Developer Intern</strong> - Henotic Solutions (July 2023 - September 2023)</p>
                <p>Developed Java-based solutions and worked with data structures and algorithms.</p>

                <p><strong>App Developer Intern</strong> - MiniWorld (July 2023 - August 2023)</p>
                <p>Developed cross-platform mobile apps using React Native.</p>

                <p><strong>Web Developer Intern</strong> - BharatIntern (October 2023 - November 2023)</p>
                <p>Worked on web development projects using React.js, MongoDB, and Express.js.</p>
              </div>

              {/* Education Section */}
              <div className="resume-wrap">
                <h2>Education</h2>
                <div className="underline"></div>
                <p><strong>Bachelor of Technology</strong> - SRKR Engineering College, Bhimavaram (2021 - Present)</p>
                <p>Electronics and Communication Engineering, GPA: 7.99</p>

                <p><strong>Senior Secondary Education</strong> - NARAYANA Junior College, Visakhapatnam (2019 - 2021)</p>
                <p>State Board, Marks: 961</p>

                <p><strong>Secondary School Certificate</strong> - BHASHYAM High School, Vizianagaram (2019)</p>
                <p>CGPA: 10</p>
              </div>

              {/* Certifications Section */}
              <div className="resume-wrap">
                <h2>Certifications</h2>
                <div className="underline"></div>
                <p><strong>Data Structures and Algorithms in Java</strong> - Henotic Solutions, 2023</p>
                <p><strong>Computer Vision Workshop</strong> - SRKR Engineering College, 2023</p>
                <p><strong>Certificate of Appreciation</strong> - Organizing CampX Campus Drive, SRKR Engineering College, 2023</p>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="row justify-content-center mt-5">
              <div className="col-md-6 text-center">
                <p>
                  <a href="#" className="btn btn-primary py-4 px-5">Download CV</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Resume;

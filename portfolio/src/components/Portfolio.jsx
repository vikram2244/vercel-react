import React from 'react';

function Portfolio() {
  return (
    <>
      <div id='Portfolios'>
      <h1 className='text-center' style={{ color: 'red' }}>My Projects</h1>
        <section id="Portfolio" className="Portfolio container my-5 p-5 portfolio-container shadow-lg rounded" style={{ backgroundColor: '#2D2D2D' }}>
          <div className="text-center mb-5">
          </div>

          <div className="row">
            {/* Project 1 */}
            <div className="col-md-4 resume-wrap mb-4">
              <div className="bg1 p-3 shadow project-card d-flex flex-column align-items-center justify-content-center">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.jzrxbRO7mf3goBHIpMX63AHaHa&pid=Api&P=0&h=180"
                  alt="Calculator App"
                  className="img-fluid"
                />
                <div className="main-row1 resume-wrap mt-3 text-center">
                  <h5>Bharat Intern</h5>
                  <h5>Aug 2023 - Sep 2023</h5>
                  <h5>Calculator App</h5>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-4 resume-wrap mb-4">
              <div className="bg2 p-3 shadow project-card d-flex flex-column align-items-center justify-content-center">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.skBqw3OuZpNCvN7BvZ1xbgHaJ4&pid=Api&P=0&h=180"
                  alt="Temperature Converter"
                  className="img-fluid"
                />
                <div className="main-row resume-wrap mt-3 text-center">
                  <h5>Bharat Intern</h5>
                  <h5>Aug 2023 - Sep 2023</h5>
                  <h5>Temperature Converter</h5>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-4 resume-wrap mb-4">
              <div className="bg3 p-3 shadow project-card d-flex flex-column align-items-center justify-content-center">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.Fys0g6KoqpITPK8xv_NdywHaHa&pid=Api&P=0&h=180"
                  alt="Tip Calculator"
                  className="img-fluid"
                />
                <div className="main-row resume-wrap mt-3 text-center">
                  <h5>MINIWORLD TECHNOLOGY</h5>
                  <h5>July 2023 - Aug 2023</h5>
                  <h5>Tip Calculator</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Project 4 */}
            <div className="col-md-4 resume-wrap mb-4">
              <div className="bg4 p-3 shadow project-card d-flex flex-column align-items-center justify-content-center">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.axycne8dhaT59UY6ji53WgHaF7&pid=Api&P=0&h=180"
                  alt="Digital Clock"
                  className="img-fluid"
                />
                <div className="main-row1 resume-wrap mt-3 text-center">
                  <h5>InternPe</h5>
                  <h5>July 2023 - Aug 2023</h5>
                  <h5>Digital Clock</h5>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="col-md-4 resume-wrap mb-4">
              <div className="bg5 p-3 shadow  project-card d-flex flex-column align-items-center justify-content-center">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.tgwzSpbg7EzjDbDBTQEB_AHaFj&pid=Api&P=0&h=180"
                  alt="Airline Reservation"
                  className="img-fluid"
                />
                <div className="main-row1 resume-wrap mt-3 text-center">
                  <h5>Henotic IT Solution</h5>
                  <h5>July 2023 - September 2023</h5>
                  <h5>Airline Reservation System</h5>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="col-md-4 resume-wrap mb-4">
              <div className="bg6 p-3 shadow project-card d-flex flex-column align-items-center justify-content-center">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.oc5Jz8CgxY3oyK0NAKwngQHaFj&pid=Api&P=0&h=180"
                  alt="Netflix Clone"
                  className="img-fluid"
                />
                <div className="main-row1 resume-wrap mt-3 text-center">
                  <h5>Bharat Intern</h5>
                  <h5>Oct 2023 - Nov 2023</h5>
                  <h5>Netflix Clone</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Portfolio;

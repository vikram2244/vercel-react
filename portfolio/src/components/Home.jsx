import React from 'react';

function Home() {
    return (
        <div id='Homes'>
            <section id="home" className="home d-flex align-items-center">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center text-center text-md-left">
                        <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                            <img
                                src="./vikram.png" 
                                alt="Vikram"
                                className="home-img img-fluid"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="home-text">
                                <small>Hello!!</small>
                                <h1>I'm Vikram Tirumala Balaji</h1>
                                <small>A Web Designer & App Developer</small>
                                <p>
                                    I am Vikram Tirumala Balaji, a skilled web and app developer with a passion for creating innovative digital solutions. With a strong background in coding and design, I specialize in crafting user-friendly websites and mobile applications that meet the unique needs of clients. My expertise lies in front-end and back-end development, ensuring a seamless user experience. I am dedicated to staying up-to-date with the latest technologies to deliver cutting-edge solutions. Let's collaborate to bring your digital ideas to life!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

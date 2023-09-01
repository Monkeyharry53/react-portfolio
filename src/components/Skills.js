import web_development from "../assets/img/web_development.svg";
import backend_dev from "../assets/img/backend_dev.svg";
import mobile_dev from "../assets/img/mobile_dev.svg";
import ai from "../assets/img/AI.svg";
import version_collab from "../assets/img/Version_Collaboration.svg";
import cloud_services from "../assets/img/Cloud_Services.svg";
import oopsNalgo from "../assets/img/oopsAlgo.svg";
import dav from "../assets/img/DataAnalysisVisualization.svg";
import testing_debbug from "../assets/img/TestingDebugging.svg";

import React, { useEffect } from 'react';

export const Skills = () => {
    // Function to toggle the "flipped" class on the clicked card
    const flipCard = (event) => {
        const card = event.currentTarget;
        card.classList.toggle('flipped');
    };

    // Add event listener to the cards when the component is mounted
    useEffect(() => {
        const skillCards = document.querySelectorAll('.skills_grid-item');
        skillCards.forEach((card) => {
            card.addEventListener('click', flipCard);
        });

    // Clean up the event listener when the component is unmounted
    return () => {
        skillCards.forEach((card) => {
            card.removeEventListener('click', flipCard);
        });
        };
    }, []);

    return (
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <br></br>

                        <div className="skills_grid-wrapper">
                            <div className="skills_grid-item">
                                <div className="front">
                                    <img
                                    className="skills_grid-image" src={web_development} alt="web development logo"/>
                                    <h3>Web Development</h3>
                                    {/* "Click to read more" text */}
                                    <span className="click-to-read">Click to read more</span>
                                </div>
                                <div className="back">
                                <p>Proficient in building dynamic and responsive web applications using modern
                                technologies such as React, JavaScript, CSS, and HTML. Experienced in utilizing
                                frameworks like Bootstrap and jQuery to create visually appealing interfaces.</p>
                                </div>
                            </div>
              

                            <div className="skills_grid-item">
                                <div className="front">
                                    <img className="skills_grid-image" src={backend_dev} alt="backend development logo" />
                                    <h3>Backend Development</h3> {/* Text after the React logo */}
                                    <span className="click-to-read">Click to read more</span>
                                </div>
                                <div className="back">
                                    <p>Skilled in developing server-side applications using Node.js and
                                    Python Flask, with a strong understanding of RESTful APIs and database </p>
                                </div>
                            </div>
                         

                             <div className="skills_grid-item">
                                    <div className="front">
                                        <img className="skills_grid-image" src={mobile_dev} alt="Mobile App Development:" />
                                        <h3>Mobile App Development</h3> {/* Text after the React logo */}
                                        <span className="click-to-read">Click to read more</span>

                                    </div>
                                    <div className="back">
                                        <p>
                                        Developed cross-platform mobile applications using Flutter and Dart, integrating features like
                                        geospatial APIs, speech-to-text, and chat functionality.
                                        </p>
                                    </div>
                            </div>
                            
                            
                            <div className="skills_grid-item">
                                <div className="front">
                                    <img className="skills_grid-image" src={ai} alt="Artificial Intelligence" />
                                    <h3>Artificial Intelligence</h3> {/* Text after the React logo */}
                                    
                                    <span className="click-to-read">Click to read more</span>
                                </div>
                                <div className="back">
                                    <p>
                                    Experienced in working with OpenAI and LLM, leveraging artificial intelligence
                                    to create chatbots and innovative AI-powered solutions.
                                                                       
                                    </p>
                                </div>
                            </div>
                             
                             
                            <div className="skills_grid-item">
                                <div className="front">
                                    <img className="skills_grid-image" src={version_collab} alt="Version Control & Collaboration logo"/>
                                    <h3>Version Control & Collaboration</h3> {/* Text after the React logo */}
                                    <span className="click-to-read">Click to read more</span>
                                </div> 
                                <div className="back">
                                    <p>
                                    Proficient in Git and Bitbucket for version control, facilitating effective
                                    collaboration and code management within development teams.
                                    </p>
                                </div>
                            </div>
                            
                            
                            
                            <div className="skills_grid-item">
                                <div className="front">
                                    <img className="skills_grid-image" src={cloud_services} alt="Cloud Services logo" />
                                    <h3>Cloud Services</h3> {/* Text after the React logo */}
                                    <span className="click-to-read">Click to read more</span>
                                </div>
                                <div className="back">
                                    <p>
                                    Familiarity with AWS (Amazon Web Services) and AZUR for deploying applications and managing cloud resources.
                                    </p>
                                </div>
                            </div>
                            
                            
                            
                            <div className="skills_grid-item">
                                <div className="front">

                                    <img className="skills_grid-image" src={oopsNalgo} alt="Object-Oriented Programming & Algorithms Logo" />
                                    <h3>Object-Oriented Programming & Algorithms</h3> {/* Text after the React logo */}
                                    <span className="click-to-read">Click to read more</span>
                                </div>
                                <div className="back">
                                    <p>Solid foundation in object-oriented programming concepts and algorithm
                                        development for efficient problem-solving.</p>
                                </div>
                            </div>
                            


                            <div className="skills_grid-item">
                                <div className="front">
                                    <img className="skills_grid-image" src={dav} alt="Data Analysis & Visualization logo" />
                                    <h3>Data Analysis & Visualization</h3> {/* Text after the React logo */}
                                    <span className="click-to-read">Click to read more</span>
                                </div>
                                <div className="back">
                                    <p>Skilled in using Python's Pandas, Matplotlib, and Seaborn libraries to process and analyze data,
                                        presenting insights through informative visualizations.</p>
                                </div>
                            </div>

                            <div className="skills_grid-item">   
                                <div className="front">
                                    <img className="skills_grid-image" src={testing_debbug} alt="Testing & Debugging logo" />
                                    <h3>Testing & Debugging</h3> {/* Text after the React logo */}
                                    <span className="click-to-read">Click to read more</span>
                                </div>      
                                <div className="back">
                                    <p>Experienced in implementing automated testing procedures to ensure robust and bug-free software, 
                                        proficient in using debuggers for efficient issue resolution.</p>
                                </div>                        
                            </div>


                         </div>
                     </div>
                 </div>
             </div>
         </div>
    
     </section>
   )
 }




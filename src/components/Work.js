import TCW from "../assets/img/TCW.png";
import kenna from "../assets/img/kenna.png";
import DKIL from "../assets/img/City.jpg";
import NCR from "../assets/img/NCR_Voyix_logo.svg"
import React, { useState } from 'react';

export const Work = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const [showPopupK, setShowPopupK] = useState(false);
  const togglePopupK = () => {
    setShowPopupK(!showPopupK);
  };

  const [showPopupDK, setShowPopupDK] = useState(false);
  const togglePopupDK = () => {
    setShowPopupDK(!showPopupDK);
  };
  const [showPopupNCR, setShowPopupNCR] = useState(false);
  const togglePopupNCR = () => {
    setShowPopupNCR(!showPopupNCR);
  };

  return (
    <section className="work" id="work">
        <div className="container">
          <h2>Work Experience</h2>


          <div className="h-work-bx-container">
            <div className="h-work-bx wow zoomIn">
              <img src={NCR} alt="NCR"/>
              <h3>NCR</h3>
              <h6><span className="bold">Date:</span> Jan 2024 - April 2024 (4 months)</h6>
              <h6><span className="bold">Position:</span> Fullstack Software Developer Co-op </h6>
              <h6><span className="bold">Tech Used:</span> JavaScript, React, Node.js and Java</h6>
              <h6><span className="bold">Highlights:</span></h6>
              <ul>
                <li>Engaged in regression testing and resolved multiple bugs, including Ajax request and frontend issues.</li>
                <li>Spearheaded the creation of a new PI schema for API, facilitating passport integration.</li>
                <li>Actively participated in cross-functional projects, enhancing communication and teamwork skills.</li>
                <li>Successfully completed project tasks involving multiple application components, showcasing understanding of application architecture.</li>
                <button onClick={togglePopupNCR}>More Details</button>
              </ul>
            </div>
            {/* Pop-up window */}
            {showPopupNCR && (
            <div className="popup">
              <div className="popup-content">
                <div class="nothing">
                  <img src={NCR} alt="NCR"/>

                  <h3>NCR<br></br>
                  Fullstack Software Developer - Co-op	(Jan till April 2024)</h3>
                  <hr></hr>
                  <p>This report provides insights into my transformative work term experience at NCR Voyix.
                    As you delve into the following sections, you'll gain an understanding of the valuable skills
                    I acquired, new development features I contributed to,and the profound impact these experiences
                    have had on my professional growth.<br></br>
                    <h3>Information about the Employer:</h3>
                    NCR Voyix specializes in delivering advanced technological solutions to various industries including restaurants,
                    retail, and banking. Their platforms and services aim to enhance efficiency, sales, and user experiences across 
                    physical and digital realms. As the world's leading digital commerce provider, NCR Voyix offers expertise that helps
                    businesses scale and transform through innovative point-of-sale (POS) software and customer engagement strategies. 
                    They focus on empowering clients to provide exceptional service and experiences, driving digital transformation in commerce.
                    <br></br>
                    I am working with the CSP Imaging "Trailblazers" team, the team comprised of 4 other Software Enginners and 2 Quality Enginners,
                    we work on developing new features for passport imaging which includes working with applications used for cheques. All the members 
                    of my team are supportive, easy to communicate and dedicated towards there work. 
                  </p>
                </div>


                <div class="row">
                  <div class="item-center">
                    <div class="nothing">
                      <h3>Learning Goals</h3>
                      <p>
                        <strong >Goal 1:</strong> Develop Soft Skills:<br></br>
                        Action Plan:
                        <li>Participate in team meetings and contribute to discussions.</li>
                        <li>Work on cross functional project to improve communication, teamwork and project management skills.</li>
                        Measure of Success:
                        <li>Receive positive feedback from team members on my communication and collaboration.</li>
                        <li>Reflect on personal growth in managing tasks and interacting with diverse team members.</li>
                        <hr></hr>
                        <strong>Goal 2:</strong> To gain a comprehensive understanding of the application architecture at NCR, including its components, data flow, and integration points.:<br></br>
                        Action Plan:
                        <li>Schedule Knowledge Sessions - Arrange Regular meetings with team members or architects to discuss the application's architecture.</li>
                        <li>Review Documentation - Dedicate time to read through any available technical documentation.</li>
                        <li>Hands-On Experience - Going through the applications and understanding the data flow.</li>
                        Measure of Success: 
                        <li>Demonstrate my understanding by successfully completing a project task or bug fix that involves multiple components of the application.</li>
                        <li>Successfully explaining the application's architecture, including key components and data flow during review session.</li>
                        <hr></hr>

                        <strong>Goal 3:</strong> Improve Coding Proficiency:<br></br>
                        Action Plan:
                        <li>Learn more about the technologies used in projects.</li>
                        <li>Try to develop new update that can be useful for the application.</li>
                        Measure of Success:
                        <li>Successfully implement features or bug fix with less supervision.</li>
                        <li>Receive positive feedback on code quality and efficiency from senior developers.</li>
                        <hr></hr>
                        These goals collectively fueled my journey at the NCR, equipping me with
                        skills, experiences, and a broader perspective on financial technology's.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="item-center">
                    <div class="nothing">
                      <h3>Job Description</h3>
                      <p>As a member of the NCR team, my role primarily revolved around regression testing, bug fixes, and
                        the development of new features for financial technology applications. I actively participated in 
                        cross-functional projects, contributing to discussions and enhancing communication and teamwork skills.
                        Additionally, I delved into the intricacies of NCR's application architecture, understanding its
                        components, data flow, and integration points. This involved scheduling knowledge sessions, reviewing
                        technical documentation, and gaining hands-on experience with the applications.
                        <br></br>
                        <br></br>
                        One of the significant projects I undertook involved creating a new PI schema for the API, facilitating
                        passport integration. This task not only required technical prowess but also meticulous attention to
                        detail and collaboration with team members. Additionally, I wrote unit tests in JUnit to
                        ensure the robustness and reliability of the newly developed schema.
                      </p>
                    </div>
                  </div>
                </div> 

                <div class="row">
                  <div class="item-center">
                    <div class="nothing">
                      <h3>Summary</h3>
                      <p>In conclusion, my time at NCR has been profoundly enriching, both professionally and personally.
                         Through concerted efforts and dedication, I successfully achieved my learning goals, evidenced
                          by positive feedback from team members, successful project completions, and improved coding
                           proficiency. I emerged from this experience equipped with a comprehensive understanding of 
                           application architecture, enhanced soft skills, and heightened coding proficiency.
                      </p>
                    </div>
                  </div>
                </div> 

                <div class="row">
                  <div class="item-center">
                    <div class="nothing">
                      <h3>Acknowledgments</h3>
                        <p>I extend my heartfelt appreciation to the Team for there mentorship, 
                          guidance, and collaborative spirit.
                          their collective efforts contributed immensely to my learning and growth.
                        </p>
                    </div>
                  </div>
                </div> 

                <button onClick={togglePopupNCR}>Close</button>
              </div>
            </div>
            )}
          </div>






          <div className="h-work-bx-container">
            <div className="h-work-bx wow zoomIn">
              <img src={DKIL} alt="DKIL"/>
              <h3>Digital Kitchener Innovatio Lab - City of Kitchener</h3>
              <h6><span className="bold">Date:</span> May 2023 - August 2023 (4 months)</h6>
              <h6><span className="bold">Position:</span> Innovation Lab Co-op </h6>
              <h6><span className="bold">Tech Used:</span> OpenAI, Large Language Models(LLM), 3D Printing, Dart, Flutter, Geospatial API</h6>
              <h6><span className="bold">Highlights:</span></h6>
              <ul>
                <li>Created chatbot using OpenAI API and LLM to
                    enable users to inquire about zoning bylaws in
                    Kitchener, including building regulations, parking,
                    and land usage restrictions.</li>
                <li>Collaborated in team to create a Flutter-based
                    sustainability app with gamification, LLM chat,
                    speech-to-text, and geospatial API integration.</li>
                <li>Developed efficient web app, EcoScan, utilizing
                    RoboFlow's dataset and YOLOv8 model for object
                    detection and waste categorization.</li>
                <button onClick={togglePopupDK}>More Details</button>
              </ul>
            </div>
            {/* Pop-up window */}
            {showPopupDK && (
            <div className="popup">
              <div className="popup-content">
                <div class="nothing">
                  <img src={DKIL} alt="Digital Kitchener Innovation Lab"/>

                  <h3>Digital Kitchener Innovation Lab - City of Kitchener<br></br>
                  Innovation Lab Co-op	(May 2023 till August 2023)</h3>
                  <hr></hr>
                  <p>This report provides insights into my transformative work term experience at the Digital Kitchener
                    Innovation Lab within the City of Kitchener. As you delve into the following sections, you'll gain an
                    understanding of the valuable skills I acquired, innovative projects I contributed to,
                    and the profound impact these experiences have had on my professional growth.<br></br>
                    <h3>Information about the Employer:</h3>
                    The Digital Kitchener Innovation Lab, a creative hub within the City of Kitchener, served as my workplace
                    during this period. This dynamic institution focuses on harnessing technological advancements such as AI, Web and mobile softwares,
                    VR, AR and 3D printing to develop solutions that benefit the city and its residents. The team, comprised of
                    other co-ops and Lab Manager, we collaborate with other departments of City of Kitchener to explore cutting-edge
                    technologies and their potential applications to enhance city services and experiences.
                  </p>
                </div>


                <div class="row">
                  <div class="item-center">
                    <div class="nothing">
                      <h3>Learning Goals</h3>
                      <p>
                        <strong >Goal 1:</strong> Explore Object Detection Libraries:<br></br>
                        Action Plan: study YOLO-NAS and tenserflow documentation, experiment with pre-trained models, implement in projects, collaborate for fresh ideas.<br></br>
                        Measure of Success:  Successful deployment in practical app, adaptable YOLO-NAS models, innovative use case presentation.
                        <hr></hr>
                        <strong>Goal 2:</strong> AI Proficiency and AWS Exposure:<br></br>
                        Action Plan: Online AI courses, AWS platform exploration, learn from AI and AWS experts.<br></br>
                        Measure of Success: Proficient AI algorithm implementation, completion of an AWS-based AI project.
                        <hr></hr>

                        <strong>Goal 3:</strong> Master 3D Printing Techniques:<br></br>
                        Action Plan:  Learn to use 3D printing tools, e.g., SketchUp.<br></br>
                        Measure of Success: Creation and successful printing of a detailed City Hall model.
                        <hr></hr>
                        These goals collectively fueled my journey at the Digital Kitchener Innovation Lab, equipping me with
                        skills, experiences, and a broader perspective on technology's impact on urban development.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="item-center">
                    <div class="nothing">
                      <h3>Job Description</h3>
                      <p>During my work term, I was deeply involved in several exciting projects, including:
                        <li>Creating a chatbot using OpenAI API and LLM for zoning bylaw inquiries.</li>
                        <li>Collaborating on a Flutter-based sustainability app with gamification and geospatial integration.</li>
                        <li>Developing the EcoScan web app, utilizing YOLOv8 and roboflow for waste categorization.</li>
                        <li>Exploring VR headset applications and 3D printing, culminating in a detailed city hall model.</li>
                        Skills required for my role included proficiency in AI, deep learning, object detection, web development, 
                        and effective teamwork. While my academic background provided foundational knowledge, 
                        the practical implementation and collaboration within the innovation lab significantly enhanced my skills.
                      </p>
                    </div>
                  </div>
                </div> 

                <div class="row">
                  <div class="item-center">
                    <div class="nothing">
                      <h3>Summary</h3>
                      <p>In conclusion, my work term at the Digital Kitchener Innovation Lab provided an immersive experience 
                        into the realm of cutting-edge technologies and their potential impact on city services. The journey 
                        allowed me to achieve and surpass many of my set goals, while also highlighting areas for continued growth. 
                        By working alongside skilled professionals and contributing to impactful projects, I have not only 
                        expanded my skill set but also deepened my passion for leveraging technology for societal betterment.
                      </p>
                    </div>
                  </div>
                </div> 

                <div class="row">
                  <div class="item-center">
                    <div class="nothing">
                      <h3>Acknowledgments</h3>
                        <p>I extend my heartfelt appreciation to the Lab Manager Courtney Zinn for her mentorship, 
                          guidance, and collaborative spirit.  I am also grateful to other teams and my fellow co-ops,
                          their collective efforts contributed immensely to my learning and growth.
                        </p>
                    </div>
                  </div>
                </div> 

                <button onClick={togglePopupDK}>Close</button>
              </div>
            </div>
            )}
          </div>
          

          <div className="h-work-bx-container">
            <div className="h-work-bx wow zoomIn">
              <img src={kenna} alt="kenna"/>
              <h3>Kenna</h3>
              <h6><span className="bold">Date:</span> Septmber 2022 -  December 2022 (4 months)</h6>
              <h6><span className="bold">Position:</span> Web Application Developer </h6>
              <h6><span className="bold">Tech Used:</span> JavaScript, React, Node.js, MYSQL, IBM Notes, Jira</h6>
              <h6><span className="bold">Highlights:</span></h6>
              <ul>
                <li>Developed and maintained web applicationsusing Node.js, React, MSSQL, and JavaScript.</li>
                <li>Debugged and resolved production issues in a timely manner.</li>
                {/* <button><a href="https://monkeyharry53.github.io/co-op_workreport/" target="_blank" rel="noreferrer">More Details</a></button> */}
                <button onClick={togglePopupK}>More Details</button>
              </ul>
            </div>


            {/* Pop-up window */}
            {showPopupK && (
              <div className="popup">
                <div className="popup-content">
                  {/* Add your new information here */}
                  {/* You can style this popup using additional CSS */}
                  <div class="nothing">
                    {/* <img src="harry.jpg"> */}
                    <img src={kenna} alt="kenna"/>
                  
                    <h3>Kenna<br></br>
                    Web Application Developer (September 2022 till December 2022)</h3>
                    <hr></hr>
                    <p>Welcome to the summary of my work term experience at Kenna Technology 
                      Solutions Inc. During this period, I had the opportunity to delve into
                      web application development and gain valuable insights into various 
                      technologies and practices.
                
                      <h3>Information about the Employer:</h3>
                
                      Kenna Technology Solutions Inc. stands as a prominent provider of technology
                      solutions for businesses of all sizes. Our primary focus is on delivering 
                      comprehensive IT solutions that enhance productivity, cut costs, and enhance
                      customer service. With a dedicated team of skilled engineers and technicians,
                      we strive to identify the most effective solutions to cater to our clients' needs.
                      Our service spectrum includes infrastructure, security, data storage, cloud computing,
                      and more. We also extend consulting services to help businesses maximize their technology
                      investments. Dedicated to excellence, Kenna Technology Solutions is committed to fostering business success.
                    </p>
                  </div>


                  <div class="row">
                    <div class="item-center">
                      <div class="nothing">
                        <h3>Learning Goals</h3> 
                        <p>
                        My work term at Kenna Technology Solutions was guided by several learning goals:<br></br>
                        <br></br>
                        <strong>Goal 1: </strong>Develop proficiency in technical skills and tools used in a professional environment.<br></br>
                        Action Plan 1: Acquire hands-on experience with frameworks I've encountered at an educational level, while also
                        exploring new applications.<br></br>
                        Measure of Success 1:<br></br>
                        • Completed multiple projects involving React, Node.js, and MSSQL.<br></br>
                        • Gained familiarity with IBM Notes.
                        <hr></hr>

                        <strong>Goal 2:</strong> Gain experience in professional teamwork.<br></br>
                        Action Plan:  Actively participate in team meetings, engage in effective communication with team members, 
                        and observe experienced professionals.<br></br>
                        Measure of Success: <br></br>
                        • Attained a solid grasp of team dynamics and workflow.
                        • Established connections with colleagues through participation in meetings and discussions.
                        <hr></hr>

                        <strong>Goal 3:</strong> : Acquire familiarity with new software.<br></br>
                        Action Plan: Engage with tools like Jira and Bitbucket.<br></br>
                        Measure of Success: <br></br>
                        • Successfully resolved several Jira tickets.
                        • Mastered branching and code merging on Bitbucket.
                        <hr></hr>

                        Reflecting on my goals, I achieved success in completing projects involving React
                        communication, there's room for improvement in terms of deeper integration and 
                        collaboration. I successfully engaged with Jira and Bitbucket, but further 
                        exploration is necessary.
                        </p>
                      </div>
                    </div>
                  </div>
            
                  <div class="row">
                    <div class="item-center">
                      <div class="nothing">
                        <h3>Job Description</h3>
                        <p>During my tenure at Kenna, I was responsible for the development and maintenance of
                           React applications integrated with Node.js. My tasks encompassed creating components, 
                           interfacing with APIs, writing unit tests, and troubleshooting issues. I closely 
                           collaborated with the software engineering team to ensure applications met business requirements.
                          <br></br>
                          This experience empowered me to comprehend the component-based structure of React and the 
                          benefits of Node.js for backend development. I honed skills in code structuring, 
                          debugging, and error resolution.</p>
                      </div>    
                    </div>
                  </div> 

                  <div class="row">
                    <div class="item-center">
                      <div class="nothing">
                        <h3>Conclusions</h3>

                          <p>In conclusion, my work term at Kenna Technology Solutions was profoundly enriching. 
                            I expanded my skill set, particularly in front-end development, and gained insights 
                            into working within a small development team. This experience unveiled my strengths 
                            and areas for growth, providing a strong foundation for future co-op endeavors.</p>

                        </div>
                      </div>
                    </div> 

                    <div class="row">
                      <div class="item-center">
                        <div class="nothing">
                          <h3>Acknowledgments</h3>

                          <p>I extend my gratitude to the team at Kenna Technology Solutions for their guidance 
                            and support throughout this work term. Their expertise and mentorship have been 
                            instrumental in shaping my professional growth.</p>

                        </div>    
                      </div>
                    </div> 
                    <button onClick={togglePopupK}>Close</button>
                  </div>
                </div>
                )}
              </div>
        
              <div className="h-work-bx-container">
                <div className="h-work-bx wow zoomIn">
                  <img src={TCW} alt="Township of Centre Wellington"/>
                  <h3>Township of Centre Wellington</h3>
                  <h6><span className="bold">Date:</span> May 2022 - August 2022 (4 months)</h6>
                  <h6><span className="bold">Position:</span> Co-op IT&S </h6>
                  <h6><span className="bold">Tech Used:</span> Python flask, JavaScript, Apache Web Server, C#, MSSQL</h6>
                  <h6><span className="bold">Highlights:</span></h6>
                  <ul>
                    <li>Working with RESTful APIs Provided by the Township of Centre Wellington to Automate
                        the information on their private Cloud service</li>
                    <li>Hosting the Website on Apache server.</li>
                    {/* <button><a href="https://monkeyharry53.github.io/co-op_workreport/" target="_blank" rel="noreferrer">More Details</a></button> */}
                    <button onClick={togglePopup}>More Details</button>
                  </ul>
                </div>
                {/* Pop-up window */}
                {showPopup && (
                <div className="popup">
                  <div className="popup-content">
                    {/* Add your new information here */}
                    {/* You can style this popup using additional CSS */}
                    <div class="nothing">
                      {/* <img src="harry.jpg"> */}
                      <img src={TCW} alt="Township of Centre Wellington"/>
                
                      <h3>Township of Centre Wellington<br></br>
                        IT&S co-op student	(May 2022 till August 2022)</h3>
                      <hr></hr>
                      <p>During my summer co-op at the Township of Centre Wellington, I was tasked with assisting in
                        the deployment of two projects. However, due to changing client requirements, we focused on one
                        project instead. Collaborating with a colleague, I worked on building an integration between PSD
                        CityWide and the Township GIS system. This involved utilizing Microsoft Power Automate, the CityWide
                        API, and Microsoft SQL to redesign and launch our corporate Intranet.
                
                        CityWide serves as the Township's internal website for management-related information and resources.
                        My responsibilities extended to building a website using Python Flask as the backend, which interacted
                        with the RESTful API to retrieve and compare data with the Township GIS system, ultimately saving it to
                        the MSSQL server.
                      </p>
                    </div>
                
                
                    <div class="row">
                     <div class="item-center">
                      <div class="nothing">
                        <h3>Learning Goals</h3>
        
                        <p>
                          <strong >Goal 1:</strong> Master RESTful API Usage<br></br>
                          Action Plan: Retrieve Asset Data from CityWide, choose appropriate programming language and data frame.<br></br>
                          Measure of Success: Develop a secure Python Flask website exporting API data to MSSQL.
                          <hr></hr>

                          <strong>Goal 2:</strong> Proficiency in MSSQL<br></br>
                          Action Plan: Complete Stromwind course, practice exercises.<br></br>
                          Measure of Success: Create tables and views using API and existing data in MSSQL.
                          <hr></hr>

                          <strong>Goal 3:</strong> Web Server Hosting<br></br>
                          Action Plan: Understand IAS and Apache servers, select suitable server.<br></br>
                          Measure of Success: Host Apache server linked to MSSQL.
                          <hr></hr>

                          <strong>Goal 4:</strong> Professional & Ethical Behavior<br></br>
                          Action Plan: Actively participate in meetings, contribute to discussions.<br></br>
                          Measure of Success: Active engagement in meetings, collaborative contributions.
                          <hr></hr>


                          <strong>Goal 5:</strong> Technical Documentation<br></br>
                          Action Plan: Learn from experience and peers' documentation.<br></br>
                          Measure of Success: Create effective reports and documentation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="item-center">
                      <div class="nothing">
                        <h3>Job Description</h3>
                        <p>During my co-op, I collaborated on integrating PSD CityWide and Township GIS.
                          To understand the project, I engaged with the client and colleagues, delved into
                          project documents, and attended meetings. I proposed creating a Python Flask-based
                          website, enhancing communication between API and MSSQL while providing a user-friendly interface.</p>
                      </div>    
                    </div>
                  </div> 

                  <div class="row">
                    <div class="item-center">
                      <div class="nothing">
                        <h3>Summary</h3>

                          <p>Through this project, I expanded my knowledge of JavaScript, Python Flask, MSSQL, HTML, and CSS . I
                            completed a Stromwind course on Python Flask security, implementing login security using
                            Flask libraries and SQLalchemy. To enhance my skills in working with databases, I undertook
                            a T-SQL course from Stromwind.<br></br>

                            Hosting the website on an Apache server was a challenging yet rewarding experience. I learned
                            about web server hosting, troubleshooting compatibility issues, and connecting the Apache server
                            with MSSQL. The entire process was documented for future reference.</p>

                            </div>

                      </div>
                    </div> 
                    {/* </div> */}
                    <button onClick={togglePopup}>Close</button>
                  </div>
                </div>
              )}
          </div>
        </div>  
    </section>
  )
}

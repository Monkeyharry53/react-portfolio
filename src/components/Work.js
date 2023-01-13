import TCW from "../assets/img/TCW.png";
import kenna from "../assets/img/kenna.png";

export const Work = () => {
  return (
    <section className="work" id="work">
        <div className="container">
            <div className="row">
                <h2>Work Experience</h2>
                <div className="jobs">
                    <div className="work-bx wow zoomIn">
                      <img src={TCW} alt="Township of Centre Wellington"/>
                      <h3>Township of Centre Wellington</h3>
                      <h6><span className="bold">Date:</span> May 2022 - August 2022 (4 months)</h6>
                      <h6><span className="bold">Position:</span> Co-op IT&S </h6>
                      <h6><span className="bold">Tech Used:</span> Python flask, JavaScript, Apache Web Server, C#, MSSQL</h6>
                      <h6><span className="bold">Highlights:</span></h6>
                      <ul>
                        <li>Working with RESTful APIs Provided by the Township of Centre Wellington to Automate
                            the information on their private Cloud service</li>
                        <li>Using JavaScript, Python, flask, jQuery, Ajax CSS, and HTML to create a website</li>
                        <li>Hosting the Website on Apache server.</li>
                        <li>Using Microsoft 365 cloud service and Microsoft viva.</li>
                        <button><a href="https://monkeyharry53.github.io/co-op_workreport/" target="_blank" rel="noreferrer">More Details</a></button>
                      </ul>
                    </div>
                    <div className="work-bx wow zoomIn">
                        <div>
                          <img src={kenna} alt="Kenna"/>
                          <h3>Kenna</h3>
                          <h6><span className="bold">Date:</span> Septmber 2022 -  December 2022 (4 months)</h6>
                          <h6><span className="bold">Position:</span> Web Application Developer </h6>
                          <h6><span className="bold">Tech Used:</span> JavaScript, React, Node.js, MYSQL, IBM Notes, Jira</h6>
                          <h6><span className="bold">Highlights:</span></h6>
                          <ul>
                            <li>Expand my ability to develop web apps using Node.js and React</li>
                            <li>become accustomed to using IBM Notes for the development.</li>
                            <li>Update, enhance and maintain existing web solutions</li>
                            <button><a href="https://monkeyharry53.github.io/Kenna-work-term/" target="_blank" rel="noreferrer">More Details</a></button>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>          
            </div>
    </section>
  )
}

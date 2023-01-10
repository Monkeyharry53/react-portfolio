import  reactLogo  from "../assets/img/react-logo.svg";
import jsLogo from "../assets/img/javascript-logo2.svg";
import pythonLogo from "../assets/img/python-logo.png";
import cLogo from "../assets/img/C-logo.svg";
import javaLogo from "../assets/img/java-logo.png";
import flaskLogo from "../assets/img/flask-logo.png";
import nodeLogo from "../assets/img/node-logo.png";
import htmlLogo from "../assets/img/html-logo.jpg";
import cssLogo from "../assets/img/css-logo.png";
import sqlLogo from "../assets/img/mysql-logo.png";
import ibmLogo from "../assets/img/ibm-logo.png";
import csharpLogo from "../assets/img/c.svg";


export const Skills = () => {
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
                                <img className="skills_grid-image" src={reactLogo} alt="react Logo" />
                            </div>

                            <div className="skills_grid-item">
                               
                                    <img className="skills_grid-image" src={jsLogo} alt="JS Logo" />
                           
                            </div>
                            <div className="skills_grid-item">
                               
                                    <img className="skills_grid-image" src={pythonLogo} alt="python Logo" />
                              
                            </div>
                            <div className="skills_grid-item">
                               
                                    <img className="skills_grid-image" src={cLogo} alt="c Logo" />
                             
                            </div>
                            <div className="skills_grid-item">
                                
                                    <img className="skills_grid-image" src={javaLogo} alt="java Logo" />
                                
                            </div>
                            <div className="skills_grid-item">
                               
                                    <img className="skills_grid-image" src={flaskLogo} alt="flask Logo" />
                                
                            </div>
                            <div className="skills_grid-item">
                                
                                    <img className="skills_grid-image" src={nodeLogo} alt="node Logo" />
                                
                            </div>



                            <div className="skills_grid-item">
                               
                                    <img className="skills_grid-image" src={htmlLogo} alt="html Logo" />
                               
                            </div>


                            <div className="skills_grid-item">
                               
                                    <img className="skills_grid-image" src={cssLogo} alt="css Logo" />
                                
                            </div>


                            <div className="skills_grid-item">
                               
                                    <img className="skills_grid-image" src={sqlLogo} alt="mysql Logo" />
                             
                            </div>


                            <div className="skills_grid-item">
                               
                                    <img className="skills_grid-image" src={ibmLogo} alt="IBM Logo" />
                               
                            </div>


                            <div className="skills_grid-item">
                                
                                    <img className="skills_grid-image" src={csharpLogo} alt="c# Logo" w/>
                               
                            </div>



                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}




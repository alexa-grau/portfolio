// import logo from './logo.svg';
// import resume from './documents/resume.pdf';
import './App.css';
import {
  Container, Row, Col, Button
} from 'reactstrap';

import myImage from './images/IMG_5036.jpg';

import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Section from './components/Section';
import TabbedContent from './components/TabbedContent';
import Projects from './components/Projects';

import nicaAquaImage from './images/NicaAgua.png';
import sjmImage from './images/SJM.png';
import datingImage from './images/Dating_App.png';
import businessImage from './images/Business_Reg.png';
import auditImage from './images/Audit.png';


import {
  ExternalLink,
  Figma,
  Github,
  LinkedIn,
  PaperClip
} from './components/Icons';

function App() {
  const educationItems = [
    {
      tabTitle: "Master's",
      fullTitle: "M.S. Computer Engineering @ Santa Clara University",
      dateString: "Sept 2020 - June 2022",
      listPoints: ["GPA 3.8/4.0", "Graduated with Distinction"],
      other: "Relevant Coursework: Software Develop Process Management, Technology Entrepreneurship, Mobile Application Development, Object Oriented Analysis Design Programming, Computational Creativity"
    },
    {
      tabTitle: "Bachelor's",
      fullTitle: "B.S. Web Design & Engineering @ Santa Clara University",
      dateString: "Sept 2017 - June 2021",
      listPoints: ["Minor in Computer Engineering", "GPA 3.6/4.0", "Graduated Cum Laude"],
      other: "Relevant Coursework: Web Development, Web Infrastructure, Web Usability, Advanced Web Development, Software Engineering, Website Graphic Design, Engineering Communications"
    },
  ];
  const experienceItems = [
    {
      tabTitle: "Teaching Assistant",
      fullTitle: "Teaching Assistant @ SCU Computer Engineering Dept.",
      dateString: "Sept 2021 - June 2022",
      listPoints: [
        "Guided undergraduate students to meet learning objectives by completing projects in HTML, CSS, JavaScript, and Ruby",
        "Broke down fundamental concepts and coding languages for students to fully grasp materials, ensuring the success of over 60 students per quarter",
        "Collaborated with professors to develop teaching materials and content to promote student engagement"
      ],
    },
    {
      tabTitle: "Web Specialist",
      fullTitle: "Web Specialist @ SCU Alumni Association",
      dateString: "May 2019 - Dec 2021",
      listPoints: [
        "Maintained and updated Santa Clara University's alumni website, serving over 106,000 living alumni",
        "Led project design showcasing Alumni Relations diversity & inclusion efforts receiving over 1,100 views since published",
        "Analyzed web traffic through Google Analytics to help drive website content decisions, resulting in 326% traffic increase",
        "Partnered with 10+ alumni directors to create, modify, and display content in dynamic ways"
      ],
    },
    {
      tabTitle: "Full Stack Intern",
      fullTitle: "Full Stack Intern @ Appstrax Technology",
      dateString: "July 2019 - Aug 2019",
      listPoints: [
        "Partnered with designers to build a company website from scratch using Figma.com and Angular",
        "Automated customer relations management functionality to increase company efficiency and user experience"
      ],
    }
  ];

  const projects = [
    {
      title: "NicaAgua",
      description: "Mobile app that enables the deliver of water quality and weather information to farmers in real time. Used React Native, Node.js, MySQL hosted on AWS.",
      icons: [{icon: <LinkedIn />, href: "https://www.linkedin.com/posts/frugal-innovation-hub_humanitarianengineering-humanitariantechnology-activity-6966160321241579520-SXUE?utm_source=linkedin_share&utm_medium=member_desktop_web"}, {icon:<PaperClip />, href:"https://scholarcommons.scu.edu/cseng_senior/204/"}],
      img: nicaAquaImage,
    },
    {
      title: "Servicio Jesuita para Migrantes Costa Rica",
      description: "Web app providing resources for Costa Rican immigrants, including citizenship test practice and more. Used React, MongoDB.",
      icons: [{icon: <ExternalLink />, href: "https://app.serviciojesuitacr.org/"}],
      img: sjmImage,
    },
    {
      title: "Dating App Generator",
      description: "Co-creative system that writes dating app opening lines and profiles. Powered by GPT-3. Used Node.js, Express, HTML, Bootstrap.",
      icons: [{icon: <Github />, href: "https://github.com/alexa-grau/dating-app-opening-lines"}],
      img: datingImage,
    },
    {
      title: "Alumni Business Registry",
      description: "Project featuring 140 SCU alumni-owned and affiliated businesses. Used TerminalFour CMS.",
      icons: [{icon: <ExternalLink />, href: "https://www.scu.edu/alumni/bronco-business-registry/"}],
      img: businessImage,
    },
    {
      title: "Alumni Audit Program",
      description: "Undertook product management for program. Analyzed program requirements and translated outdated processes to use automated technologies.",
      icons: [{icon: <ExternalLink />, href: "https://www.scu.edu/alumni/learn/takeaclass/class-audit-program/"}],
      img: auditImage,
    },
    {
      title: "Portfolio",
      description: "This website! Designed using Figma. Written using React and Reactstrap. Hosted on Heroku.",
      icons: [{icon: <Figma />, href: "https://www.figma.com/file/JGD9tJRlYrKxbjCMltU179/Portfolio?node-id=0%3A1"}, {icon: <Github />, href: ""}]
    },
  ];

  const tech1 = ["JavaScript (ES6+)", "React", "Node.js", "jQuery"];
  const tech2 = ["Ruby on Rails", "HTML/CSS", "Bootstrap"];

  const tech1Items = tech1.map((tech) => <li key={"tech-"+tech}>{tech}</li>);
  const tech2Items = tech2.map((tech) => <li key={"tech-"+tech}>{tech}</li>);

  return (
    <div>
      <NavBar />
      <Container className="content">
        <Landing />
        <Section id="about" title="About me" content={
            <Row>
              <Col sm="12" md="6">
                <p>Hello! My name is Alexa &#40;if only my parents could have predicted that one&#41;. From a young age, I loved problem solving. Today, that looks like designing and developing apps, websites, and more &#45; deliverables that address the root of a user's problem.</p>
                <p>I have my Master's of Science in Computer Science &amp; Engineering, and my Bachelor's of Science in Web Design &amp; Engineering. This degree combination gave me both the technical and creative tools to create excellent technology. In addition to my studies I was a NCAA Division I athlete, cementing my goal setting, time management, and teamwork skills.</p>
                <p>Recently, I've been working with:</p>
                <Row>
                  <Col><ul>{tech1Items}</ul></Col>
                  <Col><ul>{tech2Items}</ul></Col>
                </Row>
              </Col>
              <Col sm="12" md="6">
                <img id="aboutImage" src={myImage} alt="Alexa in from of the mission at the Santa Clara University campus" />
              </Col>
            </Row>
          } />
        <Section id="education" title="Education" content={
            <TabbedContent items={educationItems} />
          } />
        <Section id="experience" title="Experience" content={
            <TabbedContent items={experienceItems} />
          } />
        <Section id="projects" title="Projects" content={
            <Projects items={projects} />
          } />
        <Section center intro="Like what you see?" id="contact" title="Contact" content={
            <div>
            <p>I’m open to new job opportunities! My inbox is open and I’ll get back to you as soon as possible.</p>
            <Button className="p-3" href='mailto:alexawgrau@gmail.com' color='info' outline>Say Hello</Button>
            </div>
          } />
      </Container>
    </div>
  );
}

export default App;
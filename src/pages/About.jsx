import Header from '../components/Header';

const About = () => (
  <div>
    <Header />
    <div className="about__container">
      <div className="about__profilepic">
        <img src="img/profilepic.jpg" alt="logo" className="about__picture" />
        <h2 className="about__name">Jessica Martínez Alee</h2>
        <span className="about__username">Jessaleem</span>
        <p type="email"> email: aleejess@gmail.com </p>
        <a href="https://github.com/Jessaleem">GitHub</a>
        <a href="https://www.linkedin.com/in/jessica-mart%C3%ADnez-alee-66262b37/">LinkedIn</a>
      </div>
      <div className="about__description">
        <h2 className="about__title"><b>Hi, I’m Jessica</b></h2>
        <p className="about__paragraph">I am an Electronic Engineer with a specialization in Engineering Project Management and a
          FullStack web developer in process.
        </p>
        <p className="about__paragraph">
          I am currently enrolled in the Make it Real TOP program, during this time I have learned
          how to look for resources to solve programming challenges, I have worked on a group
          project in a professional enviroment using platforms and libraries such as React, Redux,
          and Node Js. and the version control system Git - Github. The project tasks have been
          followed up with the Scrum framework.
        </p>
        <p>Specific topics I have learned during the TOP program:</p>
        <ul>
          <li>Agile Methodologies, specifically I have worked with Scrum. </li>
          <li>Git and GitHub, I’ve been using this version control system in individual challenges
            and in the group project.
          </li>
          <li>React with Hooks, Props, Contex, React router Dom and tools such as ESLint, husky</li>
        </ul>

      </div>
    </div>
  </div>

);

export default About;

import profilePic from './foto.jpeg';

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <img src={profilePic} alt="Luis Quiñones" />
        <div>
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Luis Quiñones</strong>, a passionate software developer specializing in building secure, intelligent systems that drive innovation and solve real-world challenges. With a solid foundation in <strong>cybersecurity</strong> and <strong>machine learning</strong>.
          </p>
          <p> 
          &nbsp;
          </p>
          <p>
            <strong>In cybersecurity:</strong> I focus on designing and implementing secure systems, performing vulnerability assessments, and defending against emerging threats. My knowledge includes threat modeling, encryption, secure coding practices, and the ability to analyze and mitigate risks in software and infrastructure.
          </p>
          <p> 
          &nbsp;
          </p>
          <p>
            <strong>In machine learning:</strong> I have worked with different learning models that help with automation. I have experience in supervised and unsupervised learning techniques, natural language processing, and deep learning frameworks.
          </p>
          <p> 
          &nbsp;
          </p>
          <p>
            In my free time, I stay updated with the latest advancements in software development, cybersecurity, and artificial intelligence. When I'm not coding, I enjoy gaming, socializing, and learning new technologies, which helps me recharge and stay creative.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

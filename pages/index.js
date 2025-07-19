export default function Home() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap');

        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          scroll-behavior: smooth;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        @media (max-width: 768px) {
          h1 { font-size: 2rem; }
          .project-card { padding: 20px; }
        }
      `}</style>

      <div>
        {/* ------------------------ */}
        {/* Navigation Bar */}
        {/* ------------------------ */}
        <nav style={navStyle}>
          <div style={{ fontWeight: '600', fontSize: '20px', color: '#2563eb' }}>
            VAIBHAV SHINDE
          </div>
          <div style={{ display: 'flex', gap: '30px', fontSize: '16px' }}>
            <a href="#about" style={navLinkStyle}>About</a>
            <a href="#projects" style={navLinkStyle}>Projects</a>
            <a href="#experience" style={navLinkStyle}>Experience</a>
            <a href="#contact" style={navLinkStyle}>Contact</a>
          </div>
        </nav>

        {/* ------------------------ */}
        {/* Hero Section */}
        {/* ------------------------ */}
        <div style={heroContainer}>
          <div style={overlayStyle}></div>
          <div style={heroContent}>
            <h1 style={{ fontSize: '2.8rem', marginBottom: '10px', color: '#fff', fontWeight: '600' }}>
              Hi, I'm <span style={{ color: '#93c5fd' }}>Vaibhav Shinde</span>
            </h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '25px', color: '#fff', fontWeight: '400' }}>
              Jr Data Scientist | Data Analyst
            </p>
            <div style={buttonGroup}>
              <a href="#projects">
                <button style={buttonStyleBlue}>View My Projects</button>
              </a>
              <a href="/resume.pdf" download>
                <button style={buttonStyleWhite}>Download Resume</button>
              </a>
            </div>
          </div>
        </div>

        {/* ------------------------ */}
        {/* About Section */}
        {/* ------------------------ */}
        <section id="about" style={aboutStyle}>
          <h2 style={sectionHeader}>About Me</h2>
          <div style={underline}></div>
          <p style={aboutText}>
            I am currently pursuing an <strong>MSc</strong> in <strong>Data Science</strong> at <strong>University of Essex</strong> ,Where I am developing a strong foundation in machine learning, statistical analysis, and data-driven decision-making. I have a deep passion for uncovering insights from data and connecting the dots to tell meaningful, impactful stories.</p>
          <p style={locationText}>
            <img src = "loc.png" alt = "location" style = {{width: '20px', verticalAlign: 'middle', marginRight: '8px' }} />University of Essex | London</p>
          <h3 style={{ marginTop: '60px', fontSize: '1.3rem', fontWeight: '600' }}>Technical Skills</h3>
          <div style={skillsContainer}>
            {["Python", "SQL", "MySQL", "AWS", "GoogleCloud", "Seaborn", "Sklearn", "Statistics", "Visualization", "Machine Learning"].map(skill => (
              <span key={skill} style={skillPill}>{skill}</span>
            ))}
          </div>
        </section>

        {/* ------------------------ */}
        {/* Projects Section */}
        {/* ------------------------ */}
        <section id="projects" style={projectsSectionStyle}>
          <h2 style={sectionHeader}>Projects</h2>
          <div style={underline}></div>
          <div style={projectsGrid}>
            {[...Array(1)].map((_, i) => (
              <div key={i} className="project-card" style={{ ...projectCard, transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)' }>
                <h3 style={projectTitle}>CleanO </h3>
                <p style={projectDescription}>
                  CleanO is a smart dustbin management system that incentivizes users by offering rewards to encourage proper and responsible waste disposal and over all dust management analysis.
                </p>
                <a href="https://github.com/Vaibhav365ai" target="_blank" rel="noopener noreferrer">
                  <button style={projectButton}><img src="git2.png" alt="Huawei" style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} /></button>
                </a>
              </div>
            ))}
          </div>
          <div style={projectsGrid}>
            {[...Array(1)].map((_, i) => (
              <div key={i} className="project-card" style={{ ...projectCard, transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)' }>
                <h3 style={projectTitle}>Churn Prediction</h3>
                <p style={projectDescription}>
                  Description of the project including tools used and problems solved. Showcase your creativity and solution-oriented thinking.
                </p>
                <a href="https://github.com/Vaibhav365ai" target="_blank"rel="noopener noreferrer">
                  <button style={projectButton}><img src="git2.png" alt="Huawei" style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px',}} /></button>
                </a>
              </div>
            ))}
          </div>
          <div style={projectsGrid}>
            {[...Array(1)].map((_, i) => (
              <div key={i} className="project-card" style={{ ...projectCard, transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)' }>
                <h3 style={projectTitle}> Fake Job Detection </h3>
                <p style={projectDescription}>
                  Description of the project including tools used and problems solved. Showcase your creativity and solution-oriented thinking.
                </p>
                <a href="https://github.com/Vaibhav365ai"target="_blank" rel="noopener noreferrer">
                  <button style={projectButton}><img src="git2.png" alt="Huawei" style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} /></button>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------ */}
        {/* Experience Section */}
        {/* ------------------------ */}
        <section id="experience" style={{ ...projectsSectionStyle, backgroundColor: 'white' }}>
          <h2 style={sectionHeader}>Experience</h2>
          <div style={underline}></div>
          <div style={projectsGrid}>
            <div style={projectCard}><img src="Database.png" alt="Database" style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} /><h3>Intern - Data Science</h3><p>NoviTech R&D Pvt Ltd. (2023)<br/>Worked on churn prediction models and dashboards using Python & Power BI.</p></div>
            <div style={projectCard}><img src="powerbi.png" alt="data analysis" style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} /><h3>Data Analyst</h3><p>L&TMind Tree (2025)<br/>Data Monetization
new revenue streams and optimize costs with AI-powered insights.</p></div>
          </div>
        </section>

        {/* ------------------------ */}
        {/* Certification Section */}
        {/* ------------------------ */}
        <section id="certifications" style={{ ...projectsSectionStyle, backgroundColor: '#f0f4f8' }}>
          <h2 style={sectionHeader}>Certifications & Achievements</h2>
          <div style ={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginTop: '40px',
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <div style={projectCard}>
               <img src="google.png" alt="Google" style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} />
                  <h4 style={{ display: 'inline' }}>Google Data Analytics </h4><p>Earned in 2024 - Developed foundational skills in data cleaning, analysis, and visualization.</p>
            </div>
            <div style={projectCard}>
              <img src="huawei.png" alt="Huawei" style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} />
                 <h4 style={{ display: 'inline' }}>Huawei Hackathon</h4>
                 <p>Winner of Ui/Ux hackathon conducted by Huawei.</p>
            </div>
            <div style={projectCard}>
              <img src="amazon.png" alt="Amazon" style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} />
                 <h4 style={{ display: 'inline' }}>AWS Certification</h4>
                 <p>Completed with distinction, focused on DataBrew, Sagemaker, and QuickSight.</p>
            </div>
            <div style={projectCard}>
              <img src="google.png" alt="Google" style={{ width: '30px', verticalAlign: 'middle', marginRight: '5px' }} />
              <h4 style={{ display: 'inline' }}>Cyber Security</h4>
              <p>Completed with distinction, focused on network essentials and managing threads in Cloud.</p>
            </div>

          </div>

        </section>

        {/* ------------------------ */}
        {/* Contact Section */}
        {/* ------------------------ */}
        <section id="contact" style={projectsSectionStyle}>
          <h2 style={sectionHeader}>Contact Information</h2>
          <div style={underline}></div>
          <p style={{ marginTop: '30px' }}>Feel free to reach out via email or connect with me on LinkedIn.</p>
          <p style={{ marginTop: '10px' }}><img src="email.png" alt="Email" style={{ width: '30px', verticalAlign: 'middle', marginRight: '8px' }} />vaibhav365.ai@gmail.com</p>
          <p style={{ marginTop: '5px' }}><img src="linkedin.png" alt="Linkedin" style={{ width: '30px', verticalAlign: 'middle', marginRight: '8px' }} /> <a href="https://linkedin.com/in/vaibhavshinde05" target="_blank">linkedin.com/in/vaibhavshinde</a></p>
          <p style={{ marginTop: '5px' }}><img src="github.png" alt="github" style={{ width: '30px', verticalAlign: 'middle', marginRight: '8px' }} /> <a href="https://github.com/Vaibhav365ai" target="_blank">linkedin.com/in/vaibhavshinde</a></p>
        </section>
      </div>
    </>
  );
}
const navStyle = { position: 'absolute', top: 0, width: '100%', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', zIndex: 10 };
const navLinkStyle = { color: '#333', textDecoration: 'none', fontWeight: '500' };
const heroContainer = { height: '100vh', backgroundImage: 'url("/vaibhav2.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '60px' };
const overlayStyle = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(118,128,150, 0.6)', zIndex: 1 };
const heroContent = { position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '90%' };
const buttonGroup = { display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' };
const buttonStyleBlue = { padding: '10px 30px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '60px', fontWeight: 'bold', cursor: 'pointer' };
const buttonStyleWhite = { ...buttonStyleBlue, backgroundColor: 'white', color: '#2563eb', border: '1px solid #2563eb' };
const aboutStyle = { padding: '80px 20px', backgroundColor: 'white', textAlign: 'center' };
const sectionHeader = { fontSize: '2rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' };
const underline = { width: '90px', height: '5px', backgroundColor: '#718ADFFF', margin: '0 auto 30px auto', borderRadius: '30px' };
const aboutText = { maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6', color: '#444' };
const locationText = { marginTop: '20px', color: '#888', fontSize: '0.95rem' };
const skillsContainer = { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '20px' };
const skillPill = { padding: '8px 14px', borderRadius: '20px', backgroundColor: '#e0e7ff', color: '#718adf', fontWeight: '500', fontSize: '14px' };
const projectsSectionStyle = { backgroundColor: '#f9fafb', padding: '80px 20px', textAlign: 'center' };
const projectsGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' };
const projectCard = { backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', textAlign: 'left', transition: 'transform 0.2s ease' };
const projectTitle = { fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', color: '#2563eb' };
const projectDescription = { fontSize: '0.95rem', color: '#555', lineHeight: '1.5', marginBottom: '15px' };
const projectButton = { padding: '8px 8px', backgroundColor: '#f0f1f5', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '500', cursor: 'pointer' };
const experienceItem = { marginBottom: '25px', fontSize: '1rem', lineHeight: '1.5', color: '#333' };
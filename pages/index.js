export default function Home() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500;600;700&display=swap');
        
        :root {
          --system-font: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 
                        'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          --primary-blue: #0066CC;
          --light-blue: #E6F1FF;
          --dark-gray: #1D1D1F;
          --medium-gray: #86868B;
          --light-gray: #F5F5F7;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          scroll-behavior: smooth;
          font-family: var(--system-font);
          color: var(--dark-gray);
          -webkit-font-smoothing: antialiased;
        }
        
        a {
          text-decoration: none;
          color: var(--primary-blue);
        }
        
        h1 { font-size: 3.2rem; font-weight: 700; line-height: 1.1; }
        h2 { font-size: 2.4rem; font-weight: 600; }
        h3 { font-size: 1.8rem; font-weight: 500; }
        h4 { font-size: 1.4rem; font-weight: 500; }
        p  { font-size: 1.1rem; font-weight: 400; line-height: 1.5; color: var(--medium-gray); }
        
        @media (max-width: 768px) {
          h1 { font-size: 2.4rem; }
          h2 { font-size: 2rem; }
          h3 { font-size: 1.5rem; }
          .project-card { padding: 20px; }
        }
      `}</style>

      <div>
        {/* ------------------------ */}
        {/* Navigation Bar */}
        {/* ------------------------ */}
        <nav style={navStyle}>
          <div style={logoStyle}>
            VAIBHAV SHINDE
          </div>
          <div style={navLinksContainer}>
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
          <div style={heroContent}>
            <h1 style={heroTitle}>
              Hi, I'm <span style={{ color: 'var(--primary-blue)' }}>Vaibhav Shinde</span>
            </h1>
            <p style={heroSubtitle}>
              Jr Data Scientist | Data Analyst
            </p>
            <div style={buttonGroup}>
              <a href="#projects">
                <button style={primaryButton}>View My Projects</button>
              </a>
              <a href="/resume.pdf" download>
                <button style={secondaryButton}>Download Resume</button>
              </a>
            </div>
          </div>
          <div style={heroImageOverlay}></div>
        </div>

        {/* ------------------------ */}
        {/* About Section */}
        {/* ------------------------ */}
        <section id="about" style={sectionStyle}>
          <h2 style={sectionHeader}>About Me</h2>
          <div style={sectionDivider}></div>
          <p style={aboutText}>
            I am currently pursuing an <strong>MSc</strong> in <strong>Data Science</strong> at <strong>University of Essex</strong>, where I am developing a strong foundation in machine learning, statistical analysis, and data-driven decision-making. I have a deep passion for uncovering insights from data and connecting the dots to tell meaningful, impactful stories.
          </p>
          <p style={locationText}>
            <img src="loc.png" alt="location" style={iconSmall} />
            University of Essex | London
          </p>
          <h3 style={skillsHeader}>Technical Skills</h3>
          <div style={skillsContainer}>
            {["Python", "SQL", "MySQL", "AWS", "Google Cloud", "Seaborn",
              "Scikit-learn", "Statistics", "Data Visualization",
              "Machine Learning", "Pandas", "NumPy"].map(skill => (
              <span key={skill} style={skillPill}>{skill}</span>
            ))}
          </div>
        </section>

        {/* ------------------------ */}
        {/* Projects Section */}
        {/* ------------------------ */}
        <section id="projects" style={{...sectionStyle, backgroundColor: 'var(--light-gray)'}}>
          <h2 style={sectionHeader}>Projects</h2>
          <div style={sectionDivider}></div>

          <div style={projectsGrid}>
            <div style={projectCard}>
              <h3 style={projectTitle}>CleanO</h3>
              <p style={projectDescription}>
                CleanO is a smart dustbin management system that incentivizes users by offering rewards to encourage proper and responsible waste disposal and overall dust management analysis.
              </p>
              <div style={projectFooter}>
                <a href="https://github.com/Vaibhav365ai" target="_blank" rel="noopener noreferrer">
                  <button style={iconButton}>
                    <img src="git2.png" alt="GitHub" style={iconMedium} />
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>

            <div style={projectCard}>
              <h3 style={projectTitle}>Churn Prediction</h3>
              <p style={projectDescription}>
                Developed a predictive model to identify customers at risk of churn with 89% accuracy, enabling targeted retention strategies that reduced churn by 23%.
              </p>
              <div style={projectFooter}>
                <a href="https://github.com/Vaibhav365ai" target="_blank" rel="noopener noreferrer">
                  <button style={iconButton}>
                    <img src="git2.png" alt="GitHub" style={iconMedium} />
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>

            <div style={projectCard}>
              <h3 style={projectTitle}>Fake Job Detection</h3>
              <p style={projectDescription}>
                NLP-based classification system that identifies fraudulent job postings with 94% precision, analyzing textual patterns and metadata to protect job seekers.
              </p>
              <div style={projectFooter}>
                <a href="https://github.com/Vaibhav365ai" target="_blank" rel="noopener noreferrer">
                  <button style={iconButton}>
                    <img src="git2.png" alt="GitHub" style={iconMedium} />
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------ */}
        {/* Experience Section */}
        {/* ------------------------ */}
        <section id="experience" style={sectionStyle}>
          <h2 style={sectionHeader}>Experience</h2>
          <div style={sectionDivider}></div>

          <div style={experienceGrid}>
            <div style={experienceCard}>
              <div style={experienceHeader}>
                <img src="Database.png" alt="Database" style={iconMedium} />
                <div>
                  <h3 style={experienceTitle}>Intern - Data Science</h3>
                  <p style={experienceCompany}>NoviTech R&D Pvt Ltd. (2023)</p>
                </div>
              </div>
              <p style={experienceDescription}>
                Developed churn prediction models achieving 85% accuracy and created interactive dashboards using Python & Power BI that reduced customer attrition by 18%.
              </p>
            </div>

            <div style={experienceCard}>
              <div style={experienceHeader}>
                <img src="powerbi.png" alt="Power BI" style={iconMedium} />
                <div>
                  <h3 style={experienceTitle}>Data Analyst</h3>
                  <p style={experienceCompany}>L&T Mindtree (2025)</p>
                </div>
              </div>
              <p style={experienceDescription}>
                Led data monetization initiatives creating new revenue streams and optimized costs with AI-powered insights, resulting in 15% operational cost reduction.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------ */}
        {/* Certification Section */}
        {/* ------------------------ */}
        <section id="certifications" style={{...sectionStyle, backgroundColor: 'var(--light-gray)'}}>
          <h2 style={sectionHeader}>Certifications & Achievements</h2>
          <div style={sectionDivider}></div>

          <div style={certificationsGrid}>
            <div style={certificationCard}>
              <div style={certificationHeader}>
                <img src="google.png" alt="Google" style={iconMedium} />
                <h4>Google Data Analytics</h4>
              </div>
              <p>Earned in 2024 - Developed foundational skills in data cleaning, analysis, and visualization using Google's data tools and methodologies.</p>
            </div>

            <div style={certificationCard}>
              <div style={certificationHeader}>
                <img src="huawei.png" alt="Huawei" style={iconMedium} />
                <h4>Huawei Hackathon</h4>
              </div>
              <p>Winner of UI/UX hackathon conducted by Huawei, designing innovative data visualization interfaces for enterprise solutions.</p>
            </div>

            <div style={certificationCard}>
              <div style={certificationHeader}>
                <img src="amazon.png" alt="AWS" style={iconMedium} />
                <h4>AWS Certified</h4>
              </div>
              <p>AWS Certified Data Analytics - Specialty, focused on DataBrew, SageMaker, and QuickSight for scalable data solutions.</p>
            </div>

            <div style={certificationCard}>
              <div style={certificationHeader}>
                <img src="google.png" alt="Google" style={iconMedium} />
                <h4>Cyber Security</h4>
              </div>
              <p>Completed with distinction, focused on network essentials and managing threats in cloud environments.</p>
            </div>
          </div>
        </section>

        {/* ------------------------ */}
        {/* Contact Section */}
        {/* ------------------------ */}
        <section id="contact" style={sectionStyle}>
          <h2 style={sectionHeader}>Get In Touch</h2>
          <div style={sectionDivider}></div>

          <p style={contactText}>Feel free to reach out for collaborations or just to say hello!</p>

          <div style={contactMethods}>
            <a href="mailto:vaibhav365.ai@gmail.com" style={contactItem}>
              <img src="email.png" alt="Email" style={iconLarge} />
              <span>vaibhav365.ai@gmail.com</span>
            </a>

            <a href="https://linkedin.com/in/vaibhavshinde05" target="_blank" rel="noopener noreferrer" style={contactItem}>
              <img src="linkedin.png" alt="LinkedIn" style={iconLarge} />
              <span>linkedin.com/in/vaibhavshinde</span>
            </a>

            <a href="https://github.com/Vaibhav365ai" target="_blank" rel="noopener noreferrer" style={contactItem}>
              <img src="github.png" alt="GitHub" style={iconLarge} />
              <span>github.com/Vaibhav365ai</span>
            </a>
          </div>
        </section>

        {/* ------------------------ */}
        {/* Footer */}
        {/* ------------------------ */}
        <footer style={footerStyle}>
          <p>© {new Date().getFullYear()} Vaibhav Shinde. All rights reserved.</p>
          <p>Made with ♥ in London</p>
        </footer>
      </div>
    </>
  );
}

// ======================================
// Styles
// ======================================

// Navigation
const navStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  padding: '20px 5%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  zIndex: 1000,
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
};

const logoStyle = {
  fontWeight: '600',
  fontSize: '20px',
  color: 'var(--primary-blue)',
  letterSpacing: '-0.5px'
};

const navLinksContainer = {
  display: 'flex',
  gap: '30px',
  fontSize: '16px'
};

const navLinkStyle = {
  color: 'var(--dark-gray)',
  fontWeight: '500',
  fontSize: '17px',
  transition: 'color 0.3s ease',
  ':hover': {
    color: 'var(--primary-blue)'
  }
};

// Hero Section
const heroContainer = {
  height: '100vh',
  minHeight: '700px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundImage: 'url("/vaibhav2.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  padding: '0 20px',
  marginTop: '0'
};

const heroImageOverlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: 1
};

const heroContent = {
  position: 'relative',
  zIndex: 2,
  maxWidth: '800px',
  padding: '0 20px'
};

const heroTitle = {
  fontSize: '3.5rem',
  fontWeight: '700',
  lineHeight: '1.1',
  color: '#fff',
  marginBottom: '20px',
  letterSpacing: '-0.5px'
};

const heroSubtitle = {
  fontSize: '1.4rem',
  color: 'rgba(255, 255, 255, 0.9)',
  fontWeight: '400',
  marginBottom: '40px',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const buttonGroup = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  flexWrap: 'wrap'
};

const primaryButton = {
  padding: '14px 32px',
  backgroundColor: 'var(--primary-blue)',
  color: 'white',
  border: 'none',
  borderRadius: '30px',
  fontWeight: '500',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#0052B3',
    transform: 'translateY(-2px)'
  }
};

const secondaryButton = {
  ...primaryButton,
  backgroundColor: 'transparent',
  color: 'white',
  border: '2px solid white',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.8)'
  }
};

// Section Styles
const sectionStyle = {
  padding: '120px 5%',
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center'
};

const sectionHeader = {
  fontSize: '2.6rem',
  fontWeight: '600',
  color: 'var(--dark-gray)',
  marginBottom: '20px',
  letterSpacing: '-0.5px'
};

const sectionDivider = {
  width: '80px',
  height: '4px',
  backgroundColor: 'var(--primary-blue)',
  margin: '0 auto 50px auto',
  borderRadius: '2px'
};

// About Section
const aboutText = {
  maxWidth: '700px',
  margin: '0 auto 30px auto',
  fontSize: '1.1rem',
  lineHeight: '1.7',
  color: 'var(--medium-gray)'
};

const locationText = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--medium-gray)',
  fontSize: '1rem',
  marginBottom: '60px'
};

const skillsHeader = {
  fontSize: '1.5rem',
  fontWeight: '500',
  color: 'var(--dark-gray)',
  marginBottom: '30px'
};

const skillsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '12px',
  maxWidth: '800px',
  margin: '0 auto'
};

const skillPill = {
  padding: '10px 20px',
  borderRadius: '50px',
  backgroundColor: 'var(--light-blue)',
  color: 'var(--primary-blue)',
  fontWeight: '500',
  fontSize: '0.9rem',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: 'var(--primary-blue)',
    color: 'white'
  }
};

// Projects Section
const projectsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '30px',
  marginTop: '50px'
};

const projectCard = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  textAlign: 'left',
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
  }
};

const projectTitle = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: 'var(--primary-blue)',
  marginBottom: '15px'
};

const projectDescription = {
  fontSize: '1rem',
  lineHeight: '1.6',
  color: 'var(--medium-gray)',
  marginBottom: '25px'
};

const projectFooter = {
  display: 'flex',
  justifyContent: 'flex-start'
};

const iconButton = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 16px',
  backgroundColor: 'var(--light-gray)',
  color: 'var(--dark-gray)',
  border: 'none',
  borderRadius: '8px',
  fontWeight: '500',
  fontSize: '0.9rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#e0e0e0'
  }
};

// Experience Section
const experienceGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '30px',
  marginTop: '50px'
};

const experienceCard = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  textAlign: 'left'
};

const experienceHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginBottom: '20px'
};

const experienceTitle = {
  fontSize: '1.3rem',
  fontWeight: '600',
  color: 'var(--dark-gray)',
  marginBottom: '5px'
};

const experienceCompany = {
  fontSize: '1rem',
  color: 'var(--primary-blue)',
  fontWeight: '500'
};

const experienceDescription = {
  fontSize: '1rem',
  lineHeight: '1.6',
  color: 'var(--medium-gray)'
};

// Certifications Section
const certificationsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px',
  marginTop: '50px'
};

const certificationCard = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  textAlign: 'left',
  transition: 'all 0.3s ease',
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
  }
};

const certificationHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginBottom: '20px'
};

// Contact Section
const contactText = {
  fontSize: '1.1rem',
  color: 'var(--medium-gray)',
  marginBottom: '40px',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const contactMethods = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  maxWidth: '500px',
  margin: '0 auto'
};

const contactItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  padding: '15px 25px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  width: '100%',
  transition: 'all 0.3s ease',
  ':hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
  }
};

// Footer
const footerStyle = {
  padding: '30px 5%',
  textAlign: 'center',
  backgroundColor: 'var(--dark-gray)',
  color: 'white',
  fontSize: '0.9rem'
};

// Icon Sizes
const iconSmall = {
  width: '20px',
  verticalAlign: 'middle',
  marginRight: '8px'
};

const iconMedium = {
  width: '30px',
  verticalAlign: 'middle'
};

const iconLarge = {
  width: '40px',
  verticalAlign: 'middle'
};
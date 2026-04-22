import { motion } from 'framer-motion';
import './CareersPage.css';

export default function CareersPage() {
  const testimonials = [
    {
      name: "Janelle",
      text: "I love the flexibility I get here. As a mom, being able to balance work and home life is huge for me. The team is supportive, the owners are kind, and it’s just a great place to work."
    },
    {
      name: "Ana",
      text: "I’ve worked for a few cleaning companies, but none compare to Right Choice Cleaning. The training is thorough, the standards are high, and the team atmosphere is amazing. I feel proud of the work I do because they set us up for success."
    },
    {
      name: "Kendra",
      text: "What I appreciate most is that management listens. If there’s an issue, they fix it. If we need supplies, they get them. You never feel alone or ignored. It’s a workplace that genuinely wants you to thrive."
    },
    {
      name: "Sofia",
      text: "I've never worked somewhere with such a positive atmosphere. Everyone here celebrates each other’s wins, helps out when someone is having a tough day, and respects the work we all do. Being part of this team feels like being part of a family."
    },
    {
      name: "Brianna",
      text: "I look forward to work every day. That says everything."
    },
    {
      name: "Veronica",
      text: "From day one, I felt welcomed. The team always helps each other, and the owners make sure we’re never overwhelmed. I’ve grown a lot here, professionally and personally. I couldn’t ask for a better company."
    }
  ];

  return (
    <div className="careers-page">
      {/* Careers Header */}
      <section className="careers-header bg-navy-gradient">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title" style={{ color: 'var(--white)' }}>
              Cleaning Excellence <span>Starts with You</span>
            </h1>
            <div className="gold-line"></div>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Start a rewarding career in cleaning. Make a real impact, feel valued, and grow with a supportive team. Join us today!
            </p>
          </motion.div>
        </div>
        
        {/* Bottom wave */}
        <div className="wave-divider wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path fill="var(--off-white)" d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="employee-testimonials">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Employee <span>Testimonials</span></h2>
            <div className="gold-line"></div>
            <p className="section-sub">See What Reviews our Employees Have to Say:</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <motion.div 
                className="employee-card" 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <i className="fa-solid fa-quote-left quote-icon"></i>
                <p>"{t.text}"</p>
                <div className="employee-name">- {t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Info */}
      <section className="application-info bg-navy-gradient">
        <div className="wave-divider wave-top">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path fill="var(--off-white)" d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="container">
          <div className="app-info-grid">
            <motion.div 
              className="app-info-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Right Choice Cleaning <br/><span>Online Application</span></h2>
              <div className="gold-line" style={{ margin: '0 0 20px 0' }}></div>
              <p className="intro-text">
                Thank you for your interest in joining our Team at Right Choice Cleaning. 
                We are looking for <strong>5 STAR</strong> people to join our team.
              </p>
              
              <ul className="core-values">
                <li><i className="fa-solid fa-star"></i> <strong>Serving</strong> - Act in the best interest of the client</li>
                <li><i className="fa-solid fa-star"></i> <strong>Teamwork</strong> - Act in the best interest of your teammates</li>
                <li><i className="fa-solid fa-star"></i> <strong>Accountable</strong> - Be responsible for actions</li>
                <li><i className="fa-solid fa-star"></i> <strong>Reliable</strong> - Follow through on commitments</li>
              </ul>

              <h3 className="offer-title">We offer...</h3>
              <ul className="offer-list">
                <li><i className="fa-solid fa-check text-gold"></i> <strong>Comprehensive Paid Training</strong> - We are going to show you how the pros do it! No experience required.</li>
                <li><i className="fa-solid fa-check text-gold"></i> <strong>Positive Work Environment</strong> - Negativity & drama are not welcome here.</li>
                <li><i className="fa-solid fa-check text-gold"></i> <strong>Weekly Pay</strong> - Our cleaning technicians average $600 - $1,000+ per week plus tips.</li>
                <li><i className="fa-solid fa-check text-gold"></i> <strong>Advancement Opportunities</strong> - Get paid to acquire skills.</li>
              </ul>
              
              <p className="outro-text">If it sounds like I might be talking to you, please apply below.</p>
            </motion.div>

            <motion.div 
              className="app-form-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* =====================================================
                  GO HIGH LEVEL (GHL) CAREERS FORM INTEGRATION
                  =====================================================
                  Replace the placeholder div below with your Go High Level form embed.
              ===================================================== */}
              <div className="ghl-placeholder">
                <i className="fa-solid fa-file-signature placeholder-icon"></i>
                <h3>Application Form</h3>
                <p>
                  Paste your <strong>Go High Level (GHL)</strong> form embed code here!<br/>
                  (GHL Dashboard &rarr; Sites &rarr; Forms &rarr; Embed Code)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

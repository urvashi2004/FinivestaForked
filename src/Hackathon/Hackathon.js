import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBitcoin, FaChartLine, FaCreditCard, FaEthereum, FaGamepad } from "react-icons/fa";
import { SiLitecoin, SiCardano, SiRipple } from "react-icons/si";
import { TextPlugin } from "gsap/TextPlugin";
import "./Hackathon.css";
import './Tracks.css';
import { FaUsers, FaLightbulb, FaTrophy, FaBookOpen, FaChevronLeft, FaChevronRight, FaRobot, FaGlobe, FaUserGraduate, FaHome, FaInfoCircle, FaListAlt, FaQuestionCircle, FaRocket, FaStar } from "react-icons/fa";

const prizes = [
  { title: "1st Prize", short: "₹10,000 + Swags", detail: "Gold Medalist gets top prizes & exclusive merch!", medal: "🥇" },
  { title: "2nd Prize", short: "₹5,000 + Goodies", detail: "Silver Medal winner gets amazing goodies & swags!", medal: "🥈" },
  { title: "3rd Prize", short: "₹2,500 + Gifts", detail: "Bronze Medal winner receives exciting gifts!", medal: "🥉" }
];

const timelineEvents = [
  { date: "April 2", title: "Registrations Open", desc: "Start forming your team and work on your project." },
  { date: "April 11", title: "Project Submission", desc: "Submit the prototype of your project." },
  { date: "April 12", title: "Mentorship Round", desc: "Understand how we want your final pitch to be." },
  { date: "April 13", title: "Final Pitch and Judgement", desc: "D-Day: Present your final pitch and get judged!" },
];

const faqs = [
  { question: "Who can participate?", answer: "The hackathon is open to students across colleges, branches, and academic years. Whether you're from a different institution, a different engineering stream, or a different batch, you are welcome to participate and collaborate." },
  { question: "Is there a participation fee?", answer: "No, the hackathon is completely free to join!" },
  { question: "Will the hackathon be held online or offline?", answer: "Two rounds will be held throughout the hackathon. 1st round will be an online round which will be for 24 hours where Teams will submit their innovative fintech ideas, focusing on feasibility, impact, and originality. Round 2 will be an offline round where Shortlisted teams develop a prototype along with project documentation, including a PPT and project links and after that they pitch their projects to judges, demonstrating the functionality and potential impact of their solution." },
  { question: "What is the judging criteria?", answer: (<>The solution given by participants will judged on the following basis:<ol>Usability of sponsor tools</ol><ol>Innovation and new technologies</ol><ol>Business model</ol><ol>Scalability</ol><ol>USP</ol><ol>Presentation</ol></>) },
];

const problemStatements = [
  { title: "Next-Gen Finance", icon: <FaCreditCard />, desc: (<>Reimagine the future of finance by building <strong>smarter, faster, and more inclusive</strong> solutions. From seamless digital payments and neobanking to blockchain-powered DeFi and AI-driven investments—push the boundaries of financial technology to enhance accessibility and efficiency for all.</>),},
  { title: "AI & Emerging Tech", icon: <FaRobot />, desc: (<>Unleash the power of AI, big data, and open banking to <strong>predict market trends, detect fraud, and personalize financial experiences</strong>. Whether it's AI-powered risk assessment, embedded finance APIs, or real-time analytics, create solutions that redefine how money moves in the digital era.</>),},
  { title: "Beginner-Friendly Tracks", icon: <FaUserGraduate />, desc: (<>Make finance effortless with <strong>user-friendly apps</strong> that help people track expenses, build better financial habits, and navigate cashless transactions. From gamified savings apps to bill-splitting tools and micro-donation platforms, simplify financial management for the everyday user.</>),},
  { title: "Financial Games", icon: <FaGamepad />, desc: (<>Turn finance into a game! Develop <strong>interactive, engaging simulations</strong> where players learn about investing, budgeting, and market strategies while having fun. Whether it's <strong>Finopoly—our Monopoly-inspired financial literacy game</strong>, a stock trading fantasy league, a Shark Tank-style pitch battle, or a life simulator where financial choices shape the future—make learning finance an experience, not a chore!</>),},
  { title: "Data Analytics & Visualization", icon: <FaChartLine />, desc: (<>Unlock the power of financial data! Analyze spending behaviors, forecast investment risks, detect transaction fraud, or map real estate pricing trends. Transform <strong>complex financial datasets into actionable insights</strong> through predictive modeling, dynamic dashboards, and AI-powered analytics.</>),},
  { title: "Open Innovation", icon: <FaLightbulb />, desc: (<>Got a <strong>wild idea that doesn’t fit the mold</strong>? This track is your playground. Whether it’s a unique finance-meets-health concept, an unexpected use of blockchain, or a solution that redefines accessibility in finance, bring your most <strong>out-of-the-box</strong> innovation to life!</>),},
];

const words = ["You", "FinTech ", "AI Revolution ","Innovation", "Blockchain "];

const sponsors = [
  {
    image: 'https://blithchron.iitgn.ac.in/_astro/InterviewBuddy.BVkItRdN.webp',
    website: 'https://www.sponsor1.com'
  },
  {
    image: 'https://blithchron.iitgn.ac.in/_astro/InterviewBuddy.BVkItRdN.webp',
    website: 'https://www.sponsor2.com'
  },
  {
    image: 'https://blithchron.iitgn.ac.in/_astro/InterviewBuddy.BVkItRdN.webp',
    website: 'https://www.sponsor3.com'
  },
  {
    image: 'https://blithchron.iitgn.ac.in/_astro/InterviewBuddy.BVkItRdN.webp',
    website: 'https://www.sponsor4.com'
  }
];

const Hackathon = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    // GSAP Setup & Animations
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
  
    // Floating Crypto Icons
    gsap.utils.toArray(".crypto-icon").forEach((icon, index) => {
      gsap.to(icon, {
        y: index % 2 === 0 ? 20 : -20,
        rotate: index % 2 === 0 ? 5 : -5,
        repeat: -1,
        yoyo: true,
        duration: gsap.utils.random(2, 2.5),
        ease: "power1.inOut",
      });
    });
  
    // Hero Section - Staggered Entrance
    gsap.from([".hackathonhero-title", ".hackathonhero-subtitle", ".hackathonhero-button"], {
      opacity: 0,
      y: 50,
      duration: 1.2,
      stagger: 0.3,
      ease: "power2.out",
    });
  
    // Sections - Fade-in on Scroll
    const sections = [
      ".about-container",
      ".features-title",
      ".features-grid",
      ".timeline-title",
      ".tracks-title",
      ".faqs-title"
    ];
    gsap.utils.toArray(sections).forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  
    // Timeline Events - Slide In
    gsap.utils.toArray(".timeline-event").forEach((event, index) => {
      gsap.from(event, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: event,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  
    // Track & FAQ Cards Animation
    gsap.from(".track-card, .faq-card", {
      opacity: 0,
      y: 50,
      scale: 0.9,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".tracks-grid, .faqs-container",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  
    gsap.utils.toArray(".track-card").forEach((track) => {
      gsap.from(track, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: track,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });
  
    // Star Background Effect
    document.querySelectorAll(".star-container").forEach((container) => {
      container.innerHTML = "";
      for (let i = 0; i < 200; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        container.appendChild(star);
      }
    });
  
    // Hero Word Animation
    const tl = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      tl.to(".hackathonhero-title span", {
        duration: 3,
        text: word,
        ease: "power2.out",
      })
      .to(".hackathonhero-title span", { opacity: 0, duration: 1.5, delay: 1 })
      .to(".hackathonhero-title span", { opacity: 1, duration: 1 });
    });
  
    ScrollTrigger.refresh();
  }, []);
 
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextProblem();
    }, 5000);
  
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const prevProblem = () => {
    setCurrentIndex(prev => (prev === 0 ? problemStatements.length - 1 : prev - 1));
  };
  
  const nextProblem = () => {
    setCurrentIndex(prev => (prev === problemStatements.length - 1 ? 0 : prev + 1));
  };
  
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  const handleClick = (website) => {
    window.open(website, "_blank");
  };
  
  const [flipped, setFlipped] = useState([false, false, false]);
  
  const handleFlip = (index) => {
    const updated = [...flipped];
    updated[index] = !updated[index];
    setFlipped(updated);
  };
  
  const [activeContent, setActiveContent] = useState("content1");
  
  const handleMouseOver = (id) => {
    setActiveContent(id);
  };
  
  return (
    <div className="hackathon-container">

      <div className="sidebar">
        <a href="#" className="sidebar-icon" title="Hero Section">   
          <FaHome />
        </a>
        <a href="#about" className="sidebar-icon" title="About Section">
          <FaInfoCircle />
        </a>
        <a href="#features" className="sidebar-icon" title="Features Section">
          <FaStar />
        </a>
        <a href="#timeline" className="sidebar-icon" title="Timeline Section">
          <FaRocket />
        </a>
        <a href="#tracks" className="sidebar-icon" title="Tracks Section">
          <FaListAlt />
        </a>
        <a href="#faqs" className="sidebar-icon" title="FAQs Section">
          <FaQuestionCircle />
        </a>
      </div>

      {/* Hero Section */}
      <section id="" className="hackathonhero">
        <div className="star-container"></div>
        <div className="crypto-icons">
          <div className="crypto-icon bitcoin"><FaBitcoin size={50} /></div>
          {/* <div className="crypto-icon bitcoin"><FaBitcoin size={50} /></div> */}
          <div className="crypto-icon ethereum"><FaEthereum size={45} /></div>
          <div className="crypto-icon litecoin"><SiLitecoin size={40} /></div>
          <div className="crypto-icon cardano"><SiCardano size={42} /></div>
       
          <div className="crypto-icon ripple"><SiRipple size={38} /></div>
        </div>
        <h1 className="hackathonhero-title">The Future of  <span>Innovation</span>🚀</h1>
        <p className="hackathonhero-subtitle">
          Build the next-gen Fin-Tech solutions in this thrilling hackathon!
        </p>
        <button className="hackathonhero-button">Get Started</button>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="star-container"></div>
        <div className="about-container">
          <h2 className="about-title">About the Hackathon</h2>
          <p className="about-text">
            This hackathon is designed to push the boundaries of innovation, bringing together the best minds in the industry.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="star-container"></div>
        <h2 className="features-title">Why Join?</h2>
        <div className="features-grid">
          {[
            { text: "Networking", icon: <FaUsers className="feature-icon" /> },
            { text: "Innovation", icon: <FaLightbulb className="feature-icon" /> },
            { text: "Prizes", icon: <FaTrophy className="feature-icon" /> },
            { text: "Learning", icon: <FaBookOpen className="feature-icon" /> },
          ].map((feature, index) => (
            <div className="feature-card" key={index}>
              {feature.icon} {/* Renders the respective icon */}
              <h3 className="feature-text">{feature.text}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="timeline">
        <div className="star-container"></div>
        <h2 className="timeline-title">Hackathon Timeline</h2>
        <div className="timeline-container">
          {timelineEvents.map((event, index) => (
            <div className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`} key={index}>
              <span className="timeline-date">{event.date}</span>
              <h3 className="timeline-event-title">{event.title}</h3>
              <p className="timeline-event-desc">{event.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tracks">
        <h2 className="tracks-title">Tracks</h2>
        <div className="tracks-body">
          <div className="tracks-container">
          <div className="tracks-icon">
            <div
              className={`tracks-imgBx ${activeContent === "content1" ? "active" : ""}`}
              data-id="content1"
              style={{ "--i": 0 }}
              onMouseOver={() => handleMouseOver("content1")}
            >
              <FaCreditCard />
            </div>
            <div
              className={`tracks-imgBx ${activeContent === "content2" ? "active" : ""}`}
              data-id="content2"
              style={{ "--i": 1 }}
              onMouseOver={() => handleMouseOver("content2")}
            >
              <FaRobot />
            </div>
            <div
              className={`tracks-imgBx ${activeContent === "content3" ? "active" : ""}`}
              data-id="content3"
              style={{ "--i": 2 }}
              onMouseOver={() => handleMouseOver("content3")}
            >
              <FaUserGraduate />
            </div>
            <div
              className={`tracks-imgBx ${activeContent === "content4" ? "active" : ""}`}
              data-id="content4"
              style={{ "--i": 3 }}
              onMouseOver={() => handleMouseOver("content4")}
            >
              <FaGamepad />
            </div>
            <div
              className={`tracks-imgBx ${activeContent === "content5" ? "active" : ""}`}
              data-id="content5"
              style={{ "--i": 4 }}
              onMouseOver={() => handleMouseOver("content5")}
            >
              <FaChartLine />
            </div>
            <div
              className={`tracks-imgBx ${activeContent === "content6" ? "active" : ""}`}
              data-id="content6"
              style={{ "--i": 5 }}
              onMouseOver={() => handleMouseOver("content6")}
            >
              <FaLightbulb />
            </div>
          </div>
          <div className="tracks-content">
            <div className={`tracks-contentBx ${activeContent === "content1" ? "active" : ""}`} id="content1">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaCreditCard />
                </div>
                <div className="tracks-textBx">
                  <h3>Next-Gen Finance</h3>
                  <p>Innovating the future of financial systems</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content2" ? "active" : ""}`} id="content2">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaRobot />
                </div>
                <div className="tracks-textBx">
                  <h3>AI & Emerging Tech</h3>
                  <p>Harnessing AI to drive innovation</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content3" ? "active" : ""}`} id="content3">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaUserGraduate />
                </div>
                <div className="tracks-textBx">
                  <h3>Beginner Friendly</h3>
                  <p>Tracks designed for newcomers</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content4" ? "active" : ""}`} id="content4">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaGamepad />
                </div>
                <div className="tracks-textBx">
                  <h3>Financial Games</h3>
                  <p>Gamifying finance for better learning</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content5" ? "active" : ""}`} id="content5">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaChartLine />
                </div>
                <div className="tracks-textBx">
                  <h3>Data Analytics & Visualization</h3>
                  <p>Turning data into actionable insights</p>
                </div>
              </div>
            </div>
            <div className={`tracks-contentBx ${activeContent === "content6" ? "active" : ""}`} id="content6">
              <div className="tracks-card">
                <div className="tracks-imgBx">
                  <FaLightbulb />
                </div>
                <div className="tracks-textBx">
                  <h3>Open Innovation</h3>
                  <p>Breaking boundaries with creativity</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>  
      </section>

      {/* Problem-Carousel */}
      <section className="problem-carousel">
        <div className="star-container"></div>
        <h2 className="carousel-title">Problem Statements</h2>
        <div className="carousel-container">
          <button className="carousel-btn left" onClick={prevProblem}>
            <FaChevronLeft size={30} />
          </button>

          {problemStatements.map((problem, index) => {
            let position = "";
            if (index === currentIndex) {
              position = "active";
            } else if (
              index === (currentIndex + 1) % problemStatements.length
            ) {
              position = "right";
            } else if (
              index === (currentIndex - 1 + problemStatements.length) %
              problemStatements.length
            ) {
              position = "left";
            }

            return (
              <div key={index} className={`carousel-box ${position}`}>
                <h3>{problem.title}</h3>
                <p>{problem.desc}</p>
              </div>
            );
          })}

          <button className="carousel-btn right" onClick={nextProblem}>
            <FaChevronRight size={30} />
          </button>
        </div>

        <div className="carousel-dots">
          {problemStatements.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </section>

      {/* Sponsors Slider */}
      <div className="sponsor-slider-section">
        <h2>Our Sponsors</h2>
        <div className="sponsor-slider">
          <div className="slider-track">
            {sponsors.concat(sponsors).concat(sponsors).map((sponsor, index) => (
              <div
                key={index}
                className="hack-slide"
                onClick={() => handleClick(sponsor.website)}
              >
                <img
                  src={sponsor.image}
                  alt={`Sponsor ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prizes Section */}
      <div className="prizes-section">
        <div className="star-container">  </div>
        <h2> Prizes</h2>
        <div className="prizes-container">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`prize-card prize-${index} ${flipped[index] ? 'flipped' : ''}`}
              onClick={() => handleFlip(index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="medal-icon">{prize.medal}</div>
                  <h3>{prize.title}</h3>
                  <p>{prize.short}</p>
                  <button>More</button>
                </div>
                <div className="card-back">
                  <p>{prize.detail}</p>
                  <button>Back</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* FAQs Section */}
      <section id="faqs" className="faqs">
        <div className="star-container"></div>
        <h2 className="faqs-title">Frequently Asked Questions</h2>
        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <div className="faq-card" key={index} onClick={() => toggleFAQ(index)}>
              <h3 className="faq-question">
                {faq.question} {openFAQ === index ? "▼" : "▶"}
              </h3>
              {openFAQ === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};


export default Hackathon;

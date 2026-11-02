import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown,
  Code2, Cpu, Github, Globe2, Layers3, Linkedin, Mail, Menu, MessageSquare,
  MousePointer2, Send, Sparkles, Terminal, X, Zap
} from 'lucide-react';

// PERSONALIZE THESE VALUES BEFORE PUBLISHING.
const BRAND = 'NEXORA';
const CONTACT_EMAIL = 'misa.tosca@gmail.com';
const GITHUB_URL = 'https://github.com/misaglight04-ux';
const LINKEDIN_URL = 'https://www.linkedin.com/';

const projects = [
  {
    number: '01', category: 'WEB DEVELOPMENT', title: 'BrightNest Cleaning Co.',
    description: 'A live, responsive website demo for a home-cleaning business, featuring service highlights, clear calls to action and a quote-request flow.',
    tags: ['React', 'Responsive UI', 'Live website'], type: 'website', status: 'LIVE DEMO',
    demoUrl: 'https://brightnest-clean-demo.netlify.app/'
  },
  {
    number: '02', category: 'PYTHON AUTOMATION', title: 'Signals that move faster.',
    description: 'A Telegram alert-bot concept showing how custom scripts can monitor live data, apply configurable rules and deliver useful notifications.',
    tags: ['Python', 'Telegram API', 'Automation'], type: 'bot', status: 'PERSONAL PROJECT'
  },
  {
    number: '03', category: 'CUSTOM SOFTWARE', title: 'Less busywork. More control.',
    description: 'An operations dashboard concept for collecting requests, tracking progress and bringing repetitive business tasks into one workspace.',
    tags: ['React', 'Dashboard UI', 'Workflow'], type: 'dashboard', status: 'CONCEPT DEMO'
  }
];

const services = [
  { icon: Globe2, number: '01', title: 'Web development', text: 'Custom websites and landing pages that make your business look credible, communicate clearly and turn visits into inquiries.', items: ['Business websites', 'Landing pages', 'Responsive design', 'Forms & integrations'] },
  { icon: Zap, number: '02', title: 'Python & automation', text: 'Practical tools that take repetitive work off your plate, move information between systems and keep you in the loop.', items: ['Python scripts', 'Telegram bots', 'Data processing', 'Alerts & integrations'] },
  { icon: Layers3, number: '03', title: 'Custom software', text: 'Purpose-built dashboards and lightweight applications shaped around the way your business actually works.', items: ['Internal dashboards', 'Admin tools', 'API integrations', 'Workflow systems'] }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

function MagneticArrow({ size = 17 }) { return <ArrowUpRight size={size} strokeWidth={1.8} />; }

function SectionLabel({ children, number }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>;
}

function BrowserMockup() {
  return (
    <div className="browser-mockup">
      <div className="browser-top"><div className="browser-dots"><b/><b/><b/></div><div className="browser-address">brightnest-clean-demo.netlify.app</div><div className="browser-lock">⌁</div></div>
      <div className="browser-page">
        <div className="mock-nav"><div className="mock-brand"><span className="mock-brand-icon">B</span>BRIGHTNEST</div><div className="mock-nav-links"><i/><i/><i/></div><div className="mock-nav-cta">GET A QUOTE <ArrowUpRight size={10}/></div></div>
        <div className="mock-hero"><div className="mock-copy"><div className="mock-eyebrow"><span/> YOUR HOME, IN GOOD HANDS</div><div className="mock-headline">A cleaner<br/>space. A<br/><em>clearer mind.</em></div><div className="mock-lines"><i/><i/><i/></div><div className="mock-button">BOOK A CLEANING <ArrowUpRight size={10}/></div></div><div className="mock-photo"><div className="mock-sun"/><div className="mock-plant plant-a"/><div className="mock-plant plant-b"/><div className="mock-sofa"/><div className="mock-table"/><div className="mock-rug"/><div className="mock-photo-caption">A FRESH START, EVERY TIME.</div></div></div>
        <div className="mock-trust"><span>● TRUSTED LOCAL TEAM</span><span>● SIMPLE BOOKING</span><span>● MADE FOR YOUR SCHEDULE</span></div>
      </div>
      <div className="mock-float-card"><div className="float-check"><Check size={13}/></div><div><strong>New inquiry</strong><small>Quote request received</small></div><span className="float-live">LIVE</span></div>
    </div>
  );
}

function TerminalMockup() {
  return (
    <div className="terminal-mockup">
      <div className="terminal-head"><div className="browser-dots"><b/><b/><b/></div><span>signal_monitor.py</span><span className="terminal-live"><i/> RUNNING</span></div>
      <div className="terminal-body">
        <div className="terminal-line muted">$ python signal_monitor.py --config production</div>
        <div className="terminal-line"><span className="term-green">✓</span> Connected to data stream</div>
        <div className="terminal-line"><span className="term-green">✓</span> Monitoring 24 watchlist items</div>
        <div className="terminal-separator"/>
        <div className="terminal-event"><span className="event-dot"/><div><b>RULE MATCHED</b><small>Volume threshold exceeded</small></div><time>14:32:08</time></div>
        <div className="terminal-event"><span className="event-dot blue"/><div><b>ALERT DELIVERED</b><small>Telegram notification sent</small></div><time>14:32:09</time></div>
        <div className="terminal-event"><span className="event-dot purple"/><div><b>SCAN COMPLETE</b><small>Next cycle scheduled</small></div><time>14:32:10</time></div>
        <div className="terminal-prompt"><span>›</span> Awaiting next event<span className="terminal-cursor"/></div>
      </div>
      <div className="terminal-foot"><span><i/> SYSTEM OPERATIONAL</span><span>PYTHON 3.12</span></div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="dashboard-mockup">
      <div className="dash-sidebar"><div className="dash-logo"><span>O</span></div><div className="dash-side-active"><Layers3 size={13}/></div><div><Globe2 size={13}/></div><div><MessageSquare size={13}/></div><div><Terminal size={13}/></div><div className="dash-side-bottom"><div/></div></div>
      <div className="dash-main"><div className="dash-top"><span>WORKSPACE / OVERVIEW</span><div className="dash-avatar">JD</div></div><div className="dash-welcome">Good morning, Jordan <span>✳</span><small>Here's what's happening with your workspace.</small></div><div className="dash-stats"><div><small>OPEN REQUESTS</small><b>08</b><i>Across 3 projects</i></div><div><small>IN PROGRESS</small><b>04</b><i>Moving forward</i></div><div><small>COMPLETED</small><b>26</b><i>All time</i></div></div><div className="dash-activity"><div className="activity-heading">Recent activity <span>VIEW ALL ↗</span></div><div className="activity-row"><i className="activity-icon purple-bg"><Code2 size={11}/></i><span><b>Website refresh</b><small>New task created</small></span><em>2m ago</em></div><div className="activity-row"><i className="activity-icon green-bg"><Check size={11}/></i><span><b>Client onboarding</b><small>Marked as complete</small></span><em>1h ago</em></div></div></div>
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === 'website') return <BrowserMockup/>;
  if (type === 'bot') return <TerminalMockup/>;
  return <DashboardMockup/>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: 'Website development', message: '' });
  const [sent, setSent] = useState(false);
  const emailReady = CONTACT_EMAIL !== 'YOUR_EMAIL@example.com';

  const navItems = [['Services', '#services'], ['Work', '#work'], ['About', '#about']];
  const closeMenu = () => setMenuOpen(false);
  const submitForm = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry — ${form.service}`);
    const body = encodeURIComponent(`Hi ${BRAND},\n\nMy name is ${form.name}.\nEmail: ${form.email}\nService: ${form.service}\n\nProject details:\n${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu} aria-label={`${BRAND} home`}><span className="brand-mark"><i/><i/><i/></span><span>{BRAND}<b>®</b></span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <a className="header-cta" href="#contact">LET'S TALK <MagneticArrow size={14}/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </header>
      <AnimatePresence>
        {menuOpen && <motion.nav className="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><a href="#services" onClick={closeMenu}>Services</a><a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Let's talk ↗</a></motion.nav>}
      </AnimatePresence>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-gridline"/>
          <motion.div className="hero-content" variants={stagger} initial="hidden" animate="show">
            <motion.div className="availability" variants={fadeUp}><span className="availability-dot"/> AVAILABLE FOR SELECT PROJECTS <span className="availability-divider">/</span> 2026</motion.div>
            <motion.h1 variants={fadeUp}>Digital solutions<br/>for a <span className="gradient-text">better</span><br/><span className="outline-text">way forward.</span></motion.h1>
            <motion.p className="hero-description" variants={fadeUp}>I build custom websites, smart automations and software that help businesses move forward — without the unnecessary complexity.</motion.p>
            <motion.div className="hero-actions" variants={fadeUp}><a className="button button-primary" href="#contact">START A PROJECT <ArrowUpRight size={17}/></a><a className="text-link" href="#work">EXPLORE MY WORK <ArrowDown size={15}/></a></motion.div>
            <motion.div className="hero-meta" variants={fadeUp}><div className="meta-line"/><span>INDEPENDENT DEVELOPER</span><span className="meta-separator">•</span><span>BASED IN ECUADOR · WORKING WORLDWIDE</span></motion.div>
          </motion.div>
          <motion.div className="hero-art" initial={{ opacity: 0, scale: .92, x: 25 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: .25, ease: 'easeOut' }}>
            <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-orbit orbit-three"/>
            <div className="hero-core"><div className="core-inner"><span className="core-symbol">N<span>.</span></span><span className="core-caption">THINK / BUILD / REFINE</span></div></div>
            <div className="orbit-chip chip-code"><Code2 size={16}/><span>DEVELOPMENT</span></div><div className="orbit-chip chip-auto"><Zap size={16}/><span>AUTOMATION</span></div><div className="orbit-chip chip-systems"><Layers3 size={16}/><span>SYSTEMS</span></div>
            <div className="art-coordinate coordinate-top">0.1807° S<br/>78.4678° W</div><div className="art-coordinate coordinate-bottom">LATITUDE / LONGITUDE<br/><span>REMOTE BY DESIGN</span></div>
            <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div><div className="art-cross cross-c">+</div>
          </motion.div>
          <a href="#services" className="scroll-cue"><span>SCROLL TO EXPLORE</span><div><ArrowDown size={14}/></div></a>
          <div className="hero-index">01 <i/> 04</div>
        </section>

        <section className="trust-strip"><div className="trust-inner"><span>BUILT WITH PURPOSE</span><i/><span>DESIGNED FOR PEOPLE</span><i/><span>ENGINEERED TO WORK</span><i/><span>AVAILABLE WORLDWIDE</span></div></section>

        <section className="services section-wrap section-space" id="services">
          <motion.div className="section-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }}>
            <SectionLabel number="01">WHAT I DO</SectionLabel><div className="heading-row"><h2>Good ideas deserve<br/><span className="muted-heading">great execution.</span></h2><p>From a first impression to the systems behind the scenes, I turn business needs into useful digital products.</p></div>
          </motion.div>
          <div className="services-grid">{services.map((service, i) => { const Icon = service.icon; return <motion.article className="service-card" key={service.number} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} transition={{ delay: i * .08 }}><div className="service-top"><span>{service.number} / 03</span><Icon size={21} strokeWidth={1.5}/></div><h3>{service.title}</h3><p>{service.text}</p><ul>{service.items.map(item => <li key={item}><Check size={13}/>{item}</li>)}</ul><a href="#contact" className="service-link">LET'S BUILD THIS <ArrowUpRight size={15}/></a></motion.article> })}</div>
        </section>

        <section className="work section-wrap section-space" id="work">
          <motion.div className="section-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }}><SectionLabel number="02">SELECTED WORK</SectionLabel><div className="heading-row"><h2>Ideas made<br/><span className="muted-heading">tangible.</span></h2><p>A look at the kind of problems I like to solve. These initial showcase pieces are clearly marked demos and personal concepts — not client case studies.</p></div></motion.div>
          <div className="projects-list">{projects.map((project, i) => <motion.article className={`project-row project-${project.type}`} key={project.number} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }}>
            <div className="project-info"><div className="project-kicker"><span>{project.number}</span><i/>{project.category}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-status"><span className="status-dot"/>{project.status}</div>{project.demoUrl && <a className="project-demo-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo in a new tab`}>VIEW LIVE DEMO <ArrowUpRight size={15}/></a>}</div>
            <div className="project-visual"><ProjectVisual type={project.type}/><div className="visual-index">NEX / 0{i + 1}</div></div>
          </motion.article>)}</div>
          <div className="work-note"><Sparkles size={15}/><span>More real builds and detailed case studies will be added as projects are completed.</span></div>
        </section>

        <section className="statement-band"><div className="statement-glow"/><motion.div className="statement-inner" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}><span className="statement-label">THE APPROACH</span><p>Not just more code.<br/><em>More useful outcomes.</em></p><div className="statement-bottom"><span>CLARITY OVER COMPLEXITY</span><span>DETAIL IN EVERY DECISION</span><span>BUILT TO BE USEFUL</span></div></motion.div></section>

        <section className="about section-wrap section-space" id="about">
          <motion.div className="about-left" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }}><SectionLabel number="03">A LITTLE ABOUT ME</SectionLabel><h2>Small team energy.<br/><span className="muted-heading">End-to-end focus.</span></h2></motion.div>
          <motion.div className="about-right" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }}><p className="about-lead">I'm an independent developer based in Ecuador, collaborating remotely with people and businesses around the world.</p><p>I enjoy taking a messy process or an ambitious idea and shaping it into something clear, reliable and easy to use. I work across web development, Python and automation — choosing the tools that fit the problem, not the other way around.</p><div className="about-facts"><div><span>01</span><b>DIRECT COMMUNICATION</b><small>You work with the person building your project.</small></div><div><span>02</span><b>PRACTICAL THINKING</b><small>Focused on what your business actually needs.</small></div><div><span>03</span><b>REMOTE COLLABORATION</b><small>Clear updates across time zones.</small></div></div><div className="toolkit"><span>TOOLKIT</span><div>{['React', 'JavaScript', 'Python', 'Node.js', 'APIs', 'Automation', 'HTML / CSS', 'Git'].map(t => <b key={t}>{t}</b>)}</div></div></motion.div>
        </section>

        <section className="contact section-wrap section-space" id="contact">
          <div className="contact-card"><div className="contact-orb"/><div className="contact-left"><SectionLabel number="04">HAVE A PROJECT IN MIND?</SectionLabel><h2>Let's make<br/>something <span className="gradient-text">work.</span></h2><p>Tell me what you're trying to build, fix or automate. I'll get back to you to discuss the next step.</p><div className="contact-direct"><Mail size={16}/><span>{emailReady ? CONTACT_EMAIL : 'Set your email in src/App.jsx'}</span></div><div className="contact-socials"><a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a></div></div>
            <form className="contact-form" onSubmit={submitForm}><div className="form-heading"><span>01 — 04</span><b>START A CONVERSATION</b></div><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Jane Smith"/></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="jane@company.com"/></label><label>What do you need?<div className="select-wrap"><select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}><option>Website development</option><option>Python automation</option><option>Custom software</option><option>Something else</option></select><ChevronDown size={15}/></div></label><label>Tell me a little about it<textarea required rows="3" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="A few details about your project..."/></label><button className="button button-primary form-submit" type="submit">SEND PROJECT INQUIRY <Send size={15}/></button>{sent && <span className="form-note">Your email app should open with your project details. Thanks for reaching out.</span>}{!emailReady && <span className="form-note form-warning">Before publishing: replace YOUR_EMAIL@example.com in src/App.jsx with your real contact email.</span>}</form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a href="#home" className="brand"><span className="brand-mark"><i/><i/><i/></span><span>{BRAND}<b>®</b></span></a><span className="footer-copy">© {new Date().getFullYear()} {BRAND}. BUILT WITH INTENTION.</span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={13}/></a></footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/navin-about.jpg";
import heroImage from "@/assets/navin-hero.jpg.asset.json";
import logoImage from "@/assets/navin-logo.png.asset.json";
import founderImage from "@/assets/navin-founder.jpeg.asset.json";
import cofounderImage from "@/assets/navin-cofounder-new.jpeg.asset.json";
import operatorImage from "@/assets/navin-operator.jpeg.asset.json";
import railwayProject from "@/assets/project-railway.jpeg.asset.json";
import civilRoadProject from "@/assets/project-civil-road.jpeg.asset.json";
import rmcNightProject from "@/assets/project-rmc-night.jpeg.asset.json";
import rmcEquipmentProject from "@/assets/project-rmc-equipment.jpeg.asset.json";
import powerPlantProject from "@/assets/project-power-plant.jpeg.asset.json";
import buildingProject from "@/assets/project-building.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navin Constructions | Infrastructure • Railways • Civil Works" },
      {
        name: "description",
        content:
          "Navin Constructions — Construction, infrastructure, railway track maintenance and construction, civil works, power plant works, RMC plant execution, vehicles and logistics across Madhya Pradesh and Maharashtra.",
      },
      { property: "og:title", content: "Navin Constructions | Infrastructure • Railways • Civil Works" },
      {
        property: "og:description",
        content: "Construction and infrastructure expertise across Madhya Pradesh and Maharashtra.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const navItems = ["About", "Capabilities", "Projects", "Equipment", "Team"];

const capabilities = [
  ["Railway Track Maintenance & Construction", "Railway track maintenance, construction and associated infrastructure works."],
  ["Road Construction", "Road construction, development and allied infrastructure works."],
  ["Civil Works", "Civil construction and engineering works across different project requirements."],
  ["Power Plant Works", "Civil and allied works associated with power plant environments."],
  ["RMC Plant Execution", "Ready-mix concrete plant execution and associated operations."],
  ["Vehicles & Logistics", "Vehicle deployment, transportation and construction-related logistics."],
  ["Building Construction", "Building and structural construction works."],
  ["Industrial Works", "Construction and civil works in industrial environments."],
  ["Allied Infrastructure Works", "Additional civil and infrastructure services according to project requirements."],
];

const projects = [
  [railwayProject.url, "Railway Track Works", "Railway Infrastructure", "center"],
  [civilRoadProject.url, "Concrete & Civil Works", "Civil Construction", "center 45%"],
  [rmcNightProject.url, "Night Plant Operations", "RMC Plant Execution", "center"],
  [rmcEquipmentProject.url, "Plant & Equipment", "Equipment Deployment", "center"],
  [powerPlantProject.url, "Industrial Operations", "Power Plant Works", "center"],
  [buildingProject.url, "Structural Construction", "Building Construction", "center"],
];

const equipment = [
  ["Construction Machinery", "Civil construction equipment and machinery."],
  ["Earthmoving Equipment", "Equipment supporting excavation and site works."],
  ["Vehicles", "Company vehicles supporting project operations."],
  ["RMC / Batching Infrastructure", "Resources supporting RMC plant execution."],
];

const team = [
  [founderImage.url, "Navin Shivhare", "Founder & Owner", "+91 94250 03749", "tel:+919425003749", "Navin Shivhare, Founder and Owner of Navin Constructions"],
  [cofounderImage.url, "Parv Shivhare", "Co-Founder", "+91 74709 33749", "tel:+917470933749", "Parv Shivhare, Co-Founder of Navin Constructions with his security team"],
  [operatorImage.url, "Prateek", "Computer Operator", "", "", "Prateek at a Navin Constructions project site"],
];

function SectionHeading({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <header>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="logo" href="#top" onClick={closeMenu} aria-label="Navin Constructions home">
          <img src={logoImage.url} alt="Navin Construction" />
        </a>
        <div className={`nav-panel ${menuOpen ? "nav-panel-open" : ""}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}><a href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a></li>
            ))}
          </ul>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <Button
          className="menu-button"
          variant="ghost"
          size="icon"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      <section id="top" className="hero">
        <img className="hero-background" src={heroImage.url} alt="" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <img className="hero-watermark-logo" src={logoImage.url} alt="" aria-hidden="true" />
        <div className="hero-watermark" aria-hidden="true">NAVIN</div>
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Established 2009 • Madhya Pradesh & Maharashtra</p>
            <h1>Legacy in <span>Every Layer.</span></h1>
            <p className="hero-description">Engineering dependable infrastructure across railways, roads, civil works, power plants and industrial projects.</p>
            <div className="hero-buttons">
              <a className="btn btn-primary" href="#projects">Explore Our Work <ArrowUpRight size={16} /></a>
              <a className="btn" href="#contact">Start a Project</a>
            </div>
          </div>
          <div className="hero-signature" aria-label="Navin Constructions company overview">
            <span>Since</span><strong>2009</strong>
            <div>Construction<br />Infrastructure<br />Railways</div>
          </div>
        </div>
      </section>

      <div className="stats" aria-label="Company statistics">
        {[["2009", "Established"], ["150+", "Projects Completed"], ["2", "States Served"], ["5+", "Civil Engineers"]].map(([number, label]) => (
          <div className="stat" key={label}><div className="stat-number">{number}</div><div className="stat-label">{label}</div></div>
        ))}
      </div>

      <section id="about" className="about page-section">
        <div className="about-image"><img src={aboutImage} alt="Large infrastructure construction project with railway tracks, equipment and concrete columns" loading="lazy" width={1024} height={1280} /></div>
        <div className="about-text">
          <SectionHeading label="About Navin Constructions" title="Building the infrastructure behind progress." />
          <p>Established in 2009, Navin Constructions is a construction and infrastructure company based in Sarni, Betul, Madhya Pradesh.</p>
          <p>The company undertakes a diverse range of construction and infrastructure works across Madhya Pradesh and Maharashtra, with experience in railway works, roads, civil construction, power plant works, RMC plant execution, vehicles and logistics, and allied infrastructure activities.</p>
          <p>With a team of experienced civil engineers, site supervisors, operators and field personnel, Navin Constructions combines technical capability with on-ground execution.</p>
          <div className="owner-box"><strong>Navin Shivhare</strong><span>Founder & Owner</span></div>
        </div>
      </section>

      <section id="capabilities" className="capabilities page-section">
        <SectionHeading label="What We Do" title="Our Capabilities" intro="A broad range of construction, infrastructure, industrial and logistics capabilities supported by experienced teams and construction equipment." />
        <div className="capability-grid">
          {capabilities.map(([title, description], index) => (
            <article className="capability" key={title}><div className="capability-number">{String(index + 1).padStart(2, "0")}</div><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects page-section">
        <SectionHeading label="Selected Work" title="Our Projects" intro="A selection of railway, civil, RMC, power plant and structural works delivered by Navin Constructions." />
        <div className="projects-grid">
          {projects.map(([image, title, category, position]) => (
            <article className="project" key={title}>
              <img src={image} alt={`${title} by Navin Constructions`} loading="lazy" style={{ objectPosition: position }} />
              <div className="project-overlay"><small>{category}</small><h3>{title}</h3></div>
            </article>
          ))}
        </div>
      </section>

      <section id="equipment" className="equipment page-section">
        <SectionHeading label="Resources" title="Equipment & Resources" intro="Navin Constructions maintains a range of civil construction equipment, machinery and transportation resources to support project execution." />
        <div className="equipment-grid">
          {equipment.map(([title, description]) => <article className="equipment-item" key={title}><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section id="team" className="team page-section">
        <SectionHeading label="Our People" title="The Team Behind the Work" intro="A dedicated team supporting engineering, operations, logistics and on-site execution." />
        <div className="team-grid">
          {team.map(([image, name, role, phone, href, alt]) => (
            <article className="team-card" key={name}>
              <div className="team-photo"><img src={image} alt={alt} loading="lazy" /></div>
              <div className="team-info"><h3>{name}</h3><div className="team-role">{role}</div>{phone ? <a className="team-phone" href={href}>{phone}</a> : null}</div>
            </article>
          ))}
          <article className="team-card team-card-text">
            <div className="team-monogram" aria-hidden="true">NC</div>
            <div className="team-info"><h3>Subhash</h3><div className="team-role">Logistics Monitor</div></div>
          </article>
        </div>
        <div className="supervisor-heading"><SectionHeading label="Site Operations" title="Site Supervisors" intro="Our site supervision team supports day-to-day project execution and on-ground coordination." /></div>
        <div className="supervisors">
          {[1, 2, 3].map((item) => <article className="supervisor-card" key={item}><div className="supervisor-photo">Site Supervisor Photo</div><div className="supervisor-info"><h3>Site Supervisor</h3><p>Name & details to be added</p></div></article>)}
        </div>
      </section>

      <section id="contact" className="contact page-section">
        <div className="contact-grid">
          <div>
            <SectionHeading label="Get In Touch" title="Let's build what comes next." />
            <p className="contact-text">Contact Navin Constructions for construction, infrastructure, railway, civil, industrial, RMC and logistics-related requirements.</p>
            <div className="contact-details">
              <div className="contact-detail"><span>Founder & Owner</span><strong>Navin Shivhare</strong><a href="tel:+919425003749">+91 94250 03749</a></div>
              <div className="contact-detail"><span>Co-Founder</span><strong>Parv Shivhare</strong><a href="tel:+917470933749">+91 74709 33749</a></div>
              <div className="contact-detail"><span>Head Office</span><strong>Sarni, Betul, Madhya Pradesh</strong></div>
              <div className="contact-detail"><span>Operations</span><strong>Madhya Pradesh & Maharashtra</strong></div>
            </div>
          </div>
          <div className="map-box"><div><p className="map-kicker">Head Office</p><h3>Sarni, Betul</h3><a href="https://www.google.com/maps/search/?api=1&query=Sarni%2C%20Betul%2C%20Madhya%20Pradesh" target="_blank" rel="noreferrer">Open Location in Google Maps</a></div></div>
        </div>
      </section>

      <footer><span>© 2026 Navin Constructions. All rights reserved.</span><span>Construction • Infrastructure • Railways • Civil Works</span></footer>
    </main>
  );
}

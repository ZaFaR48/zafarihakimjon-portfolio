const skills = [
  ["Infrastructure & Linux", "Ubuntu, Docker, servers, backups and reliable remote operations."],
  ["Networks & Secure Access", "MikroTik, private APN, Headscale, Tailscale, VPN and PoE networks."],
  ["CCTV & Edge Systems", "Dahua, Hikvision, PTZ, NVR, RTSP/ONVIF and 24/7 field systems."],
  ["AI & Automation", "Python, FastAPI, n8n, Telegram, Ollama, PostgreSQL and Redis."],
];

const projects = [
  ["CCTV & City Infrastructure", "Installed, configured and supported large-scale CCTV systems across public, commercial and private locations.", "1,350+ cameras"],
  ["Remote Station Network", "Built secure remote access and centralized support for Ubuntu, MikroTik, PoE and PTZ-based field stations.", "150+ stations"],
  ["NERU AI Assistant", "A self-hosted multilingual parking assistant built with Telegram, FastAPI and local AI.", "TJ · RU · EN · UZ"],
  ["Smart Home Systems", "Designed practical smart-home solutions for security, monitoring, remote control and everyday automation.", "End-to-end delivery"],
  ["Server Racks & Structured Cabling", "Assembled server cabinets, installed patch panels and delivered clean, labeled and serviceable cable management.", "50+ cabinets"],
  ["Digital Business & E-commerce", "Run my own server and websites, a CCTV and computer equipment shop, and active storefronts on Alif Shop and LakLak.", "Founder & operator"],
];

function Diagram() {
  return <div className="diagram" aria-hidden="true">
    <div className="grid"/><i className="route r1"/><i className="route r2"/><i className="route r3"/>
    <b className="dot d1"/><b className="dot d2"/><b className="dot d3"/><b className="dot d4"/>
    <div className="antenna"><em/><span/><span/></div>
    <div className="rack">SERVER<i/><i/><i/><i/></div>
    <div className="db">DATA</div><small>INFRASTRUCTURE / NETWORK / INTELLIGENCE</small>
  </div>;
}

export default function Home() {
  return <main id="top">
    <header><a className="brand" href="#top">ZAFARI HAKIMJON</a><nav><a href="#about">About</a><a href="#experience">Experience</a><a href="#expertise">Expertise</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav><a className="talk" href="mailto:zamona08@gmail.com">Let&apos;s talk</a></header>

    <section className="hero">
      <div className="heroText"><p className="eyebrow">Dushanbe, Tajikistan</p><h1>IT Infrastructure,<br/>DevOps, Network &<br/>AI Engineer</h1><div className="accent"/><p className="lead">I build reliable systems that connect infrastructure, people and intelligent technology.</p><div className="actions"><a className="btn blue" href="#experience">View experience <b>→</b></a><a className="under" href="#contact">Contact</a></div>
        <div className="stats"><div><strong>1,350+</strong><span>Cameras installed</span></div><div><strong>150+</strong><span>Remote stations</span></div><div><strong>50+</strong><span>Server cabinets</span></div></div>
      </div><Diagram/>
    </section>

    <section className="section" id="about"><p className="kicker">01 — Profile</p><div className="two"><h2>Technology should solve real problems—not add complexity.</h2><div className="copy"><p>I am an IT infrastructure and systems specialist with a degree in Information Security. My work sits where networks, Linux, CCTV, automation and AI meet real-world operations.</p><p>From field equipment and private networks to Docker services and intelligent assistants, I focus on systems that are understandable, maintainable and ready to scale.</p><p className="available"><i/> Open to international opportunities and technical partnerships</p></div></div></section>

    <section className="section dark" id="experience"><p className="kicker">02 — Experience</p><div className="exp"><span>Current</span><div><p className="eyebrow">IT & Technical Operations · Infrastructure</p><h2>Field systems at scale</h2><p>I install, connect and manage distributed camera, network and Linux infrastructure—from the physical cabinet to secure remote operations.</p></div><ul><li>1,350+ CCTV cameras installed and configured</li><li>150+ stations connected for remote management</li><li>50+ server cabinets with patch panels and clean cabling</li><li>Smart home, monitoring and automation solutions</li></ul></div></section>

    <section className="section" id="expertise"><p className="kicker">03 — Expertise</p><div className="heading"><h2>Systems knowledge,<br/>from edge to cloud.</h2><p>A practical toolkit shaped by production infrastructure and hands-on problem solving.</p></div><div className="skillGrid">{skills.map((s,i)=><article key={s[0]}><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p></article>)}</div><div className="tags">{["Ubuntu Linux","Docker","MikroTik","Headscale","Tailscale","Python","FastAPI","PostgreSQL","Redis","n8n","Ollama","RTSP / ONVIF"].map(x=><span key={x}>{x}</span>)}</div></section>

    <section className="section projects" id="projects"><p className="kicker">04 — Selected work</p>{projects.map((p,i)=><article key={p[0]}><span>0{i+1}</span><h3>{p[0]}</h3><p>{p[1]}</p><b>{p[2]}</b></article>)}</section>

    <section className="section enterprise"><p className="kicker">05 — Entrepreneurship</p><div className="two"><h2>I build systems—and businesses around them.</h2><div className="copy"><p>Alongside infrastructure work, I operate my own server and several websites, and develop a technology shop focused on 4G/Wi-Fi/CCTV cameras, laptops and computers.</p><p>I also sell through Alif Shop and LakLak, combining technical expertise with hands-on e-commerce and customer service.</p><div className="businessTags"><span>Own server</span><span>Websites</span><span>CCTV retail</span><span>Computers</span><span>Alif Shop</span><span>LakLak</span></div></div></div></section>

    <section className="section"><p className="kicker">06 — Credentials</p><div className="cards"><article><small>Education</small><h3>Degree in Information Security</h3><p>Cybersecurity & information systems</p></article><article><small>Languages</small><h3>Tajik · Russian · English</h3><p>Native · Professional · Developing</p></article><article><small>Location</small><h3>Dushanbe, Tajikistan</h3><p>Open to international collaboration</p></article></div></section>

    <section className="contact" id="contact"><p className="eyebrow">Let&apos;s build reliable systems</p><h2>Have a technical challenge<br/>worth solving?</h2><p>I am interested in infrastructure, digital transformation, AI automation and international development projects.</p><div className="socials" aria-label="Contact Zafari Hakimjon"><a href="https://t.me/ZafarKarimovv" target="_blank" rel="noreferrer" aria-label="Telegram"><i>✈</i><span>Telegram</span></a><a href="https://wa.me/992878484808" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i>WA</i><span>WhatsApp</span></a><a href="mailto:zamona08@gmail.com" aria-label="Email"><i>@</i><span>Email</span></a><a href="tel:+992878484808" aria-label="Phone"><i>☎</i><span>Call</span></a></div><a className="phoneNumber" href="tel:+992878484808">+992 878 48 48 08</a></section>
    <footer><a className="brand" href="#top">ZAFARI HAKIMJON</a><p>IT Infrastructure · DevOps · Network · AI</p><p>© 2026 Dushanbe, Tajikistan</p></footer>
  </main>;
}

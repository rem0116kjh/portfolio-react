import { useState, useEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight, ChevronUp, Plus, Moon, Sun, Menu, X, Copy } from 'lucide-react'
import MacTerminal from './MacTerminal.jsx'
import ProjectShowcase from './ProjectShowcase.jsx'
import './Portfolio.css'
import translations from './translations.js'
import astronaut from './assets/rem-world/astronaut.svg'
import laptop from './assets/rem-world/laptop.svg'

function RecordList({ items, unknownDateLabel, newTabLabel }) {
  return (
    <ul className="record-list">
      {items.map((item) => (
        <li key={item.title} className="record-row">
          <span className="record-date" aria-label={item.date ? undefined : unknownDateLabel}>{item.date || '—'}</span>
          <div className="record-title"><p>{item.url ? <a href={item.url} target="_blank" rel="noreferrer" aria-label={`${item.title} (${newTabLabel})`}>{item.title}</a> : item.title}</p>{item.detail && <p className="record-detail">{item.detail}</p>}</div>
          <span className="record-badge">{item.badge}</span>
        </li>
      ))}
    </ul>
  )
}

function SectionHeading({ id, children, number, aside }) {
  return <div className="section-heading"><h2 id={id}><span className="section-dot" aria-hidden="true" />{number && <span>{number} / </span>}{children}</h2><span className="section-aside">{aside}</span></div>
}

function MoreButton({ expanded, onClick, target, count, label, language }) {
  return (
    <button type="button" className="more-button" aria-expanded={expanded} aria-controls={target}
      aria-label={language === 'en' ? `${expanded ? 'Collapse' : 'Show more'} ${label}` : expanded ? `추가 ${label} 기록 접기` : `추가 ${label} 기록 ${count}개 더 보기`} onClick={onClick}>
      {expanded ? <ChevronUp size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
      {expanded ? (language === 'en' ? 'Collapse' : '접기') : `${language === 'en' ? 'More' : '더 보기'} (${count})`}
    </button>
  )
}

function RecordGroup({ group, sectionId, language, labels }) {
  const [expanded, setExpanded] = useState(false)
  const moreItems = group.items.slice(3)
  const headingId = `${sectionId}-${group.id}-heading`
  const moreId = `${sectionId}-${group.id}-more`

  return (
    <section className="record-group" aria-labelledby={headingId}>
      <div className="record-group-heading">
        <h3 id={headingId}>{group.name}</h3>
        {moreItems.length > 0 && <MoreButton language={language} expanded={expanded} onClick={() => setExpanded((v) => !v)} target={moreId} count={moreItems.length} label={group.name} />}
      </div>
      <RecordList unknownDateLabel={labels.unknownDate} newTabLabel={labels.newTab} items={group.items.slice(0, 3)} />
      {moreItems.length > 0 && <div id={moreId} hidden={!expanded}><RecordList unknownDateLabel={labels.unknownDate} newTabLabel={labels.newTab} items={moreItems} /></div>}
    </section>
  )
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('language') === 'en' ? 'en' : 'ko' } catch { return 'ko' }
  })
  const en = language === 'en'
  const t = translations[language]
  const { profile, projects, skills: skillCategories, awardGroups, activityGroups, sections, labels } = t
  const [menuOpen, setMenuOpen] = useState(false)
  const [copyStatus, setCopyStatus] = useState('')
  const menuRef = useRef(null)
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('darkMode')
      if (saved === 'true' || saved === 'false') return saved === 'true'
    } catch { /* Theme switching works without storage. */ }
    return false
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#6a00ef')
    try { localStorage.setItem('darkMode', JSON.stringify(isDark)) } catch { /* Storage is optional. */ }
  }, [isDark])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = en ? 'REM WORLD · Jinhyeong Kim | Developer Portfolio' : 'REM WORLD · 김진형 | 개발 포트폴리오'
    const description = en
      ? 'Jinhyeong Kim (Rem). A student developer turning curiosity into projects across software, AI, and cybersecurity.'
      : '호기심을 코드로 만드는 학생 개발자 김진형(Rem)의 세계. 웹·앱·AI·보안 프로젝트와 대회·자격, 활동 기록.'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    try { localStorage.setItem('language', language) } catch { /* Storage is optional. */ }
  }, [language, en])

  useEffect(() => {
    if (!menuOpen) return
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuRef.current?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyStatus(en ? 'Email address copied.' : '이메일 주소를 복사했어요.')
    } catch {
      setCopyStatus(en ? 'Please select and copy the email address.' : '이메일 주소를 선택해 복사해 주세요.')
    }
  }

  const navigation = [
    ['about', en ? 'About' : '소개'],
    ['projects', t.nav.projects],
    ['stack', en ? 'Toolbox' : '기술'],
    ['awards', sections.awards],
    ['activities', sections.activities],
    ['contact', en ? 'Contact' : '연락처'],
  ]

  return (
    <div className="portfolio-page">
      <a className="skip-link" href="#main">{t.skipLink}</a>
      <header className="site-header">
        <div className="portfolio-container header-inner">
          <a href="#top" className="header-welcome">WELCOME TO REM WORLD</a>
          <a href="#top" className="site-logo" aria-label={en ? 'Rem World home' : 'Rem World 홈'}><span>REM</span><span>WORLD</span></a>
          <div className="header-controls">
            <span className="header-location">SEOUL · KR <span aria-hidden="true">✳</span></span>
            <button type="button" className="language-toggle" aria-label={t.languageLabel} onClick={() => { setLanguage(en ? 'ko' : 'en'); setCopyStatus('') }}>{t.languageButton}</button>
            <button type="button" className="theme-toggle" onClick={() => setIsDark((current) => !current)}
              aria-label={en ? (isDark ? 'Switch to light mode' : 'Switch to dark mode') : (isDark ? '라이트 모드로 전환' : '다크 모드로 전환')}>
              {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            </button>
            <button ref={menuRef} type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="site-nav"
              aria-label={en ? (menuOpen ? 'Close menu' : 'Open menu') : (menuOpen ? '메뉴 닫기' : '메뉴 열기')}
              onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}</button>
          </div>
        </div>
        <nav id="site-nav" className="site-nav" aria-label={t.navLabel} hidden={!menuOpen}>
          <div className="portfolio-container"><p>EXPLORE MY WORLD</p><div className="nav-grid">{navigation.map(([id, label], index) => (
            <a key={id} href={'#' + id} onClick={() => setMenuOpen(false)}><span className="nav-number">0{index + 1}</span>{label}<ArrowUpRight size={22} aria-hidden="true" /></a>
          ))}</div></div>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section id="top" className="portfolio-hero" aria-labelledby="hero-heading">
          <div className="hero-universe"><div className="portfolio-container hero-inner">
            <div className="hero-copy">
              <p className="hero-kicker"><span aria-hidden="true" />PROGRAMMER · BUILDER · HACKER</p>
              <p className="hero-welcome">HELLO, I’M REM.</p>
              <h1 id="hero-heading">WELCOME TO<br /><span>REM WORLD.</span></h1>
              <p className="hero-description">{en ? <><strong>I’m Jinhyeong Kim, a student developer.</strong><br />I build across web, apps, AI, and security.</> : <><strong>호기심을 코드로 만드는 학생 개발자, 김진형.</strong><br />웹과 앱을 만들고, AI와 보안의 세계를 탐구합니다.</>}</p>
              <div className="hero-actions">
                <a href="#projects" className="primary-link">{en ? 'Explore my work' : '프로젝트 둘러보기'}<ArrowUpRight size={18} aria-hidden="true" /></a>
                <a href="#about" className="hero-about-link">{en ? 'Meet Rem' : '나를 소개합니다'}<ArrowDown size={16} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true"><span className="hero-orbit" /><span className="hero-orbit orbit-cross" /><img src={astronaut} alt="" width="560" height="510" fetchPriority="high" /><span className="hero-spark">✦</span><span className="hero-visual-label">EXPLORING THE UNKNOWN</span></div>
          </div></div>
          <a href="#projects" className="project-gate" aria-label={en ? 'Explore selected projects' : '만들고 참여한 프로젝트 보기'}>
            <div className="portfolio-container gate-inner">
              <div><p className="gate-kicker">SELECTED WORKS <span>/ {String(projects.length).padStart(2, '0')} PROJECTS</span></p><h2>I BUILD<br className="mobile-break" /> THINGS.</h2><p className="gate-description">{en ? 'Small ideas. Real projects. Always curious.' : '작은 아이디어에서 시작해, 직접 만든 작은 세계들.'}</p></div>
              <div className="gate-visual" aria-hidden="true"><span className="gate-burst">✳</span><img src={laptop} alt="" width="660" height="430" /><span className="gate-sticker">MADE WITH<br />CURIOSITY ↗</span></div>
              <ArrowUpRight className="gate-arrow" size={32} aria-hidden="true" />
            </div>
          </a>
        </section>
        <div className="curiosity-strip" aria-hidden="true"><span>STAY CURIOUS</span><b>✳</b><span>KEEP BUILDING</span><b>✳</b><span>BREAK THE ORDINARY</span><b>✳</b><span>STAY CURIOUS</span></div>

        <section id="about" aria-labelledby="about-heading" className="portfolio-section about-section"><div className="portfolio-container">
          <SectionHeading id="about-heading" number="01" aside="A LITTLE ABOUT MY WORLD">{en ? 'About me' : '나를 소개합니다'}</SectionHeading>
          <div className="about-intro">
            <div className="about-manifesto"><p>HELLO, I’M REM.</p><h3>{en ? <>Build.<br />Break.<br /><span>Learn again.</span></> : <>만들고,<br />부수고,<br /><span>다시 배우다.</span></>}</h3><p className="name-tag">김진형 <span>JINHYEONG KIM</span></p></div>
            <div className="about-prose"><h3>{en ? 'Curiosity starts with making.' : '궁금한 건, 직접 만들어 봅니다.'}</h3><p>{profile.bio}</p><p>{en ? <>From <strong>GHAS Alimi</strong> for school life to an open-source Linux environment and AI debate visualization, I explore my interests by building.</> : <>학교생활을 돕는 <strong>GHAS 알리미</strong>부터 오픈소스 Linux 환경, AI 토론 시각화까지. 궁금한 것을 직접 만들며 제 관심사의 범위를 넓혀가고 있습니다.</>}</p>
              <dl className="about-facts"><div><dt>{profile.schoolLabel}</dt><dd>{profile.school}</dd></div><div><dt>{profile.majorLabel}</dt><dd>{profile.major}</dd></div><div><dt>{profile.goalLabel}</dt><dd>{profile.goal}</dd></div></dl>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">{en ? 'Find me on GitHub' : 'GITHUB에서 만나기'}<ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="terminal-intro"><p>ANOTHER WAY TO SAY HELLO.</p><span>{en ? 'Type help and explore.' : 'help를 입력해 나를 더 알아보세요.'}</span></div>
          <MacTerminal profile={profile} skillCategories={skillCategories} language={language} />
        </div></section>

        <section id="stack" aria-labelledby="stack-heading" className="portfolio-section stack-section"><div className="portfolio-container">
          <SectionHeading id="stack-heading" aside="ALWAYS ADDING TO THE TOOLBOX">{en ? 'My toolbox' : '주로 쓰는 기술'}</SectionHeading>
          <div className="stack-grid">{skillCategories.map((category) => (
            <div className="stack-group" key={category.name}><h3>{category.name}</h3><ul className="stack-items">{category.items.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
          ))}</div>
        </div></section>

        <ProjectShowcase projects={projects} github={profile.github} language={language} />

        <section id="awards" aria-labelledby="awards-heading" className="portfolio-section records-section"><div className="portfolio-container">
          <SectionHeading id="awards-heading" number="03" aside="MILESTONES ALONG THE WAY">{sections.awards}</SectionHeading>
          <p className="records-title">LEARNING.<br /><span>LEVELING UP.</span></p>
          <div className="record-groups-grid">{awardGroups.map((group) => <RecordGroup key={group.id} group={group} sectionId="awards" language={language} labels={labels} />)}</div>
        </div></section>
        <section id="activities" aria-labelledby="activities-heading" className="portfolio-section activities-section"><div className="portfolio-container">
          <SectionHeading id="activities-heading" number="04" aside="OUTSIDE THE EDITOR">{sections.activities}</SectionHeading>
          <div className="record-groups-grid">{activityGroups.map((group) => <RecordGroup key={group.id} group={group} sectionId="activities" language={language} labels={labels} />)}</div>
        </div></section>
        <section className="portfolio-section journal-section" aria-labelledby="journal-heading"><div className="portfolio-container">
          <SectionHeading id="journal-heading" number="05" aside="NOTES FROM MY JOURNEY">{sections.blog}</SectionHeading>
          <a href={profile.velog} target="_blank" rel="noreferrer" className="journal-link"><div><span>THE LEARNING LOG ↗</span><h3>{sections.blogTitle}</h3><p>{sections.blogDescription}</p></div><ArrowUpRight size={36} aria-hidden="true" /></a>
        </div></section>

        <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-heading"><div className="portfolio-container">
          <SectionHeading id="contact-heading" number="06" aside="GREAT THINGS START WITH A HELLO">{en ? 'Make a connection' : '연락하기'}</SectionHeading>
          <p className="contact-copy">{en ? <>Have a project in mind?<br />Let’s build something, or just say hello.</> : <>새로운 아이디어, 재미있는 실험, 함께할 프로젝트.<br />개발 이야기부터 가벼운 인사까지, 편하게 연락해 주세요.</>}</p>
          <a className="contact-cta" href={'mailto:' + profile.email}><span>LET’S MAKE<br /><span>SOMETHING.</span></span><span className="contact-arrow"><ArrowUpRight aria-hidden="true" /></span><span className="sr-only">{en ? 'Send an email to Jinhyeong Kim' : '김진형에게 이메일 보내기'}</span></a>
          <ul className="social-links">
            <li><a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><span>@rem0116kjh</span><ArrowUpRight size={17} aria-hidden="true" /></a></li>
            <li><a href={'mailto:' + profile.email}><span>Email</span><span>{profile.email}</span><ArrowUpRight size={17} aria-hidden="true" /></a></li>
            <li><a href={profile.velog} target="_blank" rel="noreferrer"><span>Velog</span><span>@luka0116kjh</span><ArrowUpRight size={17} aria-hidden="true" /></a></li>
          </ul>
          <div className="email-copy"><button type="button" onClick={copyEmail}><Copy size={15} aria-hidden="true" />{en ? 'COPY EMAIL' : '이메일 주소 복사'}</button><span role="status" aria-live="polite">{copyStatus}</span></div>
        </div></section>
      </main>
      <footer className="site-footer"><div className="portfolio-container"><a className="footer-logo" href="#top">REM WORLD.</a><p>© {new Date().getFullYear()} REM. BUILT WITH CURIOSITY.</p><a href="#top">{en ? 'BACK TO TOP ↑' : '맨 위로 ↑'}</a></div></footer>
    </div>
  )
}

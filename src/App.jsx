import { useState, useEffect } from 'react'
import { ArrowDown, ArrowUpRight, ChevronUp, Plus, Moon, Sun } from 'lucide-react'
import MacTerminal from './MacTerminal.jsx'
import ProjectShowcase from './ProjectShowcase.jsx'
import './Portfolio.css'
import translations from './translations.js'

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

function SectionHeading({ id, children, aside }) {
  return <div className="section-heading"><h2 id={id}>{children}</h2><span className="heading-line" aria-hidden="true" />{aside}</div>
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

  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('darkMode')
      if (saved === 'true' || saved === 'false') return saved === 'true'
    } catch { /* Theme switching works without storage. */ }
    return true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#0a0a0a' : '#fafafa')
    try { localStorage.setItem('darkMode', JSON.stringify(isDark)) } catch { /* Storage is optional. */ }
  }, [isDark])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'en' ? 'Jinhyeong Kim · Rem | Developer Portfolio' : '김진형 · Rem | 개발 포트폴리오'
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'en'
      ? 'Jinhyeong Kim (Rem)\'s developer portfolio featuring projects in software, AI, web security, and robotics.'
      : '김진형(Rem)의 개발 포트폴리오. GHAS 알리미, 웹 보안, AI 프로젝트와 대회·자격, 활동 기록을 소개합니다.')
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', language === 'en'
      ? 'A student developer turning curiosity into projects across software, AI, and cybersecurity.'
      : '호기심을 프로젝트로 만드는 학생 개발자. 웹·AI·보안 프로젝트와 성장의 기록.')
    try {
      localStorage.setItem('language', language)
    } catch { /* Language switching still works without persistent storage. */ }
  }, [language])

  return (
    <div className="portfolio-page">
      <a className="skip-link" href="#main">{t.skipLink}</a>
      <header className="site-header">
        <div className="portfolio-container header-inner">
          <a href="#top" className="site-logo" aria-label="Rem 홈"><span aria-hidden="true">◆</span> Rem</a>
          <nav aria-label={t.navLabel}>
            <a href="#about">{en ? 'About' : '소개'}</a><a href="#stack">{en ? 'Stack' : '기술'}</a><a href="#projects">{t.nav.projects}</a><a href="#contact">{en ? 'Contact' : '연락처'}</a>
          </nav>
          <button type="button" className="language-toggle" aria-label={t.languageLabel} onClick={() => setLanguage(en ? 'ko' : 'en')}>{t.languageButton}</button>
          <button type="button" className="theme-toggle" onClick={() => setIsDark((current) => !current)}
            aria-label={en ? (isDark ? 'Switch to light mode' : 'Switch to dark mode') : (isDark ? '라이트 모드로 전환' : '다크 모드로 전환')} title={en ? (isDark ? 'Switch to light mode' : 'Switch to dark mode') : (isDark ? '라이트 모드로 전환' : '다크 모드로 전환')}>
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>
      <main id="main" tabIndex={-1} className="portfolio-container">
        <section id="top" className="portfolio-hero" aria-labelledby="hero-heading">
          <p className="hero-kicker">{en ? 'Hi there, I’m' : '안녕하세요, 저는'}</p>
          <h1 id="hero-heading">Rem<span>{en ? '.' : '예요.'}</span></h1>
          <p className="hero-tagline">{en ? 'Build, explore, learn' : '만들고, 탐구하고, 배웁니다'}<span className="hero-period">.</span></p>
          <p className="hero-description">{en ? <>I’m Jinhyeong Kim, a student developer solving everyday problems with code. I build <strong>useful tools</strong>, explore <strong>web security and AI</strong>, and share what I learn through projects and writing.</> : <>생활 속 작은 불편을 코드로 해결하는 학생 개발자 김진형입니다.{' '}<br className="desktop-break" /><strong>직접 쓸 수 있는 도구</strong>를 만들고, <strong>웹 보안과 AI</strong>를 탐구하며<br className="desktop-break" /> 배운 것들을 프로젝트와 글로 남깁니다.</>}</p>
          <div className="hero-actions">
            <a href="#projects" className="primary-link">{en ? 'View projects' : '프로젝트 보기'}<ArrowDown size={16} aria-hidden="true" /></a>
            <a href="#contact" className="outline-link">contact <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="portfolio-section about-section">
          <SectionHeading id="about-heading">{en ? 'About' : '소개'}</SectionHeading>
          <div className="about-intro">
            <div className="about-prose"><p>{profile.bio}</p><p>{en ? <>From <strong>GHAS Alimi</strong> for school life to an open-source Linux environment and AI debate visualization, I explore my interests by building.</> : <>학교생활을 돕는 <strong>GHAS 알리미</strong>부터 오픈소스 Linux 환경, AI 토론 시각화까지. 궁금한 것을 직접 만들며 제 관심사의 범위를 넓혀가고 있습니다.</>}</p><p className="about-location">South Korea <span>·</span> UTC+9</p></div>
            <dl className="about-facts"><div><dt>{profile.schoolLabel}</dt><dd>{profile.school}</dd></div><div><dt>{profile.majorLabel}</dt><dd>{profile.major}</dd></div><div><dt>{profile.goalLabel}</dt><dd>{profile.goal}</dd></div></dl>
          </div>
          <MacTerminal profile={profile} skillCategories={skillCategories} />
        </section>

        <section id="stack" aria-labelledby="stack-heading" className="portfolio-section">
          <SectionHeading id="stack-heading">{en ? 'Tools I work with' : '주로 쓰는 기술'}</SectionHeading>
          <div className="stack-grid">{skillCategories.map((category) => (
            <div className="stack-group" key={category.name}><h3>{category.name}</h3><ul className="stack-items">{category.items.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
          ))}</div>
        </section>

        <ProjectShowcase projects={projects} github={profile.github} language={language} />

        <section id="awards" aria-labelledby="awards-heading" className="portfolio-section">
          <SectionHeading id="awards-heading">{sections.awards}</SectionHeading>
          <div className="record-groups-grid">{awardGroups.map((group) => <RecordGroup key={group.id} group={group} sectionId="awards" language={language} labels={labels} />)}</div>
        </section>

        <section id="activities" aria-labelledby="activities-heading" className="portfolio-section">
          <SectionHeading id="activities-heading">{sections.activities}</SectionHeading>
          <div className="record-groups-grid">{activityGroups.map((group) => <RecordGroup key={group.id} group={group} sectionId="activities" language={language} labels={labels} />)}</div>
        </section>

        <section className="portfolio-section" aria-labelledby="journal-heading">
          <SectionHeading id="journal-heading">{sections.blog}</SectionHeading>
          <a href={profile.velog} target="_blank" rel="noreferrer" className="journal-link"><div><h3>{sections.blogTitle}</h3><p>{sections.blogDescription}</p></div><ArrowUpRight size={20} aria-hidden="true" /></a>
        </section>

        <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-heading">
          <SectionHeading id="contact-heading">{en ? 'Get in touch' : '연락하기'}</SectionHeading>
          <p className="contact-copy">{en ? <>Have a project in mind?<br />Let’s talk about building something, or just say hello.</> : <>함께 만들고 싶은 프로젝트가 있나요?<br />개발 이야기부터 가벼운 인사까지, 편하게 연락해 주세요.</>}</p>
          <a className="outline-link contact-cta" href={`mailto:${profile.email}`}>{en ? 'Say hello' : '인사 보내기'} <span aria-hidden="true">→</span></a>
          <ul className="social-links">
            <li><a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><span>@rem0116kjh</span><ArrowUpRight size={17} aria-hidden="true" /></a></li>
            <li><a href={`mailto:${profile.email}`}><span>Email</span><span>{profile.email}</span><ArrowUpRight size={17} aria-hidden="true" /></a></li>
            <li><a href={profile.velog} target="_blank" rel="noreferrer"><span>Velog</span><span>@luka0116kjh</span><ArrowUpRight size={17} aria-hidden="true" /></a></li>
          </ul>
        </section>
      </main>
      <footer className="site-footer"><div className="portfolio-container"><p>© {new Date().getFullYear()} Rem</p><p>Made with curiosity. Always learning.</p><a href="#top">{en ? 'Back to top ↑' : '맨 위로 ↑'}</a></div></footer>
    </div>
  )
}

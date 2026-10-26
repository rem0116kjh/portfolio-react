import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import ghasScreen from './assets/projects/ghas-schedule.jpg'

const projectOrder = ['ghas', 'suffice-patch', 'ktspace', 'gcpt', 'lhlinux']
const projectCategories = { ghas: 'app', 'suffice-patch': 'ai', gcpt: 'ai', ktspace: 'experiment', lhlinux: 'experiment' }

function ProjectArt({ id, en }) {
  return (
    <div className={'work-art art-' + id} aria-hidden="true">
      {id === 'ghas' && <>
        <span className="art-kicker">A BETTER SCHOOL DAY</span><span className="art-word">GHAS<br />ALIMI.</span>
        <div className="project-phone"><img src={ghasScreen} alt="" width="900" height="1600" loading="lazy" /></div>
        <span className="art-sticker">EVERYDAY,<br />A LITTLE BETTER ↗</span>
      </>}
      {id === 'suffice-patch' && <>
        <span className="art-kicker">CONTEXT FIRST. CODE SECOND.</span>
        <div className="patch-window"><div className="patch-bar"><i /><i /><i /><span>~/suffice-patch</span></div><div className="patch-code"><p><b>❯</b> suffice-patch</p><p className="patch-muted">Gathering what matters…</p><p><b>✓</b> source & instructions</p><p><b>✓</b> dependencies & tests</p><p><b>✓</b> git changes</p><strong>READY TO BUILD_</strong></div></div><span className="patch-star">✳</span>
      </>}
      {id === 'ktspace' && <>
        <span className="art-kicker">WHAT IF THE SUN CHANGED?</span>
        <div className="solar-system"><i className="solar-orbit" /><i className="solar-orbit solar-orbit-two" /><span className="solar-sun" /><span className="solar-earth" /><span className="solar-mars" /></div>
        <span className="space-word">KTspace<span>EXPLORE THE POSSIBILITIES</span></span>
      </>}
      {id === 'gcpt' && <>
        <span className="art-kicker">DIFFERENT MINDS, BETTER IDEAS.</span>
        <div className="chat-bubble bubble-one">What if…<span>GPT</span></div><div className="chat-bubble bubble-two">Let’s think.<span>CLAUDE</span></div><div className="chat-bubble bubble-three">I see it!<span>GEMINI</span></div><span className="gcpt-mark">GCPT ↗</span>
      </>}
      {id === 'lhlinux' && <>
        <span className="art-kicker">YOUR TERMINAL, YOUR WORLD.</span><span className="linux-command">❯ hello, <span>linux_</span></span><span className="linux-tags">UBUNTU · WSL2 · OPEN SOURCE</span><span className="linux-star">✳</span>
      </>}
      <span className="art-caption">{id === 'ghas' ? (en ? 'ACTUAL APP SCREEN' : '실제 앱 화면') : (en ? 'PROJECT ILLUSTRATION' : '프로젝트 일러스트')}</span>
    </div>
  )
}

export default function ProjectShowcase({ projects, github, language = 'ko' }) {
  const [filter, setFilter] = useState('all')
  const en = language === 'en'
  const orderedProjects = [...projects].sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id))
  const filters = [
    { id: 'all', label: en ? 'ALL' : '전체' },
    { id: 'app', label: 'APP' },
    { id: 'ai', label: 'AI & TOOLS' },
    { id: 'experiment', label: en ? 'EXPERIMENTS' : '실험 · 오픈소스' },
  ]
  const visibleCount = projects.filter((project) => filter === 'all' || projectCategories[project.id] === filter).length

  return (
    <section id="projects" aria-labelledby="projects-heading" className="portfolio-section projects-section"><div className="portfolio-container">
      <div className="section-heading"><p><span className="section-dot" aria-hidden="true" />02 / SELECTED WORKS</p><span className="section-aside">BUILT WITH CURIOSITY, MADE TO MATTER.</span></div>
      <div className="projects-intro"><h2 id="projects-heading">MY LITTLE<br /><span>UNIVERSE.</span></h2><div><p>{en ? <>Ideas worth trying.<br />Projects I built and contributed to.</> : <>생각에서 끝내지 않고,<br />직접 만들고 참여한 프로젝트들.</>}</p><div className="project-filters" role="group" aria-label={en ? 'Filter projects' : '프로젝트 분류'}>{filters.map((item) => (
        <button key={item.id} type="button" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}{item.id === 'all' && <span>{String(projects.length).padStart(2, '0')}</span>}</button>
      ))}</div><span className="sr-only" role="status" aria-live="polite">{en ? visibleCount + ' projects shown' : '프로젝트 ' + visibleCount + '개 표시'}</span></div></div>
      <div className="work-grid">
        {orderedProjects.map((project, index) => (
          <article id={'project-' + project.id} aria-labelledby={'project-' + project.id + '-heading'} key={project.id}
            className={'work-card' + (project.id === 'lhlinux' && filter === 'all' ? ' work-wide' : '')} hidden={filter !== 'all' && projectCategories[project.id] !== filter}>
            <a className="work-visual-link" href={project.links[0].url} target="_blank" rel="noreferrer"
              aria-label={project.name + ' ' + project.links[0].label + (en ? ' (opens in a new tab)' : ' (새 탭)')}>
              <ProjectArt id={project.id} en={en} />
              <span className="work-open"><ArrowUpRight size={23} aria-hidden="true" /></span>
            </a>
            <div className="project-card-head"><span>{String(index + 1).padStart(2, '0')} / {project.category}</span></div>
            <h3 id={'project-' + project.id + '-heading'}>{project.name}</h3>
            <p className="project-summary">{project.description}</p>
            <ul className="project-tags" aria-label={project.name + (en ? ' technologies and areas' : ' 기술 및 분야')}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <div className="project-actions">{project.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer" aria-label={project.name + ' ' + link.label + (en ? ' (opens in a new tab)' : ' (새 탭)')}>{link.label}<ArrowUpRight size={14} aria-hidden="true" /></a>
            ))}</div>
          </article>
        ))}
      </div>
      <a href={github} target="_blank" rel="noreferrer" className="projects-footnote">{en ? 'THERE’S MORE ON GITHUB' : '더 많은 프로젝트는 GITHUB에서'}<ArrowUpRight size={21} aria-hidden="true" /></a>
    </div></section>
  )
}

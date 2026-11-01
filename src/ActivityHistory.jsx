import { Link } from 'react-router-dom'
import { activityGroups } from './activities'

export default function ActivityHistory({ only }) {
  const groups = only ? activityGroups.filter(group => group.id === only) : activityGroups
  return <div className="activity-history">
    {!only && <nav className="activity-index" aria-label="활동 분야 바로가기">{groups.map(group => <a key={group.id} href={'#activities-' + group.id} onClick={event => {
      event.preventDefault()
      const target = document.getElementById('activities-' + group.id)
      target?.scrollIntoView({ block: 'start' })
      target?.focus({ preventScroll: true })
    }}>{group.title}</a>)}</nav>}
    {groups.map(group => <section key={group.id} id={'activities-' + group.id} className="section" aria-labelledby={'activity-heading-' + group.id} tabIndex={-1}>
      <h2 id={'activity-heading-' + group.id}>{group.title}</h2>
      <p className="activity-description">{group.description}</p>
      <ul className="activity-records">{group.items.map(item => <li key={item.title}>
        <span className="activity-date">{item.date || '시기 미기재'}</span>
        <div><h3>{item.title}</h3><p className="activity-result">{item.result}</p><p>{item.detail}</p>
          {item.resultSource && <a className="activity-source" href={item.resultSource} target="_blank" rel="noopener noreferrer">{item.sourceLabel} ↗<span className="sr-only"> (새 탭)</span></a>}
          {item.project && <Link className="activity-source" to={item.project}>프로젝트 상세 →</Link>}
        </div>
      </li>)}</ul>
    </section>)}
  </div>
}

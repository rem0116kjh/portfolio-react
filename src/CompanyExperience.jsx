import visualCampLogo from './assets/companies/visualcamp-logo.png'
import './CompanyExperience.css'

export default function CompanyExperience({ experience }) {
  return (
    <article className="experience-company" aria-labelledby="experience-company-heading">
      <div className="experience-brand">
        <div className="experience-logo-frame">
          <img
            className="experience-logo"
            src={visualCampLogo}
            alt={experience.logoAlt}
            width="447"
            height="447"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="experience-details">
        <header className="experience-header">
          <h3 id="experience-company-heading">{experience.company}</h3>
          <p className="experience-period">{experience.period}</p>
          <p className="experience-program">{experience.program}</p>
          <p className="experience-description">{experience.description}</p>
          <ul className="experience-roles">
            {experience.roles.map((role) => <li key={role}>{role}</li>)}
          </ul>
        </header>

        <ul className="experience-projects">
          {experience.projects.map((project) => (
            <li className="experience-project" key={project.id}>
              <h4>{project.title}</h4>
              <p className="experience-project-status">{project.status}</p>
              <p className="experience-project-description">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

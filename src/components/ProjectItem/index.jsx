import {FaGithubSquare} from 'react-icons/fa'
import {FiExternalLink} from 'react-icons/fi'

import './index.css'

function ProjectItem(props) {
  const {projectDetails} = props
  const {
    projectId,
    imageURL,
    description,
    title,
    githubUrl,
    liveUrl,
  } = projectDetails
  return (
    <li className="project-item-container">
      <img
        className="project-item-image"
        src={imageURL}
        alt={`project-item ${projectId}`}
      />
      <div className="project-item-details-container">
        <h1 className="project-item-title">{title}</h1>
        <p className="project-item-description">{description}</p>
        <div className="project-item-external-link-container">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithubSquare size={25} />
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <FiExternalLink size={25} />
          </a>
        </div>
      </div>
    </li>
  )
}

export default ProjectItem
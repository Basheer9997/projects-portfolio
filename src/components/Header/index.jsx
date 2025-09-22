import './index.css'

function Header() {
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <p className="website-logo">BS</p>
        <ul className="nav-menu">
          {/* <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
            alt="Linked In"
          />
        </li> */}
          <li>
            <a
              href="https://github.com/Basheer9997"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-network-img"
                src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
                alt="Git Hub"
              />
            </a>
          </li>
          {/* <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
            alt="Twitter"
          />
        </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Header
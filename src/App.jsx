import {Component} from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'

import './App.css'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
    githubUrl: 'https://github.com/Basheer9997/Music-Page.git',
    liveUrl: 'https://basheer9997.github.io/Music-Page/',
  },

  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
    githubUrl: 'https://github.com/Basheer9997/tourism-website.git',
    liveUrl: 'https://basheer9997.github.io/tourism-website/',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
    githubUrl:
      'https://github.com/Basheer9997/Static---Advanced-Technologies-Cover-Page.git',
    liveUrl:
      'https://basheer9997.github.io/Static---Advanced-Technologies-Cover-Page/',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
    githubUrl: 'https://github.com/Basheer9997/Virtual-Reality-Website.git',
    liveUrl: 'https://basheer9997.github.io/Virtual-Reality-Website/',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
    githubUrl:
      'https://github.com/Basheer9997/FoodMunch-Responsive-Website.git',
    liveUrl: 'https://basheer9997.github.io/FoodMunch-Responsive-Website/',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
    githubUrl:
      'https://github.com/Basheer9997/FoodMunch-Responsive-Website.git',
    liveUrl: 'https://basheer9997.github.io/FoodMunch-Responsive-Website/',
  },

  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
    githubUrl: 'https://github.com/Basheer9997/Speed-Typing-Test.git',
    liveUrl: 'https://basheer9997.github.io/Speed-Typing-Test/',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
    githubUrl: 'https://github.com/Basheer9997/Random-Joke-Page.git',
    liveUrl: 'https://basheer9997.github.io/Random-Joke-Page/',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
    githubUrl: 'https://github.com/Basheer9997/Sizing-an-Image.git',
    liveUrl: 'https://basheer9997.github.io/Sizing-an-Image/',
  },
]

class App extends Component {
  state = {activeTabId: tabsList[0].tabId}

  getFilterdProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      eachProjectDetails => eachProjectDetails.category === activeTabId,
    )
    return filteredProjects
  }

  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  render() {
    const filteredProjects = this.getFilterdProjects()
    const {activeTabId} = this.state
    return (
      <div className="app-container">
        <Header />
        <h1 className="title">Projects</h1>
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              updateActiveTabId={this.updateActiveTabId}
              isActive={activeTabId === tabDetails.tabId}
              tabDetails={tabDetails}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
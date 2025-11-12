import { Component } from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'
import image from '../src/assets/images/image.png'

import './App.css'

const tabsList = [
  { tabId: 'STATIC', displayText: 'Static' },
  { tabId: 'RESPONSIVE', displayText: 'Responsive' },
  { tabId: 'DYNAMIC', displayText: 'Dynamic' },
  { tabId: 'REACT', displayText: 'React' },
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
  
  {
    projectId: 11,
    category: 'REACT',
    imageURL: 'https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-home-output.png',
    title: 'NxtTrendz',
    description:
      'A React-based shopping application (Nxt Trendz clone) with authentication, cart management, quantity controls, and dynamic cart summary using Context API.',
    githubUrl: 'https://github.com/Basheer9997/nxt-trendz-online-shopping-application.git',
    liveUrl: 'https://nxttrendzbasher.ccbp.tech/',
  },
  {
    projectId: 12,
    category: 'REACT',
    imageURL: image,
    title: 'Restaurant App',
    description:
      'A dynamic React restaurant menu app with API integration, sliding tabs, dish customization, and interactive cart management.',
    githubUrl: 'https://github.com/Basheer9997/Restaurant-App.git',
    liveUrl: 'https://restaurantappbs.ccbp.tech/',
  },
  {
    projectId: 13,
    category: 'REACT',
    imageURL: 'https://assets.ccbp.in/frontend/content/react-js/prime-video-lg-output-img.png',
    title: 'Prime Video Clone',
    description: 'A React-based Prime Video clone featuring movie sliders with React Slick and popup video playback using React Player.',
    githubUrl: 'https://github.com/Basheer9997/prime-video-clone.git',
    liveUrl: 'https://primevidclonebs.ccbp.tech/',
  },
  {
    projectId: 14,
    category: 'REACT',
    imageURL: 'https://assets.ccbp.in/frontend/content/react-js/jobby-app-home-lg-output.png',
    title: 'Jobby App',
    description:
      'A React-based job search app enabling users to log in, filter, and explore job listings with integrated API and state management.',
    githubUrl: 'https://github.com/Basheer9997/jobby-app.git',
    liveUrl: 'https://jobbyappbs2.ccbp.tech/',
  },
  {
    projectId: 15,
    category: 'REACT',
    imageURL: 'https://assets.ccbp.in/frontend/content/react-js/match-game-lg-output.png',
    title: 'React Match Game',
    description: 'An interactive React image-matching game with a 60-second timer, category filters, score tracking, and a “Play Again” option.',
    githubUrl: 'https://github.com/Basheer9997/react-match-game.git',
    liveUrl: 'https://matchgamebs.ccbp.tech/',
  },
  {
    projectId: 16,
    category: 'REACT',
    imageURL: 'https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-success-output.png',
    title: 'GitHub Popular Repos',
    description: 'A React app that fetches and displays popular GitHub repositories by language, with filtering and detailed repository insights.',
    githubUrl: 'https://github.com/Basheer9997/Github-Popular-Repos.git',
    liveUrl: 'https://ghpoplrreposbs.ccbp.tech/',
  },
  {
    projectId: 17,
    category: 'REACT',
    imageURL: 'https://assets.ccbp.in/frontend/content/react-js/simple-todos-lg-output-v2.png',
    title: 'Simple Todos',
    description:
      'A React-based Todo List app with add, edit, complete, and batch-add functionalities, featuring a clean and interactive UI.',
    githubUrl: 'https://github.com/Basheer9997/Simple-Todos.git',
    liveUrl: 'https://simpletodosbs.ccbp.tech/',
  },
  
  
  {
    projectId: 18,
    category: 'REACT',
    imageURL: 'https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-lg-output.png',
    title: 'IPL Dashboard App',
    description: 'A React application that displays IPL team details, latest matches, and recent matches with dynamic routing and API integration.',
    githubUrl: 'https://github.com/Basheer9997/IPL-Dashboard-App.git',
    liveUrl: 'https://ipldbbs.ccbp.tech/',
  },
  {
    projectId: 19,
    category: 'REACT',
    imageURL: 'https://assets.ccbp.in/frontend/content/react-js/app-store-lg-output-v2.png',
    title: 'React App Store',
    description: 'A React-based App Store interface with tab navigation and case-insensitive search for browsing and filtering apps by category.',
    githubUrl: 'https://github.com/Basheer9997/react-app-store.git',
    liveUrl: 'https://basheerappstore.ccbp.tech/',
  },
  
  {
    projectId: 20,
    category: 'REACT',
    imageURL: 'https://assets.ccbp.in/frontend/content/react-js/emoji-game-lg-output.png',
    title: 'Emoji Game',
    description: 'An interactive React Emoji Game where players click unique emojis to score, track top scores, and avoid repeats to stay in the game.',
    githubUrl: 'https://github.com/Basheer9997/Emoji-Game.git',
    liveUrl: 'https://emojigamebs.ccbp.tech/',
  },
  
]

class App extends Component {
  state = { activeTabId: tabsList[0].tabId }

  getFilterdProjects = () => {
    const { activeTabId } = this.state
    const filteredProjects = projectsList.filter(
      eachProjectDetails => eachProjectDetails.category === activeTabId,
    )
    return filteredProjects
  }

  updateActiveTabId = tabId => {
    this.setState({ activeTabId: tabId })
  }

  render() {
    const filteredProjects = this.getFilterdProjects()
    const { activeTabId } = this.state
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

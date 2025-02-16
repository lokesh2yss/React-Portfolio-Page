import rightArrow from '../../assets/right-arrow.svg'
import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import './MainBody.css'
import YellowBorder from '../../components/YellowBorder'
import TechStackCard from '../../components/TechStackCard'
const MainBody = () => {
  const projectsList = [
    {
      title:"Uber clone application",
      description:"Uber Clone Project involved creating the full backend of a ride sharing app", 
      imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1024px-Uber_logo_2018.svg.png",
      gitHubLink:"https://github.com/lokesh2yss"
    },
    {
      title:"AirBnB Hotel Booking Clone",
      description:"AirBnb clone involved creation of a hotel booking system from scratch/", 
      imgUrl:"https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      gitHubLink:"https://github.com/lokesh2yss"
    },
    {
      title: "The LinkedIn Microservices Project",
      description: "LinkedIn app involved creation of a professional social networking app using microservices architecture",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg",
      gitHubLink: "https://github.com/lokesh2yss"
    }
  ];

  const techStackList = [
    { name: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Tailwind CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "ShadCN Ui", image: "https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/20161105/shadcn-ui-logo-EF735EC0E5-seeklogo.com.png" },
    { name: "Spring Boot", image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg" },
    { name: "Kubernetes", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/800px-Kubernetes_logo_without_workmark.svg.png" },
    { name: "PostgreSQL", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { name: "MySQL", image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "Kafka", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Apache_Kafka_logo.svg/800px-Apache_Kafka_logo.svg.png" },
    { name: "Redis", image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg" }
  ];


  
  return (
    <main>
        <h2 className="name-heading">My name is Lokesh</h2>
        <ol>
          <li>I like Vite, Webpack not so much.</li>
          <li>Let's make the web interactive and awesome</li>
          <li>Building cool web interfaces with React</li>
        </ol>
  
        <a href="#" className="hire-me-button">
          <span>Hire Me</span>
          <img src={rightArrow} alt="Right arrow" />
          </a>
      

        <section className='project-section'>
          <h2>These are my projects</h2>
          <p>I build high quality projects of all shapes and sizes</p>  
          <div className="project-container">
            { projectsList.map(project => <ProjectCard {...project} key= {project.title}/>)
          }
           
          </div>
        </section> 
        <section className='techstack-section'>
          <h2>Technologies that I know</h2>
          <p>I have listed some of my top-skills here. Ofcourse I know more</p>  
        </section>
        <div className="techstack-container">
          {techStackList.map(techstack => <TechStackCard {...techstack} key={techstack.name}/>)}
        </div>
      </main>
      
  )
}

export default MainBody

import { useContext } from "react"
import UserContext from "./UserContext"

function About() {
  const useData = useContext(UserContext)
  return (
    <div className="container">
        <h1>About - {useData.userName}</h1>
        <p>This is a simple React application that uses React Router to navigate between different pages.</p>
        <p>The application has three pages: Home, About, and Contact.</p>
        <p>The Home page is the default page that is displayed when the application is launched.</p>
        <p>The About page contains information about the application.</p>
        <p>The Contact page contains a form that allows users to submit their contact information.</p>
    </div>
  )
}

export default About
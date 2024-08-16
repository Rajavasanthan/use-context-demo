import { useContext } from "react"
import UserContext from "./UserContext"

function Home() {
  const userData = useContext(UserContext)
  return (
    <div className="container">
        {/* Create a home page similar to google home page */}
        <h1>Google - {userData.userName}</h1>
        <input type="text" className="form-control" placeholder="Search Google or type a URL" />
        <button className="btn btn-primary">Google Search</button>
        <button className="btn btn-primary">Im Feeling Lucky</button>
    </div>
  )
}

export default Home
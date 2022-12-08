import { Link} from "react-router-dom"

export default function Home () {

    return (
        <div>
            <h1> Welcome Home</h1>
            <h2>this is home</h2>
            <Link to="/about">About</Link>
        </div>
    )
}
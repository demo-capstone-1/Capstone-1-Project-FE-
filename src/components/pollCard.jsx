import { Link } from "react-router-dom"

function pollCard({ poll }){
    return(
        <div className="poll-card">
            <h2>{poll.title}</h2>
            <p>{poll.description}</p>

            <Link to={`/polls/${poll.id}`}>Vote</Link> 

        <br/>

        <Link to={`polls/${poll.id}/results`}>Results</Link>
        </div>
    );
}

export default pollCard
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getPoll, votePoll } from "../api/polls"

function PollPage(){
    const { id } = useParams();
    const [poll, setPoll] = useState(null)
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getPoll(id).then((data) => setPoll(data))
    }, [id])

    async function handleVote(){
        await votePoll(id, selected)
        navigate(`/polls/${id}/results`);
    }

    if(!poll) return <p>Loading...</p>

    return(
        <div>
            <h1>{poll.title}</h1>
            <p>{poll.description}</p>

            {poll.options.map((opt) => {
                <label key={opt.id} style={{display: "block"}}>
                    <input
                        type="radio"
                        name="option"
                        onChange={() => setSelected(opt.id)}
                    />
                    {opt.text}
                </label>
            })}

            <button onClick={handleVote}>Vote</button>
        </div>
    )
}


export default PollPage
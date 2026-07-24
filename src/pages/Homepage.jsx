import { useEffect, useState } from "react";
import PollCard from "../components/pollCard";
import { getPolls } from "../api/polls";

function Homepage() {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPolls();
  }, []);

  async function loadPolls() {
    try {
      const data = await getPolls()
      setPolls(data)
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false)
    }
  }

  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {polls.length === 0 ?(
        <p>No Polls availiable</p>
      ):(
        polls.map((poll) => (
        <PollCard 
        key={poll.id} 
        poll={poll} 
        />
        ))
      )}
    </div>
  );
}

export default Homepage;
            









import { useEffect, useState } from "react";
//import PollCard from "../components/pollCard";

function Homepage() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    fetchPolls();
  }, []);

  async function fetchPolls() {
    try {
      const response = await fetch("http://localhost:8080/polls");
      const data = await response.json();
      setPolls(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Polling App</h1>

      {/* {polls.map((poll) => (
        <PollCard key={poll.id} poll={poll} />
      ))} */}
    </div>
  );
}

export default Homepage;
            









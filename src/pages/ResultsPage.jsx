import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPoll } from "../api/polls";

function ResultsPage() {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    getPoll(id).then((data) => setPoll(data));
  }, [id]);

  if (!poll) return <p>Loading results...</p>;

  const results = poll.options
    .map((opt) => ({ ...opt, count: opt.votes?.length || 0 }))
    .sort((a, b) => b.count - a.count);

  return (
    <div>
      <h1>Results: {poll.title}</h1>

      {results.map((opt) => (
        <p key={opt.id}>
          {opt.text} — {opt.count} vote{opt.count !== 1 ? "s" : ""}
        </p>
      ))}

      <Link to={`/polls/${id}`}>← Back to poll</Link>
    </div>
  );
}

export default ResultsPage;
import { useNavigate } from "react-router-dom";
import { createPoll } from "../api/polls";

function createPollPage() {
  const navigate = useNavigate();

  async function handleCreate(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const option1 = formData.get("option1");
    const option2 = formData.get("option2");

    const pollData = {
      title,
      description,
      options: [{ text: option1 }, { text: option2 }],
    };
    try {
      const newPoll = await createPoll(pollData);
      navigate(`/polls/${newPoll.id}`);
    } catch (error) {
      console.error("Error creating poll:", error);
    }
  }

  return (
    <div>
      <h1>Create Poll</h1>

      <form onSubmit={handleCreate}>
        <input type="text" name="title" placeholder="Poll question" />
        <input type="text" name="description" placeholder="Description" />
        <input type="text" name="option1" placeholder="Option1" />
        <input type="text" name="option2" placeholder="Option2" />
        <button type="submit">Create Poll</button>
      </form>
    </div>
  );
}

export default createPollPage;

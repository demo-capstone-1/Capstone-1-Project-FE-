const BASE_URL = "http://localhost:8080/polls";

// Get all polls
export async function getPolls(){
    const response = await fetch(BASE_URL)

    if(!response.ok){
        throw new Error("Failed to fetch polls")
    }
    return await response.json()
}

// Create a poll 
export async function createPoll(polldata){
    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(polldata)
    })
    console.log(response)

    if(!response.ok){
        throw new Error("Poll Cannot be created")
    }
    return await response.json()
}

// Get a single poll
export async function getPoll(id){
    const response = await fetch(`${BASE_URL}/${id}`)

    if(!response.ok){
        throw new Error("Poll does not exist")
    }
    return await response.json()
}

// To post a vote on a poll 
export async function votePoll(pollId, optionId){
    const response = await fetch(`${BASE_URL}/${pollId}/vote`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            optionId,
        }),
    })
    if(!response.ok){
        throw new Error("Failed to submit a vote")
    }
    return await response.json()
}
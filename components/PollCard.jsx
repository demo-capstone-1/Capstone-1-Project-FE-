function PollCard({poll}){
    return(
        <div className="pollcard">
            <p className="poll_t">{poll.title}</p>
            <h3 className="poll_d">{poll.description}</h3> 

        </div>

    );
}
export default PollCard;
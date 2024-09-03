import PropTypes from 'prop-types'

export const AnecdoteList = ({ anecdotes }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>{anecdote.content}</li>
        ))}
      </ul>
    </div>
  );
};

AnecdoteList.propTypes = {
    anecdotes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string,
            info: PropTypes.string,
            votes: PropTypes.number,
        })
    ).isRequired
}
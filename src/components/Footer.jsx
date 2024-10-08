export const Footer = () => {
    const footerStyle = {
        backgroundColor: 'aliceblue',
        margin: '20px auto',
        padding: '10px',
        textAlign: 'center',
    }
  return (
    <div style={footerStyle}>
      <br />
      Anecdote app for <a href="https://fullstackopen.com/">Full Stack Open</a>.
      See{" "}
      <a href="https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js">
        https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js
      </a>{" "}
      for the source code.
    </div>
  );
};

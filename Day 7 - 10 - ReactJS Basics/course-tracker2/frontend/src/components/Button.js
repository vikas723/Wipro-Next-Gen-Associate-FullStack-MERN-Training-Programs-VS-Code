function Button({ text, onClick }) {
  return (
    <button onClick={onClick} style={{ marginLeft: 10 }}>
      {text}
    </button>
  );
}
export default Button
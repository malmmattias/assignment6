export function Button({ value, onClick }) {
  return (
    <button
      type="button"
      className="btn btn-success"
      value={value}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

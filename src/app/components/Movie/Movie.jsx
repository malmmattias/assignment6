export function Movie({ title, rating, deleteItem }) {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img key={i} src="star.png" alt="Star" className="float-end" />);
  }
  return (
    <li className="list-group-item" data-grade={rating} data-title={title}>
      {title}
      <img
        src="delete.png"
        alt="Delete movie"
        className="delete-movie-icon float-end"
        onClick={() => deleteItem(title)}
      />
      {stars}
    </li>
  );
}

export default Movie;

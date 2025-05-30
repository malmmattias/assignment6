import Movie from "../Movie/Movie";

export function Movielist({ movies, deleteItem }) {
  return (
    <ul id="movies" className="list-group">
      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          rating={movie.rating}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
}

export default Movielist;

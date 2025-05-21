export function Movie({ title, rating }) {
    return(
        <li data-grade={rating} data-title={title}>
        {title}
        <img src="star.png" alt="Star"></img>
        <img src="star.png" alt="Star"></img>
        <img src="star.png" alt="Star"></img>
        <img src="delete.png" alt="Delete movie" className="delete-movie-icon" />
        </li>
    );
}

export default Movie;
import Movie from './Movie';

export function Movielist() {
    return(
        <ul id="movies">
            <Movie title="Star Wars" rating="5"/>
        </ul>
    );
}

export default Movielist;
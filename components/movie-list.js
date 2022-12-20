export default function MovieList(props) {
    const { search } = props

    return (
        <>
            {search.map((movie, index) => (
                <ul className="container" key={index}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <li><img src={movie.Poster} alt="movie" /></li>
                    <li>Movie: {movie.Title}</li>
                    <li>Year: {movie.Year}</li>
                    <li>Type: {movie.Type}</li>
                    <li>Movie ID: {movie.imdbID}</li>
                </ul>
            ))}
        </>
    )
}
import MoviePoster from './movie-poster'

export default function MovieList(props) {
	const { search } = props

	return (
		<>
			{search.map((movie) => (
				<ul className="container" key={movie.imdbID}>
					<li>
						<MoviePoster src={movie.Poster} title={movie.Title} />
					</li>
					<li>Movie: {movie.Title}</li>
					<li>Year: {movie.Year}</li>
					<li>Type: {movie.Type}</li>
					<li>Movie ID: {movie.imdbID}</li>
				</ul>
			))}
		</>
	)
}

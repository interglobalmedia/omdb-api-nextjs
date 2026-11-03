import Head from 'next/head'
import SubmitButton from '../components/buttons/button-submit'

export default function HomePage() {
	return (
		<>
			<Head>
				<title>OMDB API Movie Search App Search</title>
				<meta
					name="description"
					content="An OMDB API Movie Search App built with Next.js, Server Side Rendering, the fetch API, customized Error page, Sass, linters, and more."
				/>
				<meta name="author" content="Maria D. Campbell" />
			</Head>
			<div className="wrapper">
				<div className="index-main">
					<h1 className="movie-data">Search Movies</h1>
					<form id="data" action="/results" method="GET">
						<input
							type="text"
							placeholder="Search"
							name="search"
							autoFocus
							required
						/>
						<SubmitButton />
					</form>
				</div>
			</div>
		</>
	)
}

import { NextSeo } from 'next-seo'
import SubmitButton from '../components/buttons/button-submit'

export default function HomePage() {
	return (
		<>
			<NextSeo
				description="An OMDB API Movie Search App built with Next.js, Server Side Rendering, Client Side queries, the fetch API, customized Error page, Sass, linters, dotenv, and more."
				author="Maria D. Campbell"
				title="OMDB API Movie Search App Search"
			/>
			<div className="site-content-wrapper">
				<div className="wrapper">
					<main className="index-main">
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
					</main>
				</div>
			</div>
		</>
	)
}

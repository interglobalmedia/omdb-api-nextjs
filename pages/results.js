import Link from 'next/link'
import MovieList from '../components/movie-list'
import Head from 'next/head'
import GoTop from '../components/buttons/go-top'
import ScrollStep from '../components/buttons/scroll-step'
import SubmitButton from '../components/buttons/button-submit'

export default function ResultsPage({
	search,
	totalPages,
	message,
	totalItems,
}) {
	return (
		<>
			<Head>
				<title>OMDB API Movie Search App Search Results</title>
				<meta
					name="description"
					content="An OMDB API Movie Search App built with Next.js, Server Side Rendering, the fetch API, customized Error page, Sass, linters, and more."
				/>
				<meta name="author" content="Maria D. Campbell" />
			</Head>
			<div className="buttons-container">
				<ScrollStep />
				<GoTop />
			</div>
			<div className="wrapper">
				<h1 className="search-results">{message}</h1>
				<Link href="/">Search Again</Link>
				{search && (
					<>
						<p className="total-results">
							Total Results: {totalItems}
						</p>
						<p className="total-pages">Total Pages: {totalPages}</p>
					</>
				)}
				<form id="results" action="/results" method="GET">
					<input
						type="text"
						placeholder="Search Again"
						name="search"
						autoFocus
						required
					/>
					<input
						type="number"
						name="page"
						placeholder="Enter Page"
						required
					/>
					<SubmitButton />
				</form>
				<MovieList search={search} />
			</div>
		</>
	)
}

export async function getServerSideProps(context) {
	let query = context.query.search
	let page = context.query.page || 1
	const itemsPerPage = 10
	let totalItems
	const api_key = process.env.OMDB_API_KEY
	if (!query) {
		return {
			props: {
				search: [],
				totalItems: 0,
				totalPages: 0,
				message: 'Enter a movie title to search',
			},
		}
	}
	try {
		const response = await fetch(
			`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&page=${encodeURIComponent(page)}&apikey=${api_key}`,
		)
		const data = await response.json()
		totalItems = Number(data['totalResults'])
		const search = data['Search']
		if (data.Response === 'False') {
			return {
				props: {
					search: [],
					totalPages: 0,
					message: data.Error,
					totalItems: 0,
				},
			}
		}
		return {
			props: {
				search,
				totalPages: Math.ceil(totalItems / itemsPerPage),
				message: `Movie Search Results`,
				totalItems,
			},
		}
	} catch (error) {
		console.error('Error fetching from OMDB API:', error.message)
		return {
			props: {
				search: [],
				totalPages: 0,
				message: `An internal error has occurred`,
				totalItems: 0,
			},
		}
	}
}

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import SubmitButton from '../components/buttons/button-submit'

export default function HomePage() {
    const router = useRouter()
    let { search, api_key = process.env.NEXT_PUBLIC_API_KEY } = router.query

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function fetchMovies() {
        const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${api_key}`)
        const data = await response.json()
        console.log(data)
    }
    useEffect(() => {
        if (search) {
            fetchMovies(search)
        } else {
            return
        }
    }, [search, api_key, fetchMovies])

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
                            <input type="text" placeholder="Search" name="search" autoFocus required />
                            <SubmitButton />
                        </form>
                    </main>
                </div>
            </div>
        </>
    )
}
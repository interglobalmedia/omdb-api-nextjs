import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Search() {
    const router = useRouter()
    let { search, api_key } = router.query
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    api_key = API_KEY

    let fetchMovies = async () => {
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
    }, [search, api_key])

    return (
        <div className="site-content-wrapper">
            <div className="wrapper">
                <main className="index-main">
                    <h1 className="movie-data">Search Movies</h1>
                    <form id="data" action="/results" method="GET">
                        <input type="text" placeholder="Search" name="search" autoFocus required />
                        <button type="submit" name="data-submit">Submit</button>
                    </form>
                </main>
            </div>
        </div>
    )
}
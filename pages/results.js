import { useState, useEffect } from 'react'
import Link from 'next/link'
import MovieList from '../components/movie-list'
import { NextSeo } from 'next-seo'
import GoTop from '../components/buttons/go-top'
import ScrollStep from '../components/buttons/scroll-step'

export default function ResultsPage({ search, totalPages, title, message, query, totalItems, page }) {

    return (
        <>
            <NextSeo
                description="An OMDB API Movie Search App built with Next.js, Server Side Rendering, Client Side queries, the fetch API, customized Error page, Sass, linters, dotenv, and more."
                title="OMDB API Movie Search App Search Results"
            />
            <div class="buttons-container">
                <ScrollStep />
                <GoTop />
            </div>

            <div className="wrapper">
                <h1 className="search-results">{message}</h1>
                <Link href="/">Search Again</Link>
                {search && (
                    <>
                        <p className="total-results">Total Results: {totalItems || ``}</p>
                        <p className="total-pages">Total Pages: {totalPages || ``}</p>
                    </>)}
                <form id="results" action="/results" method="GET">
                    <input type="text" placeholder="Search Again" name="search" autoFocus required />
                    <input type="number" name="page" placeholder="Enter Page" required />
                    <button type="submit" name="results-submit">Submit</button>
                </form>
                <MovieList search={search} />
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    let query = context.query.search
    let page = context.query.page || 1
    console.log(query)
    const itemsPerPage = 10
    let totalItems
    const api_key = process.env.NEXT_PUBLIC_API_KEY
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&page=${page}&apikey=${api_key}`)
    const data = await response.json()
    totalItems = data['totalResults']
    const search = data["Search"]
    console.log(search, 'search')
    console.log(totalItems)
    return {
        props: {
            search,
            totalPages: Math.ceil(totalItems / itemsPerPage) || ``,
            title: `Movie Search Results`,
            message: `Movie Search Results`,
            query,
            totalItems,
            page
        }
    }
}
import { useState, useRef, useEffect } from 'react'

// a placeholder message
const NO_POSTER_MESSAGE = `No poster available for this movie`

const MoviePoster = ({ src, title, className }) => {
	const [imgError, setImgError] = useState(false)
	const imgRef = useRef(null)

	useEffect(() => {
		const img = imgRef.current
		if (img && img.complete && img.naturalWidth === 0) {
			setImgError(true)
		}
	}, [])

	// Check if OMDB returned "N/A" or if the onError state was triggered
	const isPosterMissing = !src || src === 'N/A' || imgError

	if (isPosterMissing) {
		return <p className="no-poster">{NO_POSTER_MESSAGE}</p>
	}

	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			src={src}
			alt={title ? `${title} Poster` : `Movie Poster`}
			className={className}
			onError={() => setImgError(true)}
			ref={imgRef}
		/>
	)
}

export default MoviePoster

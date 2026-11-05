import { useState, useEffect } from 'react'

export default function GoTop() {
	const [showGoTop, setShowGoTop] = useState(false)

	const handleScrollUp = () => {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		const handleVisibleButton = () => {
			setShowGoTop(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleVisibleButton)
		return () => window.removeEventListener('scroll', handleVisibleButton)
	}, [])
	return (
		showGoTop && (
			<button
				className="scroll top icon icon-fill"
				onClick={handleScrollUp}
			>
				<span className="material-icons">keyboard_arrow_up</span>
			</button>
		)
	)
}

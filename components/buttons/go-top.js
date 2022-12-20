import { useState, useEffect } from 'react'

export default function GoTop() {
    const [showGoTop, setShowGoTop] = useState(false)

    const handleVisibleButton = () => {
        setShowGoTop(window.pageYOffset > 50)
    }

    const handleScrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton)
    }, [])
    return (
        <button class="scroll top icon icon-fill" onClick={handleScrollUp}><span class="material-icons">
            keyboard_arrow_up
        </span></button>
    )
}
import { useState } from 'react'

export default function SubmitButton() {
    const [submitted, setSubmitted] = useState('')

    const toggleSubmit = (event) => {
        event.preventDefault()
        if (submitted && event.type === 'pointerdown') {
            setSubmitted('Submitted')
        } else if (!submitted) {
            setSubmitted('Submit')
        }
    }
    return (
        <>
            {submitted && (
                <button type="submit" name="data-submit"
                    style={{
                        maxWidth: "70px",
                        backgroundColor: "#045489",
                        color: "#c7e9c0",
                        outline: "none",
                        border: "none"
                    }}
                    >Submitted</button>
            )}
            {!submitted && (
                <button type="submit" name="data-submit" onPointerDown={toggleSubmit}>Submit</button>
            )}
        </>
    )
}
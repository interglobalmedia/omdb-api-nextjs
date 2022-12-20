export default function ScrollStep() {

    const handleStepButton = () => {
        window.scroll(0, window.pageYOffset + 100)
    }

    return (
        <button class="scroll bottom icon icon-fill" onClick={handleStepButton}><span class="material-icons">
            keyboard_arrow_down
        </span></button>
    )
}
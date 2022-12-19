export default function Footer() {
    const theDate = new Date()
    const footer = `† © ${theDate.getFullYear()} Maria D. Campbell †`;
    return (
        <footer className="site-footer">
            {footer}
        </footer>
    )
}
import Link from 'next/link'

function Error({ statusCode }) {
    return (
        <div className="error-container">
            {statusCode && <h1>Error: {statusCode}</h1>}
            <p>We are sorry, but there was an error!</p>
            <Link href="/">Go back home</Link>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {
        statusCode
    }
}

export default Error
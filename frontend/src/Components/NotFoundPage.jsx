import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            <h1>      🦖      </h1>
            <h1>Page Not Found</h1>
            <Link to="/">Back to login page</Link>
        </div>
    )
}
import { Link } from "react-router-dom";

export default function NotAuthorizedPage() {
    return (
        <div>
            <h1>You are not authorized to visit this page 😕</h1>
            <Link to="/">Back to login page</Link>
        </div>
    )
}
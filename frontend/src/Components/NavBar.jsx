import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function NavBar({ quantity }) {
  const jwtToken = Cookies.get("jwtToken");
  const user = jwtDecode(jwtToken);
  return (
    <nav className="NavBar">
      <div className="NavDiv NavUser">
        <h3>Hello, {user.username}</h3>
        {/* logout buttom*/}
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="NavDiv NavTitle">
        <h2>Groceries App 🍎</h2>
      </div>
      <div className="NavDiv NavCart">
        <img
          src={
            quantity > 0
              ? "src/assets/cart-full.png"
              : "src/assets/cart-empty.png"
          }
        />
      </div>
    </nav>
  );
}

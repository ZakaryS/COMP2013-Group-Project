export default function NavBar({
  quantity,
  user,
  handleLogout,
  handleAddProduct,
}) {
  return (
    <nav className="NavBar">
      <div className="NavDiv NavUser">
        <h3>Hello, {user.username}</h3>
        {/* logout buttom*/}
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="NavDiv NavTitle">
        <h2>Groceries App 🍎</h2>
        {user.admin === true && <button onClick={handleAddProduct}>Add New Product</button>}
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

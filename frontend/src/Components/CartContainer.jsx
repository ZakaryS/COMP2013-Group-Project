import CartCard from "./CartCard";
export default function CartContainer({
  cartList,
  handleRemoveFromCart,
  handleAddQuantity,
  handleRemoveQuantity,
  handleClearCart,
}) {
  return (
    <div className="CartContainer">
      <h2>Cart items: {cartList.length}</h2>
      {cartList.length > 0 ? (
        <>
          {console.log(cartList)}
          {cartList.map((product) => (
            <CartCard
              key={product.id}
              {...product}
              handleRemoveFromCart={handleRemoveFromCart}
              handleAddQuantity={handleAddQuantity}
              handleRemoveQuantity={handleRemoveQuantity}
            />
          ))}
          <div className="CartListBtns">
            <button onClick={() => handleClearCart()} className="RemoveButton">
              Empty Cart
            </button>
            <button id="BuyButton">
              Checkout:{" $"}
              {cartList
                .reduce(
                  (total, item) =>
                    total +
                    parseFloat(item.price.replace("$", "")) * item.quantity,
                  0
                )
                .toFixed(2)}
            </button>
          </div>
        </>
      ) : (
        <h3>No items in cart</h3>
      )}
    </div>
  );
}
